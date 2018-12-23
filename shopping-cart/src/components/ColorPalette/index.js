import React from 'react'

const ColorPalette = (props) => {
	let color = props.color
	return (
		<div>
			<div className="color-palette" style={{ 'background': color }}></div>
		</div>
	)
}

export default ColorPalette