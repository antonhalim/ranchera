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

function getRandomInRange(min, max) {
	return Math.random() * (max - min) + min
}

class Visualizer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			playing: false,
		}
	}

	componentDidMount() {
		this.addBuble()
		this.animateBuble()
		this.handleResize()

		window.onresize = this.handleResize.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		this.setState({ playing: nextProps.searching.length > 0 })
	}

	shouldComponentUpdate() {
		return false
	}

	handleResize() {
		this.width = this.container.offsetWidth
		this.height = this.container.clientHeight
	}

	addBuble() {
		this.interval = setInterval(() => {
			if (this.state.playing) {
				const size = Math.round(Math.random() * 100)
				const background = randomBackground[Math.round(getRandomInRange(0, 27))]
				const bublestyle = `left: ${getRandomInRange(0, this.width)}px; width: ${size}px; height: ${size}px; background: ${background};border-radius: 50%; bottom: 0; position: absolute;`
				$(this.container).append(`<div class='buble' style="${bublestyle}"><span class='new' /></div>`)
			}
			this.animateBuble()
		}, 1000)
	}

	animateBuble() {
		$(this.container).find('.buble SPAN.new').each((i, span) => {
			setInterval(() => {
				const $bubble = $(span).parent()
				const bottom = parseFloat($bubble.css('bottom'))
				$bubble.css('bottom', `${bottom + 1}px`)
				if (bottom > this.height) { $bubble.remove() }
			}, 10)
			$(span).removeClass('new')
		})
	}

	render() {
		return (
			<div style={style} ref={(container) => { this.container = container }} />
		)
	}
}
export default Visualizer
