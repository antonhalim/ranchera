import React from 'react'
import $ from 'jquery'
import randomColor from 'randomcolor'

const style = {
	bottom: 0,
	width: '100%',
	height: '100%',
	position: 'absolute',
	zIndex: -1,
}

const randomBackground = randomColor({ luminosity: 'light', count: 27 })

function getRandomInRange(min, max){
	return Math.random() * (max - min) + min
}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


class Visualizer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			playing: false,
		}
	}

	componentDidMount() {
		this.width = this.container.offsetWidth
		this.height = this.container.clientHeight
		this.addBuble()
		this.animateBuble()
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ playing: nextProps.searching.length > 0 })
	}

	shouldComponentUpdate(nextProps, nextState) {
		return false
	}

	addBuble() {
		this.interval = setInterval(() => {
			if (this.state.playing) {
				let size = Math.round(Math.random() * 100)
				let background = randomBackground[Math.round(getRandomInRange(0, 27))]
				console.log(background)
				let bublestyle = `left: ${getRandomInRange(0, this.width)}px; width: ${size}px; height: ${size}px; background: ${background};border-radius: 50%; bottom: 0; position: absolute;`
				$(this.container).append(`<div class='buble' style="${bublestyle}"><span class='new' /></div>`)
			}
			this.animateBuble()
		}, 1000)
	}

	animateBuble() {
		$(this.container).find(".buble SPAN.new").each((i, span) => {
			setInterval(() => {
				let $bubble = $(span).parent()
				let bottom = parseFloat($bubble.css("bottom"))
				$bubble.css("bottom", bottom + 1 + 'px')
				if (bottom > this.height) {$bubble.remove()}
			}, 10)
			$(span).removeClass("new")
		})
	}

	render() {

		return (
			<div style={style} ref={(container) => { this.container = container }}>
			</div>
		)
	}
}
export default Visualizer
