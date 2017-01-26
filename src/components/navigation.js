import React, { Component } from 'react';
import User from '../containers/user';
import {Link} from 'react-router'
import {Navbar} from 'react-bootstrap'
class Navigation extends Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="/">Eclipsky</a>
					</Navbar.Brand>
				</Navbar.Header>
				<User />
			</Navbar>
		)
	}
}

export default Navigation
