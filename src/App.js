import React, { Component } from 'react';
import SquareAPI from './API/';
import './App.css';
import Map from './component/Map';

class App extends Component {
  constructor() {
     super();
     this.state = {
       venues: [],
       markers: [],
       center: [],
       zoom: 12,
    //   updateSuperState: obj => {
    //     this.setState(obj);
    //   }
     };
   }

   closeAllMarkers = () => {
       const markers = this.state.markers.map(marker => {
         marker.isOpen = false;
         return marker;
       });
       this.setState({ markers: Object.assign(this.state.markers, markers) });
     };

   handleMarkerClick = (marker) => {
      this.closeAllMarkers();
      //console.log(marker);
      marker.isOpen = true;
      this.setState({ markers: Object.assign(this.state.markers, marker) });

      const venue = this.state.venues.find(venue => venue.id === marker.id);
    //  console.log(venue, "here 35");
    //  SquareAPI.getVenueDetails(marker.id).then(res => console.log(res));
    SquareAPI.getVenueDetails(marker.id).then(res => {
        const newVenue = Object.assign(venue, res.response.venue);
        this.setState({ venues: Object.assign(this.state.venues, newVenue) });
        console.log(newVenue);
      });
  };

  componentDidMount(){
    SquareAPI.search({
      near:"Austin,TX",
      query:"tacos",
      limit: 10
    }).then(results => {
      //console.log(results));
      const { venues } = results.response;
        const { center } = results.response.geocode.feature.geometry;
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
      <div className="App">
      //  <Map/>
      <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
    //  <Map {...this.state} />
      </div>
    );
  }
}

//componentDidMount(){
//  SquareAPI.search({
//    near:"Austin,TX",
//    query:"tacos",
//    limit: 10
//  }).then(results => console.log(results));
//}
//render() {
//  return (
//    <div className="App">
//      <Map/>
//    </div>
//  );
//}
//}

export default App;
