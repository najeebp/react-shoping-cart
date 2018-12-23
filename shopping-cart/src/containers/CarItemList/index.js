import React, { Component } from 'react'
import { Table } from 'antd'
import { connect } from 'react-redux'
import { updateCart } from '../../actions'
import CartItem from '../../components/CartItem'
import cartData from '../../data/data'
import _ from 'lodash'

class CartItemList extends Component {

	componentWillMount() {
		this.props.updateCart(cartData)
	}

	constructColoumnData = () => {
		let { carts } = this.props
		return [
			{
				title: <p className="para-bold"><b>{`${carts.length} ITEMS`}</b></p>,
				key: 1,
				render: (text, record) => (<div><CartItem record={record} /> </div>)
			},
			{
				title: <p className="para-bold"><b>SIZE</b></p>,
				key: 2,
				render: (text, record) => (<h3><b className="para-bold"> {_.toUpper(record.p_selected_size.code)} </b></h3>)

			},
			{
				title: <p className="para-bold"><b>QTY</b></p>,
				key: 3,
				render: (text, record) => (<div> {_.toUpper(record.p_quantity)} </div>)
			},
			{
				title: <p className="para-bold"><b>PRICE</b></p>,
				key: 4,
				render: (text, record) => {
					if (record.p_originalprice === record.p_price) {
						return (<h3><b>{record.c_currency} {_.toUpper(record.p_quantity * record.p_price)}.00 </b></h3>)
					} else {
						return (<div>
							<strike><h3 className="para-bold"><b>{record.c_currency} {_.toUpper(record.p_quantity * record.p_originalprice)}.00 </b></h3></strike>
							<h3><b>{record.c_currency} {_.toUpper(record.p_quantity * record.p_price)}.00 </b></h3>
						</div>)
					}
				}
			}
		]
	}

	render() {
		return (
			<div>
				<Table columns={this.constructColoumnData()} dataSource={this.props.carts} pagination={false} />
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		carts: state.carts.shopingCarts
	}
}

function mapDispatchToProps(dispatch) {
	return {
		updateCart: (payload) => dispatch(updateCart(payload)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CartItemList)