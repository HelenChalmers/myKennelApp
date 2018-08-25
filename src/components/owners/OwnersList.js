import React, { Component } from 'react'



export default class AnimalList extends Component {
    render() {
        console.log(this.props.owners)
        return (
            <div className="Owners">
                <h3>Owners:</h3>
                {
                    this.props.owners.map(owner =>
                    <div id={`owner--${owner.id}`} key={owner.id}>
                       <h4>{owner.name} - {owner.number}</h4>
                    </div>
                    )
                }
            </div>
        );
    }
}