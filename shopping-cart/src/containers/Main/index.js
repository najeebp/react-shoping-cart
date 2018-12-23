import React, { Component } from 'react'
import Headerlayer from '../HeaderLayer'
import CartItemList from '../CarItemList'
import Invoice from '../Invoice'

class Main extends Component {
	render() {
		return (
			<div className="Main">
				<Headerlayer />
				<CartItemList />
				<div className="horizontal-line"></div>
				<Invoice />
			</div>
		)
	}
}

export default Main