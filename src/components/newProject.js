import React, { Component } from 'react';
import { Modal, FormGroup, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import emfs from '../utils/emfs';
import {fetchProjects} from '../actions/projectActions'
class NewProject extends Component {

  componentWillMount() {
    this.state = {showModal: false}
  }

  createProject(selectedTemplate) {
    debugger;
    let form = new FormData();
    let projectName = selectedTemplate.path + " " + new Date().valueOf();
    let emfs = selectedTemplate.content;
    fetch("/ensureProject", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: "projectName=" + projectName + "&emfs=" + emfs + "&accesstoken=" + this.props.accessToken + "&userName=" + this.props.userName 
    }).then(function(){
      this.props.dispatch(fetchProjects(this.props.accessToken, this.props.userName))
      this.closeModal()
    }.bind(this))
	}

  handleClick(e) {
    this.setState({showModal: true})
  }

  closeModal(e) {
    this.setState({showModal: false})
  }

	render() {
    let projectTemplates = this.props.projectTemplates.map(function(projectTemplate, idx) {
      return (
        <button className="list-group-item list-group-item-action" onClick={this.createProject.bind(this, projectTemplate)}> {projectTemplate.path} </button>
      )
    }.bind(this))

		return (
      <div className="newProject">
      <button className="btn-success" onClick={this.handleClick.bind(this)}> Create new project </button>
			<Modal show={this.state.showModal}>
          		<Modal.Header>
            		<Modal.Title>Select Template</Modal.Title>
          		</Modal.Header>	
          		<Modal.Body>
                <div className="list-group">
                  {projectTemplates}
                </div>
            	</Modal.Body>
      </Modal>
      </div>
      );
	}
}

export default NewProject