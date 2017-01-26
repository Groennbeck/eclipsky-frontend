import { connect } from 'react-redux';
import ProjectList from '../components/projectList'



function mapStateToProps(state = {}) {
    return {
    	projects: state.project.projects,
    	accessToken: state.auth.applicationAccessToken,
    	userName: state.user.login,
    	projectTemplates: state.project.projectTemplates
    };
}


export default connect(mapStateToProps)(ProjectList)