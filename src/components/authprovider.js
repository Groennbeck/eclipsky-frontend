import React, { Component } from 'react';

class AuthProvider extends Component {

	initiateAuth() {
		let url = "http://localhost:8080/auth/" + this.props.provider;
		window.location = url
	}

	render() {
		return (
			<button className='btn btn-primary' onClick={this.initiateAuth.bind(this)}> Log inn med {this.props.provider} </button>
		)
	}

}

export default AuthProvider;