import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

/* 
===========================================================================
UNDERSTANDING FORMS IN REACT
[Formik, Form, Field, ErrorMessage]
===========================================================================
*/

const EmployeeComponent = () => {
	return (
		<Formik
			initialValues={{
				id: '',
				name: '',
				location: '',
				salary: '',
				email: '',
				designation: '',
			}}
			validationSchema={yup.object({
				name: yup
					.string()
					.max(20, 'Employee name should not exceed 20 characters')
					.required('Please enter Employee name'),
				location: yup.string().required('Please enter Employee location'),
				email: yup.string().email('Invalid email address').required('Please enter email'),
			})}
			onSubmit={(values) => {
				alert(JSON.stringify(values));
			}}
		>
			{(props) => (
				<div>
					<h2>New Employee Form</h2>
					<Form>
						<p>
							<label>Employee ID : </label>
							<Field name='id' type='text'></Field>
						</p>
						<p>
							<label>Employee NAME : </label>
							<Field name='name' type='text'></Field>
							<ErrorMessage name='name'></ErrorMessage>
						</p>
						<p>
							<label>Employee LOCATION : </label>
							<Field name='location' type='text'></Field>
							<ErrorMessage name='location'></ErrorMessage>
						</p>
						<p>
							<label>Employee SALARY : </label>
							<Field name='salary' type='text'></Field>
						</p>
						<p>
							<label>Employee EMAIL : </label>
							<Field name='email' type='text'></Field>
							<ErrorMessage name='email'></ErrorMessage>
						</p>
						<p>
							<label>Employee DESIGNATION : </label>
							<Field name='designation' as='select'>
								<option value='SofwareEngineer'>Sofware Engineer</option>
								<option value='SeniorSofwareEngineer'>Senior Sofware Engineer</option>
								<option value='Lead'>Lead</option>
							</Field>
						</p>
						<button type='submit' disabled={!props.isValid}>
							Create
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById('root'));
