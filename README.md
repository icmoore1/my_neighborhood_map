# Neighborhood Map Project

Udacity Front End Web Developer Course project to create a responsive App using React that implements a Map API [Google Maps](https://tomchentw.github.io/react-google-maps/) and another Venues type of API [FourSquare](https://developer.foursquare.com/) to show locations on a map via markers or photos with a filter-able list of those locations.  In this case it displays coffee shops located around Charlotte, NC.

## Table of Contents
* [Instructions](#Instructions)
* [Usage](#Usage)
* [Attributions](#Attributions)
* [Service Worker](#Service Worker)
* [APIs](#APIs)



** NOTE: due to limits with the API calls, the map may be greyed out and the infoboxes may not show when map markers are clicked.
npm install --save react-google-maps


## Instructions
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

## APIs

Google Maps API was used to show the map and generate the markers while the Foursquare API was used to pull more information on venues and show more data when you click on the marker which launches the infoWindow.

## Attributions

1. [Google Maps API](https://maps.google.com)
2. [Foursquare](https://https://foursquare.com)
3. [Forrest Walker YouTube walkthrough](https://www.youtube.com/watch?v=ktc8Gp9jD1k&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)
