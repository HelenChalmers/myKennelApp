import React, { Component } from 'react'


export default class AnimalList extends Component {
    render() {
        return (
            <div className="animals">
                <h1>Our Cute Animals</h1>
                {
                    this.props.animals.map(animal =>
                    <div id={`animal--${animal.id}`} key={animal.id}>
                       <h4>{animal.name}-{animal.type}</h4>
                    </div>
                    )
                }
            </div>
        );
    }
}