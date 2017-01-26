import { connect } from 'react-redux';
import GitLabAceessTokenModal from '../components/gitlabAccessTokenModal'
import { storeAccessToken } from '../actions/authActions'

function mapStateToProps(state = {}) {
    return {showModal: state.auth.needApplicationToken};
}

function mapDispatchToProps(dispatch) {
	return {
		storeAccessToken: (accessToken) => {
			dispatch(storeAccessToken(accessToken))
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(GitLabAceessTokenModal)