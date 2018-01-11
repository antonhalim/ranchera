import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'font-awesome/scss/font-awesome.scss'

import Header from '../components/header'
import MusicPlayer from '../components/music-player'
import Visualizer from '../components/visualizer'

import '../../sass/style.scss'

class TemplateWrapper extends React.Component {
	constructor(props) {
		super(props)
		this.handleSearch = this.handleSearch.bind(this)

		this.state = { search: '' }
	}

	handleSearch(value) {
		this.setState({ search: value })
	}

	render() {
		// const { children } = this.props

		return (
			<div>
				<Helmet title="Ranchera">
					<html lang="en" amp />
					<meta name="description" content="Ranchera is a beautifully visualized music, videos and podcast player." />
					<link rel="shortcut icon" href="favicon.png" type="image/png" />
				</Helmet>

				<Header handleSearch={this.handleSearch} />

				<MusicPlayer searchValue={this.state.search} />

				<Visualizer searching={this.state.search} />
			</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

// Force HTTPS
if (typeof window !== 'undefined' && window.location.protocol === 'http:' && process.env.NODE_ENV === 'production') {
	window.location = 'https:' + window.location.href.substring(window.location.protocol.length)
}

export default TemplateWrapper
