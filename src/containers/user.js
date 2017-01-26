import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import User from '../components/user.js'
import { userFetched, fetchUser } from '../actions/user'



function mapStateToProps(state = {}) {
    return {...state};
}

function mapDispatchToProps(dispatch) {
	return {
		userFetched: (query) => {
			dispatch(userFetched(query))
		},
		fetchUser: (accessToken) => {
			dispatch(fetchUser(accessToken))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(User)