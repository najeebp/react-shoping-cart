import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import Amount from '../Amount'

class InvoiceDetails extends Component {
	constructor(props) {
		super(props)
		this.state = {
			promocode: "AJ10",
			offerAmount: 0,
		}
	}

	componentWillReceiveProps(props){
		this.getPromocodeAppliedAmount(props.amount)
	}

	onValueChange(e) {
		const { value } = e.target;
		this.setState({ promocode: value })
	}

	getPromocodeAppliedAmount(amount) {
		let percentage = this.state.promocode.slice(-2)
		this.setState({ offerAmount: amount * (percentage / 100) })
	}

	getTotalAmount = () => (this.props.amount - this.state.offerAmount)

	render() {
		return (
			<div>
				<Row>
					<Col span={12}>
						<p className="para-bold"><b> ENTER PROMOTION CODE OR GIFT CARD </b></p>
					</Col>
					<Col span={12}>
						<div className="text-align_r">
							<p>
								<Input type="text"
									value={this.state.promocode}
									onChange={(e) => { this.onValueChange(e) }}
									className="width_65 margin_r_2"
								/>
								<span><Button onClick={() => this.getPromocodeAppliedAmount(this.props.amount)}>APPLY</Button></span>
							</p>
						</div>
					</Col>
				</Row>
				<div className="horizontal-line-with-2px"></div>
				<Row>
					<Col span={12}>
						<h4> SUB TOTAL </h4>
					</Col>
					<Col span={12} className="align-last">
						<h2><b><Amount currency={this.props.currency} amount={this.props.amount} /></b></h2>
					</Col>
				</Row>

				<Row>
					<Col span={12}>
						<h4> PROMOTION CODE {this.state.promocode} APPLIED </h4>
					</Col>
					<Col span={12} className="align-last">
						<h2><b><Amount currency={this.props.currency} amount={this.state.offerAmount} /></b></h2>
					</Col>
				</Row>

				<Row>
					<Col span={12}>
						<b> ESTIMATED SHIPPING* </b>
						<p className="para-bold">You quality for free shipping because your order is over $50</p>
					</Col>
					<Col span={12} className="align-last">
						<p className="para-bold">FREE</p>
					</Col>
				</Row>
				<div className="horizontal-line-with-2px"></div>
				<Row>
					<Col span={12}>
						<b> ESTIMATED TOTAL</b>
						<p className="para-bold">Tax will applied during checkout</p>
					</Col>
					<Col span={12} className="align-last">
						<h2><b><Amount currency={this.props.currency} amount={this.getTotalAmount()} /></b></h2>
					</Col>
				</Row>
				<div className="horizontal-line"></div>
				<Row>
					<Col span={12}></Col>
					<Col span={12} className="align-last">
						<Button type="primary">CHECKOUT</Button>
					</Col>
				</Row>
			</div>
		)
	}
}

export default InvoiceDetails