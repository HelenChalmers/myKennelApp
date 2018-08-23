
import React, { Component } from "react"
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./LocationList"
import "./Kennel.css"
import AnimalList from "./AnimalList";


class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "North Nashville", address: "500 Circle Way" },
        { id: 2, name: "South Nashville", address: "10101 Binary Court" },
    ]

    animalsFromAPI = [
        { id: 1, name: "Molly", type: "dog" },
        { id: 2, name: "Ruby", type: "dog" },
        { id: 3, name: "Shadow", type: "cat" },
        { id: 4, name: "Pinky", type: "fish" },
        { id: 5, name: "Baby", type: "dog" }

    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel