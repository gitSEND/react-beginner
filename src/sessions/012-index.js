import React from 'react';
import ReactDOM from 'react-dom';

/* 
===========================================================================
HOW TO SEND POST REQUEST FROM REACT APPLICATION TO REST API
===========================================================================
*/

class EmployeeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
		};
	}

	componentDidMount() {
		fetch('https://reqres.in/api/users?page=2')
			.then((res) => res.json())
			.then((result) => {
				this.setState({ employees: result.data });
			});
	}

	onCreateUser = () => {
		let userInfo = {
			name: this.refs.name.value,
			job: this.refs.job.value,
		};

		fetch('https://reqres.in/api/users', {
			method: 'POST',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(userInfo),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result) {
					this.setState({ message: 'New employee is Created Successfully' });
				}
			});
	};

	render() {
		return (
			<div>
				<h2>Create User</h2>
				<p>
					<label>
						User Name : <input type='text' ref='name'></input>
					</label>
				</p>
				<p>
					<label>
						User Job : <input type='text' ref='job'></input>
					</label>
				</p>
				<button onClick={this.onCreateUser}>Create</button>
				<p>{this.state.message}</p>
			</div>
		);
	}
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById('root'));
