import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* 
===========================================================================
INTRODUCTION TO REACT ELEMENTS
===========================================================================
*/

// const element = React.createElement('h1', null, 'Welcome to React Programming World...');
// ReactDOM.render(element, document.getElementById('root'));

const element = React.createElement(
	'h1',
	{ className: 'testClass' },
	React.createElement('h1', null, 'Welcome to React Programming World...'),
	React.createElement('h1', null, 'Understanding the Creation of Elements')
);
ReactDOM.render(element, document.getElementById('root'));

// const element = <h1 className='testClass'>Welcome to React Programming...</h1>;
// ReactDOM.render(element, document.getElementById('root'));

// const newElement = <h1 className='testClass'>Understanding the creation of elements in react</h1>;
// ReactDOM.render(newElement, document.getElementById('app'));

// const element = (
// 	<div className='testClass'>
// 		<h1>Welcome to React Programming...</h1>
// 		<h1>Understanding the creation of elements in react</h1>
// 	</div>
// );

// ReactDOM.render(element, document.getElementById('root'));
