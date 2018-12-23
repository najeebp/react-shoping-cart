import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col } from 'antd'
import InvoiceHelp from '../../components/InvoiceHelp'
import InvoiceDetails from '../../components/InvoiceDetails'
import _ from 'lodash'

class Invoice extends Component {
	getTotalAmount = ()=>{
		let { carts } = this.props
		return _.sum(_.map(carts, (cart)=>(cart.p_quantity * cart.p_price)))
	}
	render() {
		return (
			<Row>
				<Col span={8}><InvoiceHelp /></Col>
				<Col span={16}><InvoiceDetails currency={'$'} amount={this.getTotalAmount()}/></Col>
			</Row>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		carts: state.carts.shopingCarts
	}
}

export default connect(mapStateToProps)(Invoice)