import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'font-awesome/scss/font-awesome.scss'

import Header from '../components/header'
import MusicPlayer from '../components/music-player'

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
			</div>
		)
	}
}

TemplateWrapper.propTypes = {
	children: PropTypes.func,
}

export default TemplateWrapper
