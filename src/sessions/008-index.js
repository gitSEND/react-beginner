import React from 'react';
import ReactDOM from 'react-dom';

/* 
===========================================================================
REACT COMPONENT COMUNICATION USING CONTEXT
===========================================================================
*/

const employeeContext = React.createContext();

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Id: 101,
			Name: 'Nelson',
			Location: 'Comas',
			Salary: 15000,
		};
	}

	changeEmployeeData = () => {
		this.setState({ Id: 102 });
	};

	render() {
		return (
			<div>
				<h2>Welcome to App Component</h2>
				<p>
					<label>
						Employee ID : <b>{this.state.Id}</b>
					</label>
				</p>
				<employeeContext.Provider value={this.state}>
					<Employee></Employee>
				</employeeContext.Provider>
				<p>
					<button onClick={this.changeEmployeeData}>Update</button>
				</p>
			</div>
		);
	}
}

class Employee extends React.Component {
	static contextType = employeeContext;
	render() {
		return (
			<div>
				<h2>Welcome to Employee Component</h2>
				<p>
					<label>
						Employee ID : <b>{this.context.Id}</b>
					</label>
				</p>
				<Salary></Salary>
			</div>
		);
	}
}

class Salary extends React.Component {
	static contextType = employeeContext;

	render() {
		return (
			<div>
				<h2>Welcome to Salary Component</h2>
				<p>
					<label>
						Employee ID : <b>{this.context.Id}</b>
					</label>
				</p>
			</div>
		);
	}
}

const element = <App></App>;
ReactDOM.render(element, document.getElementById('root'));
