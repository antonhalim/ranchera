import React from 'react'

const Icon = props => (
	<div>
		<svg viewBox={props.icon.viewBox} width={props.width} height={props.height} fill={props.fill}>
			<use xlinkHref={`#${props.icon.id}`} />
		</svg>
	</div>
)

export default Icon
