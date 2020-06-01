import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

/* 
===========================================================================
INTRODUCTION TO STATE IN REACT CLASS COMPONENTS
===========================================================================
*/

class CountCharacters extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: '',
			counter: 10,
		};
	}

	onMessageChange(text) {
		this.setState({
			message: 'Message has ' + text.length + ' number of characters',
		});
	}

	render() {
		return (
			<div>
				<h2>Welcome to Count Characters Component</h2>
				<p>
					<label>
						Enter Message :{' '}
						<input type='text' onChange={(e) => this.onMessageChange(e.target.value)}></input>
					</label>
				</p>
				<p>
					<label>{this.state.message}</label>
				</p>
				<p>
					<label>{this.state.counter}</label>
				</p>
			</div>
		);
	}
}
class Employee extends React.Component {
	state = { counter: 0 };
	// counter = 0;
	addEmployee = () => {
		this.setState({ counter: this.state.counter + 1 });
		// this.counter++;
		// alert('Adding a New employee');
		// alert('Adding Employee Button is Clicked ' + this.counter + ' times');
	};
	render() {
		return (
			<div>
				<h2>Employee Details...</h2>
				<p>
					<button onClick={this.addEmployee}>Add Employee</button>
				</p>
				<p>
					<label>
						Add Employee Button is Clicked : <b>{this.state.counter}</b> times
					</label>
				</p>
			</div>
		);
	}
}

// const element = <Employee></Employee>;
const element = <CountCharacters></CountCharacters>;
ReactDOM.render(element, document.getElementById('root'));
