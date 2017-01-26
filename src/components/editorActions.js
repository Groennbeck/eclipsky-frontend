import React from 'react'
import {Button} from 'react-bootstrap'
class EditorActions extends React.Component {
	render() {
		return (
			<div className="btn-group">
				<Button bsStyle="success" onClick={this.props.compile}> compile </Button>
				<Button bsStyle="success" onClick={this.props.test}> test </Button>
				<Button bsStyle="success" onClick={this.props.save}> save </Button> 
			</div>
		);
	}
}

export default EditorActions