import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../App.js'
import { storeAuth } from '../actions/authActions'
import {cloneRepo} from '../actions/repoActions'


function mapStateToProps(state = {}) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
	return {
		storeAuth: (query) => {
			dispatch(storeAuth(query))
		},
		cloneRepo: (accessToken, username) => {
			dispatch(cloneRepo(accessToken, username));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)