import React from 'react'
import _ from 'lodash'

import './_search-box.scss'

class SearchBox extends React.Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.handleChange = _.debounce(this.handleChange, 1000)
	}

	componentDidMount() {
		this.searchInput.focus()
	}

	onFormSubmit(event) {
		event.preventDefault()
	}

	onChange(event) {
		event.persist()
		this.handleChange(event.target.value)
	}

	handleChange(value) {
		this.props.handleSearch(value)
	}

	render() {
		return (
			<form className="search-box" onSubmit={this.onFormSubmit}>
				<input
					type="search"
					className="search-input"
					placeholder="Search for videos..."
					onChange={ this.onChange }
					ref={(input) => { this.searchInput = input }}
				/>
				<button className="fa fa-search" />
			</form>
		)
	}
}

export default SearchBox