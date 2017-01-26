import React from 'react'
import AceEditor from 'react-ace';
import ResourceExplorer from './resourceExplorer'
import brace from 'brace';
import 'brace/mode/java';
import 'brace/theme/monokai';
import {fetchResources, refreshResource, editResource, compileResource} from '../actions/editorActions';
import Output from './output'
import {push} from '../actions/repoActions'
import EditorActions from './editorActions'

import {notify} from 'react-notify-toast'; 

class Editor extends React.Component {

	onCompileClicked() {
		let resource = this.state.resource
		let projectName = this.props.params.projectName
		this.props.dispatch(compileResource(projectName, resource))
	}

	onSaveClicked() {
		let accessToken = this.props.auth.applicationAccessToken;
		let userName = this.props.user.login;
		let projectName = this.props.params.projectName;
		notify.show("Pushing to github", "success")
		this.props.dispatch(push(accessToken, userName, projectName))
	}


	componentWillMount() {
		this.state = {resource: {
			projectName: "",
			resourceName: "",
			body: "",
			markers: []
		}}

		let projectName = this.props.params.projectName
		this.props.dispatch(fetchResources(this.props.auth.applicationAccessToken, projectName, this.props.user.login))
	}

	onResourceSelected(resource) {
		let projectName = this.props.params.projectName
		this.props.dispatch(refreshResource(this.props.auth.applicationAccessToken, projectName, resource));
		this.setState({resource: resource})
	}

	onChange(val) {
		let projectName = this.props.params.projectName
		this.state.resource.body = val
		this.props.dispatch(editResource(this.props.auth.applicationAccessToken, projectName, this.state.resource, val, this.edited.bind(this)));
	}

	edited() {
		this.forceUpdate()
	}
	render() {
		let projectName = this.props.params.projectName
		let currentResource = this.state.resource
		let cons = this.props.editor.output.console

		let project = this.props.editor.projects.find(function(p) {
			return projectName === p.projectName
		})
		if (typeof project != 'undefined') {
			this.resourceExplorer = 
			<ResourceExplorer 
				projectName={projectName} 
				resources= {project.resources} 
				onSelect={this.onResourceSelected.bind(this)}
			/>
		}

		return (
			<div className="editorWrapper">
				{this.resourceExplorer}
				<AceEditor
				    mode="java"
				    theme="monokai"
				    name="editor"
				    value = {currentResource.body}
				    width = "100%"
				    onChange = { this.onChange.bind(this) }
				    markers = {currentResource.markers}
				    editorProps = {{$blockScrolling: true}}
				    enableBasicAutocompletion = {true}
				    showPrintMargin = {false}
				/>
				<EditorActions 
					compile={this.onCompileClicked.bind(this)}
					save = {this.onSaveClicked.bind(this)}
				/>
			</div>
  		);
	}
}
export default Editor;