import React from 'react';
import ReactDOM from 'react-dom';

/* 
===========================================================================
HOW TO CALL REST API FORMT REACT
===========================================================================
*/

class EmployeeComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			employees: [],
		};
	}

	componentDidMount() {
		fetch('https://reqres.in/api/users?page=2')
			.then((res) => res.json())
			.then((result) => {
				this.setState({ employees: result.data });
			});
	}

	render() {
		return (
			<div>
				<h2>Employee Details</h2>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>EMAIL</th>
							<th>FIRST NAME</th>
							<th>LAST NAME</th>
						</tr>
					</thead>
					<tbody>
						{this.state.employees.map((emp) => (
							<tr key={emp.id}>
								<td>{emp.id}</td>
								<td>{emp.email}</td>
								<td>{emp.first_name}</td>
								<td>{emp.last_name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById('root'));
