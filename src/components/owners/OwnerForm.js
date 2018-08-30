import React, { Component } from "react"
import "./owners.css"

export default class OwnerForm extends Component {
    // Set initial state
    state = {
        ownerName: "",
        number: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating owner object, and
        invoking the function reference passed from parent component
     */
    constructNewOwner = evt => {
        evt.preventDefault()
        if (this.state.number === "") {
            window.alert("Please provide a good phone number")
        } else
         {
            const owner = {
                name: this.state.ownerName,
                number: this.state.number,
            }

            // Create the owner and redirect user to owner list
            this.props.addOwner(owner).then(() => this.props.history.push("/owners"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="ownerName"
                               placeholder="Owner name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Phone Number</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="number" placeholder="number" />
                    </div>
                    
                    <button type="submit" onClick={this.constructNewOwner} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}

// {/* <div className="form-group">
//                         <label htmlFor="employee">Name</label>
//                         <select defaultValue="" name="employee" id="employee"
//                                 onChange={this.handleFieldChange}>
//                             <option value="">PhoneNumber</option>
//                         {
//                             this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
//                         }
//                         </select>
//                     </div> */}