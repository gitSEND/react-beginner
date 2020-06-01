import React from 'react';
import ReactDOM from 'react-dom';

/* 
===========================================================================
INTERACTION BETWEEN REACT COMPONENTS USING CONTEXT
===========================================================================
*/

const EmployeeContext = React.createContext({
	data: '',
	changeEmployeeInfo: () => {},
});
class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				Id: 101,
				Name: 'Nelson',
				Location: 'Comas',
				Salary: 15000,
			},
			changeEmployeeInfo: this.updateEmployeeDetails,
		};
	}

	updateEmployeeDetails = () => {
		this.setState({ data: { Id: 102 } });
	};

	render() {
		return (
			<div>
				<h2>Welcome to App Component</h2>
				<p>
					<label>
						Employee ID : <b>{this.state.data.Id}</b>
					</label>
				</p>
				<EmployeeContext.Provider value={this.state}>
					<Employee></Employee>
				</EmployeeContext.Provider>
			</div>
		);
	}
}

class Employee extends React.Component {
	static contextType = EmployeeContext;
	render() {
		return (
			<div>
				<h2>Welcome to Employee Component</h2>
				<p>
					<label>
						Employee Id : <b>{this.context.data.Id}</b>
					</label>
				</p>
				<p>
					<button onClick={this.context.changeEmployeeInfo}>Change</button>
				</p>
			</div>
		);
	}
}

const element = <App></App>;
ReactDOM.render(element, document.getElementById('root'));
