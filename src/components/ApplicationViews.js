import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'
import './ApplicationViews.css'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
import OwnerManager from "../modules/OwnerManager"
import AnimalDetail from './animals/AnimalDetail'
import OwnerDetail from './owners/OwnerDetail'
import EmployeeDetail from './employee/EmployeeDetail'
import AnimalForm from './animals/AnimalForm'
import OwnerForm from './owners/OwnerForm'
import EmployeeForm from './employee/EmployeeForm'
import AnimalEdit from './animals/AnimalEdit'
import Login from './Login'





export default class ApplicationViews extends Component {

     // Check if credentials are in local storage. this is for logging in.
     isAuthenticated = () => localStorage.getItem("credentials") !== null

    state = {
            locations: [],
            animals: [],
            employees: [], 
            owners: []
    }

    deleteAnimal = id => {
        return fetch(`http://localhost:5002/animals/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/animals`))
        .then(e => e.json())
        .then(animals => this.setState({
            animals: animals
        }))
    }

    deleteEmployee = id => {
        return fetch(`http://localhost:5002/employees/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json())
        .then(employees => this.setState({
            employees: employees
        }))
    }

    deleteOwners = id => {
        return fetch(`http://localhost:5002/owners/${id}`, {
            method: "DELETE"
        })
        .then(e => e.json())
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json())
        .then(owners => this.setState({
            owners: owners
        }))
    }

    addAnimal = animal => AnimalManager.post(animal)
    .then(() => AnimalManager.getAll())
    .then(animals => this.setState({
        animals: animals
    }))

    //editAnimal function that calls the patch function from the Animal Manager (Api Function)
    editAnimal = (id, animalObject) => AnimalManager.patch(id, animalObject)
    .then(() => AnimalManager.getAll())
    .then(animals => this.setState({
        animals: animals
    }))

    addOwner = owner => OwnerManager.post(owner)
    .then(() => OwnerManager.getAll())
    .then(owners => this.setState({
        owners: owners
    }))

    addEmployee = employee => EmployeeManager.post(employee)
    .then(() => EmployeeManager.getAll())
    .then(employees => this.setState({
        employees: employees
    }))

   
    

    
   
//this is needed to pull data from an API 
    componentDidMount() {
        const newState = {}
    
        fetch("http://localhost:5002/locations")
            .then(r => r.json())
            .then(locations => newState.locations = locations)
            
            .then(() => EmployeeManager.getAll().then(allEmployees => newState.employees = allEmployees))

            .then(() => OwnerManager.getAll().then(allOwners => newState.owners = allOwners))
            
            .then(() => AnimalManager.getAll().then(allAnimals => newState.animals = allAnimals))
            .then(() => this.setState(newState))
            console.log(newState)
    }
    

    render() {
        return (
            <div className="navbar2">
            <React.Fragment>

                <Route path="/login" component={Login} />
                
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />

                <Route exact path="/animals" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <AnimalList 
                                            {...props}
                                            deleteAnimal={this.deleteAnimal}
                                            animals={this.state.animals} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route  path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />

                <Route path="/animals/new" render={(props) => {
                        return <AnimalForm {...props}
                       addAnimal={this.addAnimal}
                       employees={this.state.employees} />
                }} />

                <Route path="/animals/edit/:animalId(\d+)" render={(props) => {
                        return <AnimalEdit {...props}
                        editAnimal={this.editAnimal}
                        animals={this.state.animals}
                        employees={this.state.employees} />
                     }} />

                <Route exact path="/employees" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <EmployeeList deleteEmployee={this.deleteEmployee}
                                             employees={this.state.employees} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />

                <Route path="/employees/new" render={(props) => {
                        return <EmployeeForm {...props}
                       addEmployee={this.addEmployee}
                       employees={this.state.employees} />
                }} />

                <Route exact path="/owners" render={(props) => {
                    if (this.isAuthenticated()) {
                        return <OwnersList deleteOwner={this.deleteOwner}
                                             owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                

                <Route path="/owners/:ownerId(\d+)" render={(props) => {
                        return <OwnerDetail {...props} deleteOwners={this.deleteOwners} owners={this.state.owners} />
                }} />

                <Route path="/owners/new" render={(props) => {
                        return <OwnerForm {...props}
                       addOwner={this.addOwner}
                       employees={this.state.employees} />
                }} />

                
            </React.Fragment>
            </div>
        )
    }
}

