
# Home Automation UI App

## [Live Demo](http://home-automation-ui.netlify.com)

## Description
Single Page Application JavaScript application that is simulating house automation, that will allow remote clients (iPad browser web app for example) to monitor and control home appliances. 

It was built using ReactJS and united tested with Jest and Enzyme. It performs HTTP-based API interation using Axios and UI Data Management using Redux. Styles are built using SCSS modules. FontAwesome was used for Icons and they are provided as an NPM package rather than a CDN to allow for Offline-mode or Mobile Application easier.

HTTP-based API interation are simulated using dummy data in `public/data` folder for `GET` requests and for changing values they are simluated using fake promises that will be replaced with axois `PUT` requests.

## Folder Structure

UI Architecture uses the "Component Design Pattern" for organizing the code. It have ***components*** for data presentation and ***containers*** for doing redux api calls. It has ***Higher-Order-Components (HOC)*** that addes extra functionalities for containers like Lazy-Loading, Layout Design and Error Handling.

### Folders Description
This descripes the core folders under `src` directory

 - `src/components`: Main UI components and also controls for extending the app.
 - `src/containers`: components the reacts with the redux store and they represents controllers in an MVC model.
 - `src/hoc`: Higher-Order-Components that work as decorators rather than components.
 - `src/store`: Redux store reduers, actions creators and actions types. They are divided per store part/feature to allow for easier scalibility.
 - `src/styles`: General styles and font includes that are not bounded for a certain component.
- `src/utils`: API functions, helper functions, application contants and FontAwesomeIcons exports.

## Appication Design Approach

To allow for easier scalibility, the application is organised in the following heirarchy:

- **Rooms**: All the rooms of the house 
	- **Devices**: Each room has number of devices like a light bulb, air conditioner, ...etc. Each Device has a main switch to turn it ON/OFF.
		- **Controls**: Each device has number of controls that represents the current state of the device.

## Data Models

> Note: All FontAwesome icons need to be exported in `src/utils/fontawesome.icons.js`. This allows them to be available as SVG exports and alternative to a CDN option.

### Rooms
|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name|
|icon|`string`|FontAwesome icon name|

### Devices
|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|icon|`string`|FontAwesome icon name.|
|switch|`boolean`|State of the device main switch (`true`: ON, `false`: OFF)|
|controls|`object`|(optional) Repesents a hash table for the various controls of this device and each matches a certain control componets in `src/components/Devices/Controls` folder. Each key in this field represents the id of the control.|


### Controls

This describes the common fields for all controls that are needed

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`any`|Represents the current value of the control.|


## Example Controls available

### Temperature Control

This represents the temperature of a device like an Air Conditioner or a Header. It can increase or decrease the current temperature using two buttons.

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`integer`|Represents the current value of the control.|
|min|`integer`|The minimum value for the control.|
|max|`integer`|The maximum value for the control.|
|unit|`string`|The unit of the control (°C/°F).|

### Mode Control

This acts like a radio selector and choose a device certain mode or operation like cool or hot for an Air Conditioner.

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`string`|Represents the key from the options object field.|
|options|`object`|This is acts as a hash table for the options available for this control. Each key of the options represents the values available for this control.|

The following is a descriptions for the objects of any key on the options field:

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|icon|`string`|(optional) FontAwesome icon name. If not provided it will render the `name` field instead. |


### Scale Control

This represents a control that supports slider visualization like a light bulb intensity. It is range input.

|Field Name|Type | Description|
|--|--|--|
|name|`string`|The room name.|
|type|`string`|The type name of the control and they are stored in `src/utils/deviceControls.types.js`.|
|value|`integer`|Represents the current value of the control.|
|min|`integer`|The minimum value for the control.|
|max|`integer`|The maximum value for the control.|
|step|`integer`|The step of the range slider.|

## Device Controls Extending


APIs are stores in utils/apis and axios.js is the main creator of axios, the base_uri is store in config.js

  

Device control type must be added as export const in utils/deviceControls.types.js

Device control type should be added to the controlsswitcher component in

- /src/components/Device/ControlsSwitcher/ControlsSwitcher.js

Device control render code should be added in components/Device/Controls

Each control must call onUpdateValue prop when value is changed and the new value is passed to it


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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
