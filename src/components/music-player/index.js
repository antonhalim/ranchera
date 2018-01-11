import React from 'react'
import Axios from 'axios'

const style = {
	bottom: 0,
	position: 'absolute',
	width: '100%',
	textAlign: 'center',
}

function iframe(id) {
	return (
		<iframe
			title="ytplayer"
			type="text/html"
			width="1"
			height="1"
			src={`https://www.youtube.com/embed/${id}?autoplay=1&enablejsapi=1`}
			frameBorder="0"
		/>
	)
}


class MusicPlayer extends React.Component {
	constructor(props) {
		super(props)
		this.state = { currentlyPlayingObj: {}  }
	}
	componentWillReceiveProps(nextProps) {
		const url = 'https://www.googleapis.com/youtube/v3/search'
		const key = process.env.GATSBY_GOOGLE_API_KEY
		const val = nextProps.searchValue

		if (nextProps.searchValue.length) {
			Axios.get(`${url}?part=snippet&q=${val}&key=${key}&type=video&maxResults=1`)
				.then((res) => {
					this.setState({ currentlyPlayingObj: res.data.items[0] })
				})
		}
	}

	render() {
		let player = null
		let title = null
		const obj = this.state.currentlyPlayingObj

		if (Object.keys(obj).length) {
			player = iframe(obj.id.videoId)
			title = obj.snippet.title
		}

		if (this.props.searchValue.length < 1) {
			player = null
			title = null
		}
		return (
			<footer style={style}>
				{ player }
				<div>{title}</div>
			</footer>
		)
	}
}
export default MusicPlayer
