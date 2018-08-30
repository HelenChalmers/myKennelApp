import React, { Component } from "react"
import "./animals.css"
console.log("why is this not working?")

export default class AnimalEdit extends Component {
    
    // Set initial state
    state = {
        animalName: "",
        type: "",
        employee: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    
    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    handleSubmit = evt => {
        evt.preventDefault()
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const animal = {
                name: this.state.animalName,
                type: this.state.type,
                employeeId: this.props.employees.find(e => e.name === this.state.employee).id
            }
                

            // Create the animal and redirect user to animal list
            this.props.editAnimal(this.props.match.params.animalId, animal).then(() => this.props.history.push("/animals"))
        }
       
    };

    render() {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) || {}
        console.log("does this work??")
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="animalName"
                               defaultValue={this.state.name}
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type" placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue="" name="employee" id="employee"
                                onChange={this.handleFieldChange}>
                            <option value="">Select an employee</option>
                        {
                            this.props.employees.map(e => <option key={e.id} id={e.id}>{e.name}</option>)
                        }
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary" id="submit-edit" onClick={this.handleSubmit}>Submit</button>
                    </form>
                    </React.Fragment>
        )
    }
}

