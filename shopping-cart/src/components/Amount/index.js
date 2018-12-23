import React from 'react'

const Amount = (props) => {
	return (
		<div><span className="font-small pos-absolute">{props.currency}</span> <span className="pos-relative marg-lett-10">{parseFloat(props.amount).toFixed(2)}</span></div>
	)
}

export default Amount