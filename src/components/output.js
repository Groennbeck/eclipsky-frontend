import React from 'react'

class Output extends React.Component {

	componentWillMount() {
		this.state = {text: ""}
	}

	setText(text) {
		this.setState({text: text})
	}

	render() {
		return (
			<textarea className="output" value={this.props.console}>
			</textarea>
		);

	}
}


export default Output