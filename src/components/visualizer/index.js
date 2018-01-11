import React from 'react'

const style = {
	bottom: 0,
	width: '100%',
	position: 'absolute',
	zIndex: -1,
}

class Visualizer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			playing: false,
		}
	}

	componentWillReceiveProps(nextProps) {
		console.log(this.container)
		this.setState({ playing: nextProps.searching.length > 1 })
	}

	render() {
		return (
			<div style={style} ref={(container) => {this.container = container}}/>
		)
	}
}
export default Visualizer
