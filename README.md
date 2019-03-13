# Neighborhood Map Project

Udacity Front End Web Developer Course project to create a responsive App using React that implements a Map API [Google Maps](https://tomchentw.github.io/react-google-maps/) and another Venues type of API [FourSquare] (https://developer.foursquare.com/) to show locations on a map via markers or photos with a filterable list of those locations.  In this case it displays coffee shops located around Charlotte, NC.

## Table of Contents
* [Instructions](#instructions)
* [Usage](# Usage)
* [Contributing](#contributing)
* [License](#license)


** NOTE: due to limits with the API calls, the map may be greyed out and the infoboxes may not show when map markers are clicked.
npm install --save react-google-maps
## Available Scripts

In the project directory, you can run:

### `npm start`
## Usage
You need Node.js installed on your computer to run the app

To run app:
1. Clone the repository
2. npm install --save react-google-maps
3. Run `npm start`


Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Service Worker
The service worker will cache the app in Production mode. Take the following steps:
1. npm run build
2. npm install -g serve
3. In build directory: serve -s
The app will be hosted at http://localhost:5000

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

**Note: this is a one-way operation. Once you `eject`, you canâ€™t go back!**

If you arenâ€™t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point youâ€™re on your own.

You donâ€™t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldnâ€™t feel obligated to use this feature. However we understand that this tool wouldnâ€™t be useful if you couldnâ€™t customize it when you are ready for it.

## APIs

Google Maps API was used to show the map and generate the markers while the Foursquare API was used to pull more information on venues and show more data when you click on the marker which launches the infoWindow.

## Attributions

1. [Google Maps API](https://maps.google.com)
2. [Foursquare](https://https://foursquare.com)
3. [Forrest Walker YouTube walkthrough](https://www.youtube.com/watch?v=ktc8Gp9jD1k&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)

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
# my_neighborhood_map
