# Product Catalog

This app is a product catalog that displays data from a API.

Implemented [React Hooks](https://reactjs.org/docs/hooks-intro.html) to replace class components. Used [React Portals](https://reactjs.org/docs/portals.html) to display a modal window.

Created a [node/express](https://expressjs.com/) server to expose an endpoint, since the URL provided didn't accept CORS. Added some headers to the server to be able to to cross-domain requests.

Used [Semantic UI](https://semantic-ui.com/) for easy prototyping with a nice UI and adding the responsiveness for mobile devices.

Used [concurrently](https://www.npmjs.com/package/concurrently) to be able to run multiple node tasks (start the express server and the react app) at the same time with a single command.

The application was tested using [React Testing Library](https://testing-library.com/).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test -- --coverage --watchAll=true` 

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
