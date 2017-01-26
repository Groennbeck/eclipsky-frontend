import React, { Component } from 'react';
import Authentication from './auth'
class WelcomeJumbo extends Component {
	render() {
		return (
			<div className="jumbotron">
				<h2> Velkommen til Eclipsky </h2>
				<p> En online Java-IDE for TDT4100 </p>
				<Authentication />
			</div>
		);
	}
}
export default WelcomeJumbo;