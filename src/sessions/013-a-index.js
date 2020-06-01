import React from 'react';
import ReactDOM from 'react-dom';

/* 
===========================================================================
HOW TO BUILD FORMS IN REACT SIN FORMIK
===========================================================================
*/

class EmployeeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employee: {
				id: '',
				name: '',
				location: '',
				salary: '',
			},
		};
	}

	changeHandler = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			employee: {
				...this.state.employee,
				[name]: value,
			},
		});
	};

	onCreateEmployee = () => {
		console.log(this.state.employee);
	};

	render() {
		return (
			<div>
				<h2>New Employee Form</h2>
				<form>
					<p>
						<label>
							Employe ID :{' '}
							<input
								type='text'
								name='id'
								value={this.state.employee.id}
								onChange={this.changeHandler}
							></input>
						</label>
					</p>
					<p>
						<label>
							Employe NAME :{' '}
							<input
								type='text'
								name='name'
								value={this.state.employee.name}
								onChange={this.changeHandler}
							></input>
						</label>
					</p>
					<p>
						<label>
							Employe LOCATION :{' '}
							<input
								type='text'
								name='location'
								value={this.state.employee.location}
								onChange={this.changeHandler}
							></input>
						</label>
					</p>
					<p>
						<label>
							Employe SALARY :{' '}
							<input
								type='text'
								name='salary'
								value={this.state.employee.salary}
								onChange={this.changeHandler}
							></input>
						</label>
					</p>
				</form>
				<button onClick={this.onCreateEmployee}>Create</button>
			</div>
		);
	}
}
const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById('root'));
