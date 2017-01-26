import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';

import Navigation from './components/navigation';
import WelcomeJumbo from './components/welcomejumbo';
import GitLabAccessTokenModal from './containers/gitlabAccessTokenModalContainer';
import ProjectList from './containers/projectListContainer'
import { cloneRepo } from './actions/repoActions'
import Notifications from 'react-notify-toast'; 
import {fetchProjectTemplates} from './actions/projectActions'
class App extends Component {

  componentWillMount() {
  	if (this.props.location.query) {
  		let query = this.props.location.query
  		if (query.type !== null && query.type === 'auth') {
  			this.props.storeAuth(query)
  		}
  	}

  }


  render() {
    return (
      <div className="App">
        <Notifications />
        <Navigation />
        <div className="content">
        { this.props.children }
        </div>
      </div>
    );
  }
}

export default App;
