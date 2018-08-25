import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import './ApplicationViews.css'




export default class ApplicationViews extends Component {


    state = {
            locations: [],
            animals: [],
            employees: [], 
            owners: []
    }

    
    // employeesFromAPI = [
    //     { id: 1, name: "Jessica Younker" },
    //     { id: 2, name: "Jordan Nelson" },
    //     { id: 3, name: "Zoe LeBlanc" },
    //     { id: 4, name: "Blaise Roberts" }
    // ]

    // locationsFromAPI = [
    //     { id: 1, name: "Nashville North", address: "500 Circle Way" },
    //     { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    // ]

    // animalsFromAPI = [
    //     { id: 1, name: "Molly", type: "dog" },
    //     { id: 2, name: "Ruby", type: "dog" },
    //     { id: 3, name: "Shadow", type: "cat" },
    //     { id: 4, name: "Pinky", type: "fish" },
    //     { id: 5, name: "Baby", type: "dog" }

    // ]

    // ownersFromAPI = [
    //     { id: 1, name: "Helen", number: "615-540-7803" },
    //     { id: 2, name: "Ricky", number: "615-223-7654" },
    //     { id: 3, name: "Pat", number: "615-224-6502" },
    //     { id: 4, name: "Kayla", number: "615-543-0987" }
    // ]

    
    // DataManager.getAll()
    //     .then(allAnimals => {
    //         this.setState({
    //             animals: allAnimals
    //         })
    //     })


    ComponentDidMount() {
        const newState = {}
    
        fetch("http://localhost:5002/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            .then(() => fetch("http://localhost:5002/animals")
            .then(r => r.json()))
            .then(animals => newState.animals = animals)
            .then(() => fetch("http://localhost:5002/employees")
            .then(r => r.json()))
            .then(employees => newState.employees = employees)
            .then(() => fetch("http://localhost:5002/owners")
            .then(r => r.json()))
            .then(owners => newState.owners = owners)
            .then(() => this.setState(newState))
            console.log(newState)
    }
    

    // state = {
    //     employees: this.employees,
    //     locations: this.locations,
    //     animals: this.animals, 
    //     owners: this.owners
    // }

    render() {
        return (
            <div className="navbar2">
            <React.Fragment>
                
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnersList owners={this.state.owners} />
                }} />
                
            </React.Fragment>
            </div>
        )
    }
}

