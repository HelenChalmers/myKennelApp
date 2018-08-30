import React, { Component } from 'react'
import {Link} from "react-router-dom"
import './employee.css'


export default class EmployeeList  extends Component {
    render() {
        return (
        <React.Fragment>
            <div className="employeeButton">
                <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/employees/new")}
                        }>
                    Add an Employee
                </button>
            </div>
            <div className="employees">
                <h1>Our Amazing Employees</h1>
                {
                    this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                       <h4>{employee.name}</h4>
                       <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                       <button
                                    onClick={() => this.props.deleteEmployee(employee.id)}
                                    className="card-link-Employee">Delete</button>
                    </div>
                    )
                }
            </div>
            </React.Fragment>
        );
    }
}