import React from 'react'
import Axios from 'axios'

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
		this.state = { currentlyPlayingId: '' }
	}
	componentWillReceiveProps(nextProps) {
		const url = 'https://www.googleapis.com/youtube/v3/search'
		const key = process.env.GATSBY_GOOGLE_API_KEY
		const val = nextProps.searchValue

		if (nextProps.searchValue.length) {
			Axios.get(`${url}?part=snippet&q=${val}&key=${key}&type=video&maxResults=1`)
				.then((res) => {
					this.setState({ currentlyPlayingId: res.data.items[0].id.videoId })
				})
		}
	}

	render() {
		let player = null

		if (this.state.currentlyPlayingId.length) {
			player = iframe(this.state.currentlyPlayingId)
		}

		if (this.props.searchValue.length < 1) {
			player = null
		}
		return (
			<footer>
				{ player }
			</footer>
		)
	}
}
export default MusicPlayer
