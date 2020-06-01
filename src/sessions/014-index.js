import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';

/* 
===========================================================================
HOW TO VALIDATE FORMS DATA IN REACT
USING YUP
===========================================================================
*/

// const validateEmployee = (empData) => {
// 	const errors = {};
// 	if (!empData.name) {
// 		errors.name = 'Please enter Employee name';
// 	} else if (empData.name.length > 20) {
// 		errors.name = 'Employee name should not exceed 20 characters';
// 	}

// 	if (!empData.location) {
// 		errors.location = 'Please enter Employee location';
// 	}

// 	if (!empData.email) {
// 		errors.email = 'Please enter email';
// 	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(empData.email)) {
// 		errors.email = 'Invalid email address';
// 	}
// 	return errors;
// };

const EmployeeComponent = () => {
	const formik = useFormik({
		initialValues: {
			id: '',
			name: '',
			location: '',
			salary: '',
			email: '',
		},
		validationSchema: yup.object({
			name: yup
				.string()
				.max(20, 'Employee name should not exceed 20 characters')
				.required('Please enter Employee name'),
			location: yup.string().required('Please enter Employee location'),
			email: yup.string().email('Invalid email address').required('Please enter email'),
		}),
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
					<input name='id' {...formik.getFieldProps('id')}></input>
				</p>
				<p>
					<label htmlFor='name'>Employee Name: </label>
					<input name='name' {...formik.getFieldProps('name')}></input>
					{formik.touched.name && formik.errors.name ? (
						<span style={{ color: 'red' }}>{formik.errors.name}</span>
					) : null}
				</p>
				<p>
					<label htmlFor='location'>Employee Location: </label>
					<input name='location' {...formik.getFieldProps('location')}></input>
					{formik.touched.location && formik.errors.location ? (
						<span style={{ color: 'red' }}>{formik.errors.location}</span>
					) : null}
				</p>
				<p>
					<label htmlFor='salary'>Employee Salary: </label>
					<input name='salary' {...formik.getFieldProps('salary')}></input>
				</p>
				<p>
					<label htmlFor='email'>Employee Email: </label>
					<input name='email' {...formik.getFieldProps('email')}></input>
					{formik.touched.email && formik.errors.email ? (
						<span style={{ color: 'red' }}>{formik.errors.email}</span>
					) : null}
				</p>
				<button type='submit'>Create</button>
			</form>
		</div>
	);
};

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById('root'));
