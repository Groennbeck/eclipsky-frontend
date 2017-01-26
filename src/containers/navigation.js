import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Navigation from '../components/navigation.js'
import { storeAuth } from '../actions/authActions'



function mapStateToProps(state = {}) {
    return {...state};
}

export default connect(mapStateToProps)(Navigation)