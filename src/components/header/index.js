import React from 'react'

import './_header.scss'
import SearchBox from '../search-box'

const Header = props => (
	<header className="header">
		<a href="/">
			<img src="ranchera.png" className="title" alt="ranchera.png" />
		</a>
		<SearchBox handleSearch={props.handleSearch} />
	</header>
)

export default Header
