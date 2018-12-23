import React from 'react'

const DropDown = (props) => {
	let data = props.data
	return (
		<select defaultValue={props.default} onChange={props.onChange}>
			{data.map((item, index) => (<option key={index} value={item.code} data-name={item.name}>{item.name}</option>))}
		</select>
	)
}

export default DropDown