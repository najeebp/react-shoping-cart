import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductImage from '../ProductImage'
import DropDown from '../DropDown'
import ColorPalette from '../ColorPalette'
import Amount from '../Amount'
import { updateCart } from '../../actions'
import { Row, Col, Icon, Modal, Input, Button } from 'antd'
import _ from 'lodash'


class CartItem extends Component {

	constructor(props) {
		super()
		this.state = {
			visible: false,
			quantity: 1,
			size: ''
		}
	}

	removeFromCart = () => {
		let { carts, record } = this.props
		this.props.updateCart(_.remove(carts, (cart) => (cart.p_id !== record.p_id)))
	}

	showModal = () => {
		this.setState({ visible: true });
	}

	handleCancel = (e) => {
		this.setState({ visible: false });
	}

	handleQty = (e) => this.setState({ quantity: e.target.value })

	handlesize = (e) => this.setState({ size: e.target.value })

	manageEditCart = () => {
		let { record, carts } = this.props
		let cartsClone = Object.assign([], carts)
		cartsClone.map((item) => {
			if (item.p_id === record.p_id) {
				item.p_quantity = this.state.quantity || record.p_quantity
				item.p_selected_size.code = this.state.size || record.p_selected_size.code
			}
			return item
		})
		this.props.updateCart(cartsClone)
		this.setState({ visible: false });
	}

	render() {
		let { record } = this.props
		return (
			<div>
				<Row>
					<Col span={10}>
						<ProductImage image={record.p_image} alt={record.p_name} style={{ 'width': '150px', 'height': '150px' }} />
					</Col>
					<Col span={12}>
						<div>
							<h3><b>{_.toUpper(record.p_name)}</b></h3>
							<b className="para-bold">Style #: {_.toUpper(record.p_style)}</b>
							<p className="para-bold"><b>Color: {record.p_selected_color.name}</b></p>
							<p>
								<span onClick={this.showModal} className="cursor-pointer">EDIT</span> |
								<span onClick={this.removeFromCart} className="cursor-pointer"> <Icon type="close" /> REMOVE </span> |
								<span> SAVE FOR LATER </span>
							</p>
						</div>
					</Col>
				</Row>
				<Modal
					visible={this.state.visible}
					onCancel={this.handleCancel}
					footer={null}
				>
					<Row>
						<Col span={12}>
							<div className="modal-desc">
								<h4><b>{_.toUpper(record.p_name)}</b></h4>
								<h2><b><Amount currency={record.c_currency} amount={record.p_price} /></b></h2>
								<h4 className="para-bold">{_.toUpper(record.p_style)}</h4>
								<div className="display-flex">
									{record.p_available_options.colors.map((color, index) => <ColorPalette key={index} color={color.hexcode} />)}
								</div>
								<h4 className="para-bold"> Color: {record.p_selected_color.name}</h4>
								<p><DropDown data={record.p_available_options.sizes} default={record.p_selected_size.code} onChange={this.handlesize} /><span> <Input type="text" defaultValue={record.p_quantity} style={{ width: '33px' }} onChange={this.handleQty} /></span></p>
								<Button type="primary" onClick={this.manageEditCart}>EDIT</Button>
								<br></br>
								<h4><u>Check product details</u></h4>
							</div>
						</Col>
						<Col span={12}><ProductImage image={record.p_image} alt={record.p_name} /></Col>
					</Row>
				</Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem)