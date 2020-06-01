import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

/* 
===========================================================================
HOW TO BUILD FORMS IN REACT CON FORMIK
===========================================================================
*/

const EmployeeComponent = () => {
	const formik = useFormik({
		initialValues: {
			id: '',
			name: '',
			location: '',
			salary: '',
		},
		onSubmit: (values) => {
			alert(JSON.stringify(values));
		},
	});

	return (
		<div>
			<h2>New Employee Form</h2>
			<form onSubmit={formik.handleSubmit}>
				<p>
					<label htmlFor='id'>Employee ID: </label>
					<input
						type='text'
						name='id'
						id='id'
						value={formik.values.id}
						onChange={formik.handleChange}
					></input>
				</p>
				<p>
					<label htmlFor='name'>Employee Name: </label>
					<input
						type='text'
						name='name'
						id='name'
						value={formik.values.name}
						onChange={formik.handleChange}
					></input>
				</p>
				<p>
					<label htmlFor='location'>Employee Location: </label>
					<input
						type='text'
						name='location'
						id='location'
						value={formik.values.location}
						onChange={formik.handleChange}
					></input>
				</p>
				<p>
					<label htmlFor='salary'>Employee Salary: </label>
					<input
						type='text'
						name='salary'
						id='salary'
						value={formik.values.salary}
						onChange={formik.handleChange}
					></input>
				</p>
				<button type='submit'>Create</button>
			</form>
		</div>
	);
};

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById('root'));
