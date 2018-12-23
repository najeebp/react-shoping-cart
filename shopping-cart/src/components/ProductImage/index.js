import React from 'react'

const ProductImage = (props) => {
	return (<div><img src={require(`../../assets${props.image}`)} alt={props.p_name} style={props.style || null} /> </div>)
}

export default ProductImage