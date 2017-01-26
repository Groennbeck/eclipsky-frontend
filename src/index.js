import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/app';
import './css/index.css';
import { authReducer } from './reducers/authreducer'
import { repoReducer } from './reducers/reporeducer'
import { userReducer } from './reducers/user'
import { projectReducer } from './reducers/projectReducer'
import editorReducer from './reducers/editorReducer'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunk from 'redux-thunk';
import ProjectList from './containers/projectListContainer'
import WelcomeJumbo from './components/welcomejumbo';
import Editor from './containers/editorContainer'


const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(
	combineReducers({
		auth: authReducer,
		routing: routerReducer,
		user: userReducer,
		repo: repoReducer,
		project: projectReducer,
		editor: editorReducer
	}),
	persistedState,
	applyMiddleware(thunk)
)

const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(() => {
	console.log(store.getState())
	localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


function requireAuth(nextState, replace, callback) {
	const state = store.getState();
	if (state.auth.needAuthentication == true && nextState.location.query.access_token == undefined) {
		replace('/welcome')
	}
	callback()
}


ReactDOM.render(
  <Provider store={store}>
  	<Router history={history}>
  		<Route path="/" component={App}>
  			<IndexRoute component={ProjectList} onEnter={requireAuth} />
  			<Route path="project/:projectName" component={Editor} onEnter={requireAuth} />
  			<Route path="welcome" component={WelcomeJumbo} />
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
);
