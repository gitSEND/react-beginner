import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

/* 
===========================================================================
LIFTING STATE UP IN REACT
===========================================================================
*/
class OrderComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {}
}
class AddressComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {}
}
class SumaryComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {}
}

const element = <EmployeeComponent></EmployeeComponent>;
ReactDOM.render(element, document.getElementById('root'));
