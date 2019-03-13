import React, { Component } from 'react';
import SquareAPI from './API/APIfile.js';
import './App.css';
import Map from './component/Map';
import SideBar from './component/SideBar';

class App extends Component {
  constructor() {
     super();
     this.state = {
       venues: [],
       markers: [],
       center: [],
       zoom: 15,
       updateSuperState: obj => {
        this.setState(obj);
       }
     };
   }

/* Function to close all markers*/
   closeAllMarkers = () => {
       const markers = this.state.markers.map(marker => {
         marker.isOpen = false;
         return marker;
       });
       this.setState({ markers: Object.assign(this.state.markers, markers) });
     };

/* Function for marker click*/
   handleMarkerClick = (marker) => {
      this.closeAllMarkers();
      marker.isOpen = true;
      this.setState({ markers: Object.assign(this.state.markers, marker) });

      const venue = this.state.venues.find(venue => venue.id === marker.id);
    //  console.log(venue, "here 35");
    //  SquareAPI.getVenueDetails(marker.id).then(res => console.log(res));
    SquareAPI.getVenueDetails(marker.id).then(res => {
        const newVenue = Object.assign(venue, res.response.venue);
        this.setState({ venues: Object.assign(this.state.venues, newVenue) });
//console.log("getVenueDetails app.js line 41");
//console.log(newVenue);
      });
  };

/* Function for sidebar list click.*/
  handleListItemClick = venue => {
     const marker = this.state.markers.find(marker => marker.id === venue.id);
     this.handleMarkerClick(marker)
  //  console.log(venue)
  }
/* API data search */
  componentDidMount(){
    SquareAPI.search({
      near:"Charlotte,NC",
      query:"coffee",
      limit: 10
    }).then(results => {
//console.log("line57 in App.js: ");
//console.log(results);
      const { venues } = results.response;
//console.log(venues);
        const { center } = results.response.geocode.feature.geometry;
//console.log(center);
        const markers = venues.map(venue => {
          return {
            lat: venue.location.lat,
            lng: venue.location.lng,
            isOpen: false,
            isVisible: true,
            id: venue.id
          };
        });
        this.setState({ venues, markers, center });
      });
    }

  render() {
    return (
      <main>
        <header id="title">
          <h1>Charlotte Area Neighborhood Map</h1>
          <h2>This map shows Coffee Shops around Charlotte, NC and will allow filtering in the box below.</h2>
        </header>
        <section>
          <div className="App">
          <SideBar {...this.state} handleListItemClick={this.handleListItemClick} />
          <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
         </div>
       </section>
    </main>
    );
  }
}

// componentDidMount(){
//  SquareAPI.search({
//    near:"Austin,TX",
//    query:"tacos",
//    limit: 10
//  }).then(results => console.log(results));
// }
// render() {
//  return (
//    <div className="App">
//      <Map/>
//    </div>
//  );
// }
// }

export default App;
