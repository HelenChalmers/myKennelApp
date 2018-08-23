import React, { Component } from 'react'


export default class EmployeeList  extends Component {
    render() {
        return (
            <div className="employees">
                <h1>Our Amazing Employees</h1>
                {
                    this.props.employees.map(employee =>
                    <div id={`employee--${employee.id}`} key={employee.id}>
                       <h4>{employee.name}</h4>
                    </div>
                    )
                }
            </div>
        );
    }
}