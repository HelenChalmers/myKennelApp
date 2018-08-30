import React, { Component } from 'react'
import './owners.css'
import {Link} from "react-router-dom"




export default class OwnerList extends Component {
    render() {
        console.log(this.props.owners)
        return (
            <React.Fragment>
                <div className="ownerButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/owners/new")}
                            }>
                        New Owner
                    </button>
                </div>
                <section className="owners">

            <div className="Owners">
                <h3>Owners:</h3>
                {
                    this.props.owners.map(owner =>
                    <div id={`owner--${owner.id}`} key={owner.id}>
                       <h4>{owner.name}</h4>
                       <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                       <button
                                    onClick={() => this.props.deleteOwners(owner.id)}
                                    className="card-link-Owner">Delete</button>
                    </div>
                    )
                }
            </div>
            </section>
            </React.Fragment>
        );
    }
}