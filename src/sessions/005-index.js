import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* 
===========================================================================
UNDERSTANDING REACT CLASS COMPONENTS
===========================================================================
*/

class Employee extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		// this.props.Name = 'Nelson Dennis'; // Error porque es solo lectura
	}
	render() {
		return (
			<div>
				<h2>Employee Details...</h2>
				<p>
					<label>
						Employee ID : <b>{this.props.Id}</b>
					</label>
				</p>
				<p>
					<label>
						Employee Name : <b>{this.props.Name}</b>
					</label>
				</p>
				<p>
					<label>
						Employee Location : <b>{this.props.Location}</b>
					</label>
				</p>
				<p>
					<label>
						Employee Salary : <b>{this.props.Salary}</b>
					</label>
				</p>
				<Department deptName={this.props.deptName} headName={this.props.headName}></Department>
			</div>
		);
	}
}

class Department extends React.Component {
	render() {
		return (
			<div>
				<p>
					Dept Name is : <b>{this.props.deptName}</b>
				</p>
				<p>
					Dept Head is : <b>{this.props.headName}</b>
				</p>
			</div>
		);
	}
}

const element = (
	<Employee Id='001' Name='Nelson' Location='Comas' Salary='3000' deptName='Peru' headName='Lima'></Employee>
);
ReactDOM.render(element, document.getElementById('root'));
