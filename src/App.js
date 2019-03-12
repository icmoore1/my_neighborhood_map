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
          //  id: venue.id
          };
        });
        this.setState({ venues, markers, center });
      });
    }

  render() {
    return (
      <div className="App">
      //  <Map/>
      //  <Map {...this.state} handleMarkerClick={this.handleMarkerClick} />
      <Map {...this.state} />
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
