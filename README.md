This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Data Heirarchy

- Rooms -> Devices -> Controls
- Each room has: name, icon fields
- Each Device has: name, icon, switch (full system switch)
  {
    "name": "Clothes Washer",
    "switch": true,
    "icon":""
  }

- If controls is null then it is only on/off control
- Controls types available: mode (select), temperature (number), scale (scale)
- Each Control has these as common:
  {
    "name": "Intensity",
    "type": "scale",
    "value": 20
  }

- Mode Control
  {
    "name": "Intensity",
    "type": "mode",
    "value": "low",
    "options": {
        "low": {
        "name": "Low",
        "icon": "" (optional: Text would appear instead of the icon)
        },
        "medium": {
        "name": "Medium",
        "icon": ""
        },
        "high": {
        "name": "High",
        "icon": ""
        }
    }
  }

- Temperature Control
 {
    "name": "Temperature",
    "type": "temperature",
    "unit": "c", (c or f)
    "value": 18,
    "min": 16,
    "max": 30
}

- Scale control
{
    "name": "Intensity",
    "type": "scale",
    "value": 20,
    "min": 0,
    "max": 100,
    "step": 10
}


APIs are stores in utils/apis and axios.js is the main creator of axios, the base_uri is store in config.js

Device control type must be added as export const in utils/deviceControls.types.js
Device control type should be added to the controlsswitcher component in 
  - /src/components/Device/ControlsSwitcher/ControlsSwitcher.js
Device control render code should be added in components/Device/Controls
Each control must call onUpdateValue prop when value is changed and the new value is passed to it

APIs are stored in utils/api