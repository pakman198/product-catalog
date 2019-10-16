# Product Catalog

This app is a product catalog that displays data from a API.

Created a [node/express](https://expressjs.com/) server to expose an endpoint, since the URL provided didn't accept CORS. Added some headers to the server to be able to to cross-domain requests..

Used [Semantic UI](https://semantic-ui.com/) for easy prototyping with a nice UI and adding the responsiveness for mobile devices.

Used [concurrently](https://www.npmjs.com/package/concurrently) to be able to run multiple node tasks (start the express server and the react app) at the same time with a single command.

The app was bundled using [webpack](https://webpack.js.org/) instead of using the [create-react-app](https://github.com/facebook/create-react-app) script. I created a dev environment and also an option to build the app ready for production.

The application was tested using [React Testing Library](https://testing-library.com/).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test` 

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.
