import React from 'react';
import ReactDOM from 'react-dom';

/* 
===========================================================================
INTERATING THROUGH LISTS IN REACT
===========================================================================
*/

function Employee(props) {
	return (
		<div style={{ border: '3px solid red' }}>
			<p>
				<label>
					Employee ID : <b>{props.data.Id}</b>
				</label>
			</p>
			<p>
				<label>
					Employe Name : <b>{props.data.Name}</b>
				</label>
			</p>
			<p>
				<label>
					Employee Location : <b>{props.data.Location}</b>
				</label>
			</p>
			<p>
				<label>
					Employee Salary : <b>{props.data.Salary}</b>
				</label>
			</p>
		</div>
	);
}

function DisplayEmployees(props) {
	const empList = props.employeeList;
	const listElements = empList.map((emp) => <Employee key={emp.Id} data={emp}></Employee>);
	return <div>{listElements}</div>;
}

const employees = [
	{ Id: 101, Name: 'Nelson', Location: 'Comas', Salary: 1500 },
	{ Id: 201, Name: 'Martha', Location: 'Callao', Salary: 1500 },
	{ Id: 301, Name: 'Gerson', Location: 'Independencia', Salary: 1500 },
];

const element = <DisplayEmployees employeeList={employees}></DisplayEmployees>;
ReactDOM.render(element, document.getElementById('root'));
