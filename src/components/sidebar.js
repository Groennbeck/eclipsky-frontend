import React from 'react'
import { Nav, NavItem} from 'react-bootstrap';

class Sidebar extends React.Component {


	componentWillMount() {
		this.setState({
			open: false
		})
	}

	render() {
		if (this.state.open) {
			return ( 
				<div>
				<div className="side-nav nav-is-visible">
					{this.props.children}
				</div>
				<span className="glyphicon glyphicon-file"/>
				</div>
			);
		}
		return ( 
			<div className="side-navbar small">
				<Nav bsStyle="pills" stacked activeKey={this.state.selected} id="resourceExplorer">
					<NavItem eventKey={0}> <span className="glyphicon glyphicon-file editorMenuItem"/> </NavItem>
				</Nav>
			</div>
		);
	}
}

export default Sidebar;