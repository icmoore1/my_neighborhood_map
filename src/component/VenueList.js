import React, { Component } from 'react';
import ListItem from './ListItem';

export default class VenueList extends Component {
  render() {
    return (
      <ol className="venueList" id="venueList">
       {this.props.venues &&
         this.props.venues.map((venue, index) => (
          <ListItem
             key={index}
             {...venue}
            handleListItemClick={this.props.handleListItemClick}
          />
        ))}
      </ol>
    );
  }
}
