import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Editor from '../components/editor.js'
import { storeAuth } from '../actions/authActions'



function mapStateToProps(state = {}) {
    return {...state};
}

export default connect(mapStateToProps)(Editor)