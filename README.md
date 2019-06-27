
# Home Automation UI App

## [Live Demo](http://home-automation-ui.netlify.com)

## Description

Single Page JavaScript Application that is simulating house automation controls that allows remote clients (iPad browser web app, for example) to monitor and control home appliances. 

It was built using ReactJS and unit tested with Jest and Enzyme. HTTP-based API interactions uses Axios and UI Data Management uses Redux. Styles are built using SCSS modules. Icons use FontAwesome, and they are provided as an NPM package rather than a CDN to allow for Offline-mode or Mobile Application easier.

HTTP-based API interactions are simulated using dummy data in the `public/data` folder for `GET` requests and for changing values they are simulated using fake promises that should be replaced with axois `PATCH` requests.

## Folder Structure

UI Architecture uses the "Component Design Pattern" for organizing the code. It have ***components*** for data presentation and ***containers*** for doing Redux API calls. It has ***Higher-Order-Components (HOC)*** that adds extra functionalities for containers like Lazy-Loading, Layout Design and Error Handling.

### Folders Description

Description of the core folders under `src` directory

 - `src/components`: Main UI components and also controls for extending the app.
 - `src/containers`: components that react with the Redux store and they represent controllers in an MVC model.
 - `src/hoc`: Higher-Order-Components that work as decorators rather than components.
 - `src/store`: Redux store reducers, actions creators, and action types. They are divided per store part/feature to allow for easier scalability.
 - `src/styles`: General styles and font includes that are not bounded for a certain component.
- `src/utils`: API functions, helper functions, application contents and FontAwesomeIcons exports.

## Application Design Approach

The application is organized in the following hierarchy:

- **Rooms**: All the rooms of the house 
    - **Devices**: Each room has a number of devices like a light bulb, air conditioner, ...etc. Each device has a main switch to turn it ON/OFF.
        - **Controls**: Each device has a number of controls that represent the current state of the device.

## Data Models

> Note: All FontAwesome icons need to be exported in `src/utils/fontawesome.icons.js`. That allows them to be available as SVG exports and alternatives to a CDN option.

### Rooms
|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name|
|icon|`string`|FontAwesome icon name|
|devicesCount|`integer`|Number of devices available in this room.|

### Devices
|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|icon|`string`|FontAwesome icon name.|
|switch|`boolean`|State of the device main switch (`true`: ON, `false`: OFF)|
|controls|`object`|(optional) Represents a hash table for the various controls of this device, and each matches certain control component in `src/components/Devices/Controls` folder. Each key in this field represents the id of the control.|


### Controls

The following describes the standard fields for all controls that are needed

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`any`|Represents the current value of the control.|


## Controls available

### Temperature Control

This control represents the temperature of a device like an Air Conditioner or a Header. It can increase or decrease the current temperature using two buttons.

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`integer`|Represents the current value of the control.|
|min|`integer`|The minimum value for the control.|
|max|`integer`|The maximum value for the control.|
|unit|`string`|The unit of the control (°C/°F).|

### Mode Control

This control acts like a radio selector and chooses a specific device mode or operation like cold or hot for an Air Conditioner.

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`string`|Represents the key from the options object field.|
|options|`object`|This is acts as a hash table for the options available for this control. Each key of the options represents the values available for this control.|

The following is a description of the objects of any key on the options field:

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|icon|`string`|(optional) FontAwesome icon name. If not provided, it renders the `name` field instead. |


### Scale Control

This control represents a slider visualization like a light bulb intensity. It is range input.

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`integer`|Represents the current value of the control.|
|min|`integer`|The minimum value for the control.|
|max|`integer`|The maximum value for the control.|
|step|`integer`|The step of the range slider.|

## API Endpoints available

The application uses REST for performing HTTP API calls. It uses `axios` library for performing the calls.


Available API functions are in `src/utils/api` folder. It has three files:

- `axios.js`: Initializing the axios instance to be used throughout the application.
- `devices.api.js`: API functions for devices.
- `rooms.api.js` : API functions for rooms

The following are the available API calls and their payload and response data:

### Rooms API

- `getRoomsApi()`: GET Request: Returns the rooms of the house.
Response data:

    |Field Name|Type | Description|
    |--|--|--|
    |rooms|`object`|Hash table of standard rooms objects each key is the room id and the value is the room object.|


### Devices API

- `getRoomDevicesApi(roomId)`: GET Request: Returns the devices of the room. It needs to be passed the room id `(integer)`.


    |Field Name|Type | Description|
    |--|--|--|
    |devices|`object`|Hash table of standard device objects each key is the device id and the value is the device object.|


- `toggleDeviceSwitchApi(deviceId)`: PATCH Request: Changes the state of the device ON`(true)`/OFF`(false)`. It needs to be passed the device id `(integer)`.
If succeeded, it returns `200` and the deviceId in the data.

    |Field Name|Type | Description|
    |--|--|--|
    |deviceId|`integer`|The ID of the device|


- `updateDeviceControlValueApi(payload)`: PATCH Request: Changes the value of a cetain control. 
If succeeded, it returns `200` and the payload.

  Payload Data:

    |Field Name|Type | Description|
    |--|--|--|
    |deviceId|`integer`|The ID of the device|
    |controlId|`integer`|The ID of the control to be changed its value.|
    |newValue|`any`|The new value for the control.|



### API Error Handling

The API error requests are handled by a global `Modal` component in the `src/hoc/Layout/Layout.js`. All API should call `showErrorModal` Redux action with the error message as a parameter to show the error modal with the message.

The state of the error modal is handled by the `ui` Redux store reducers.


## Application Extending

The application is ready to be extended for three main categories: Controls Types, API Endpoints, and Redux Store.

For adding extra rooms, devices and controls, they are retrieved by calling endpoints to get the data from their APIs.

### Device Controls

The following are the steps to add a new control:

- Create the component folder in `src/components/Device/Controls` folder and create the following 3 files (replace `[control]` with the name of the needed control: 
    - `[control].js`: ReactJS Component for handling the rendering of the component.
    - `[control].test.js` : Unit tests for the created component.
    - `[control].scss`: SCSS module styles for the component.
- The component is passed prop `onUpdateValue` which must be called when the value is changed and it should pass the deviceId and the updated value.
- Add the device type constant in `src/utils/deviceControls.types.js`.
- Add the control into the `ControlsSwitcher` component at `src/components/Device/ControlsSwitcher/ControlsSwitcher.js` in the switch case to select the component when the type matches.

    
### API Endpoints

To add new endpoint calls to perform extra functionalities, they can be added in `src/utils/api`.

To change the `base_url`, it is stored in `src/config.js`.

### Redux Store

To add new redux actions, reducers and action types to perform extra functionalities, they can be added in `src/store/`.

The application has three main redux sub-stores:

- `devices`: stores the state of the currently opened room.
- `rooms`: stores the rooms of the application.
- `ui`: stores some of the states of the UI.

## Available Scripts
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>

Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting.

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size.

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app.

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration.

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment.

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify.
