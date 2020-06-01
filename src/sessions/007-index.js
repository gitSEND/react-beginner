import React from 'react';
import ReactDOM from 'react-dom';

/* 
===========================================================================
INTERACTION BETWEEN REACT COMPONENTS
===========================================================================
*/

class Employee extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			updateSalary: null,
		};
	}

	getUpdateSalary = (salary) => {
		this.setState({ updateSalary: salary });
	};

	render() {
		return (
			<div>
				<h2>Employee Component</h2>
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
						Total Salary : <b>{this.state.updateSalary}</b>
					</label>
				</p>
				<Salary
					BasicSalary={this.props.BasicSalary}
					HRA={this.props.HRA}
					SpecialAllowance={this.props.SpecialAllowance}
					onSalaryChanged={this.getUpdateSalary}
				></Salary>
			</div>
		);
	}
}

class Salary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			basic: this.props.BasicSalary,
			hra: this.props.HRA,
			sa: this.props.SpecialAllowance,
		};
	}

	updateSalary = () => {
		let salary = parseInt(this.refs.basic.value) + parseInt(this.refs.hra.value) + parseInt(this.refs.sa.value);
		this.props.onSalaryChanged(salary);
	};

	render() {
		return (
			<div>
				<h1>Salary Details</h1>
				<p>
					<label>
						Basic Salary : <input type='text' ref='basic' defaultValue={this.state.basic}></input>
					</label>
				</p>
				<p>
					<label>
						HRA : <input type='text' ref='hra' defaultValue={this.state.hra}></input>
					</label>
				</p>
				<p>
					<label>
						Special Allowance : <input type='text' ref='sa' defaultValue={this.state.sa}></input>
					</label>
				</p>
				<button onClick={this.updateSalary}>Update</button>
			</div>
		);
	}
}

const element = (
	<Employee
		Id='001'
		Name='Nelson'
		Location='Comas'
		Salary='3000'
		BasicSalary='25000'
		HRA='10000'
		SpecialAllowance='15000'
	></Employee>
);

ReactDOM.render(element, document.getElementById('root'));
