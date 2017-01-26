import React from 'react'
import { Nav, NavItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import {currentResource} from '../actions/editorActions'
import EditorActions from './editorActions'
class ResourceExplorer extends React.Component {

	componentWillMount() {
		this.state = {selected: 0, first: true}
		if (this.props.resources.length > 0 && this.state.first) {
			this.props.onSelect(this.props.resources[0])
		}
	}


	handleSelect(selectedKey) {
		this.setState({selected: selectedKey, first: false})
		this.props.onSelect(this.props.resources[selectedKey])
	}

	render() {
		let menu = this.props.resources.map(function(resource, idx) {
			return <NavItem eventKey={idx} onSelect={this.handleSelect.bind(this)}> {resource.resourceName} </NavItem>
		}.bind(this))
		return (
			<div className="resourceExplorer">
			<h4>{this.props.projectName + " > " + this.props.resources[this.state.selected].resourceName}</h4>
			<Nav bsStyle="nav nav-tabs" activeKey={this.state.selected} id="resourceExplorer">
	    		{menu}
	  		</Nav>
	  		</div>
		);
	}
}
export default connect()(ResourceExplorer)