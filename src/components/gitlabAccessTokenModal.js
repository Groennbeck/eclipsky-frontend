import React, { Component } from 'react';
import { Modal, FormGroup, FormControl, Button } from 'react-bootstrap';
import ReactDOM from 'react-dom';

class GitlabAccessTokenModal extends React.Component {
	handleSubmit(e) {
		e.preventDefault()
		let inputNode = ReactDOM.findDOMNode(this.refs.accessToken)
		this.props.storeAccessToken(inputNode.value)
	}

	render() {
		return (
			<Modal show={this.props.showModal}>
          		<Modal.Header>
            		<Modal.Title>GitLab AccessToken</Modal.Title>
          		</Modal.Header>	
          		<Modal.Body>
          		  <form onSubmit={this.handleSubmit.bind(this)}>
          		      <FormGroup>
          		      	<FormControl type="text" placeholder="Access Token" ref="accessToken"/>
          		      </FormGroup>
          		    <Button type="submit">Submit</Button>
    			  </form>
          		</Modal.Body>
          	</Modal>
		);
	}
}

export default GitlabAccessTokenModal