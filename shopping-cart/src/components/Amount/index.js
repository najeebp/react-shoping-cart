import React from 'react'

const Amount = (props) => {
	return (
		<div><span>{props.currency}</span> {parseFloat(props.amount).toFixed(2)}</div>
	)
}

export default Amount