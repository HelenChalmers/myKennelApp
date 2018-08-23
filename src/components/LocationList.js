import React, {Component} from 'react';
// import Kennel from "./Kennel";
// import SouthNashKennel from "./SouthNashKennel";



export default class LocationList extends Component {
    render() {
        return (
            <div className="locations">
                <h3>Our Locations</h3>
                {
                    this.props.locations.map(location =>
                    <div id={`location--${location.id}`} key={location.id}>
                       <h4>{location.name}</h4>
                       <p>{location.address}</p>
                    </div>
                    )
                }
            </div>
        );
    }
}

// {/* <h4>Nashville South Location</h4>
// <h5>2323 Kitty Place</h5>
// <h4>Nashville North Location</h4>
// <h5>2323 Puppy Parkway</h5> */}