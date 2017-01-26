import React, { Component } from 'react';
import AuthProvider from './authprovider'

class Authentication extends Component {
	render() {
		return (
			<div>
				<AuthProvider provider= "github"/>
			</div>
		)
	}
}

export default Authentication;