import React from 'react'
import Project from './project'
import { fetchProjects, fetchProjectTemplates } from '../actions/projectActions'
import NewProject from './newProject'
class ProjectList extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchProjectTemplates())
		this.props.dispatch(fetchProjects(this.props.accessToken, this.props.userName));
	}


	render() {
		let projects = this.props.projects.map(function(project, idx) {
			return <Project name= {project} key={idx}/>
		})

		return (
			<div className="project-list">
			<h2 className="text-left"> Projects </h2>
				<NewProject accessToken = {this.props.accessToken} userName={this.props.userName} dispatch={this.props.dispatch} projectTemplates= {this.props.projectTemplates}/> 
				<div className="list-group">
					{ projects }
				</div>
			</div>
		);
	}
}

export default ProjectList;