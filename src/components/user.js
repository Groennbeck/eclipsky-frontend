import React, { Component } from 'react';
import {userURL} from '../utils/api'
import {fetchUser} from '../actions/user'
class User extends Component {

	componentDidMount() {
		let accessToken = this.props.auth.access_token;
		let provider = this.props.auth.provider;
		if (accessToken != undefined) {
			this.props.fetchUser(accessToken)
		}
	}

	render() {
		return (
			<ul className="nav navbar-nav navbar-right"> 
			<li className="dropdown">
			          <a href="#" className="dropdown-toggle" 
			          data-toggle="dropdown" role="button" aria-haspopup="true" 
			          aria-expanded="false">{this.props.user.login}<span className="caret"></span></a>
			<ul className="dropdown-menu">
	            <li><a href="#">Log ut</a></li>
          	</ul>
			</li> 
			</ul>
		)
	}

}
export default User;