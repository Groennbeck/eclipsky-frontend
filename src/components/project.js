import React from 'react'
import {Link} from 'react-router'
class Project extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<Link to={`/project/${this.props.name}`} className="list-group-item">
				<p className="text-left" unselectable="on"> {this.props.name} </p>
			</Link>
		);
	}
}
export default Project;