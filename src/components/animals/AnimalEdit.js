import React, { Component } from "react"
import "./animals.css"
console.log("why is this not working?")

export default class AnimalEdit extends Component {

    componentDidMount () {
        const animal = this.props.animals.find(a => a.id === parseInt(this.props.match.params.animalId, 0)) 
        this.setState(animal)
              
    }
    
    // Set initial state
    state = {
            name:"",
            type:"",
            employeeId:""
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
        const conditionEmployee = typeof this.state.employeeId === 'number'
        if (this.state.employee === "") {
            window.alert("Please select a caretaker")
        } else {
            const animal = {
                name: this.state.name,
                type: this.state.type,
                employeeId: conditionEmployee ? this.state.employeeId : this.props.employees.find(e => e.name === this.state.employeeId).id
            }
              

            // Create the animal and redirect user to animal list
            console.log("animal", animal)
            this.props.editAnimal(this.props.match.params.animalId, animal).then(() => this.props.history.push("/animals"))
            
        }
       
    };

    render() {
        
        return (
            <React.Fragment>
                <form className="animalForm">
                    <div className="form-group">
                        <label htmlFor="animalName">Animal Name</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="name"
                               defaultValue={this.state.name}
                               placeholder="Animal name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="type">Type:</label>
                        <input type="text" required="true"
                               className="form-control"
                               onChange={this.handleFieldChange}
                               id="type" 
                               defaultValue={this.state.type}
                               placeholder="Type" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee">Assign to caretaker</label>
                        <select defaultValue={this.state.employeeId} name="employee" id="employeeId"
                                onChange={this.handleFieldChange}>
                            <option defaultValue={this.state.employeeId}>Select an employee</option>
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

