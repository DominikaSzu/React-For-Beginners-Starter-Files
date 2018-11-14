import React from 'react';
import { formatPrice } from '../helpers.js';

class Order extends React.Component {
	render() {
		const orderId = Object.keys(this.props.order);
		const total = orderId.reduce((prevTotal, key) => {
			const fish = this.props.fishes[key];
			const count = this.props.order[key];
			const isAvailable = fish && fish.status === 'available';

			if (isAvailable) {
				return prevTotal + (count * fish.price);
			} 

			return prevTotal;
		}, 0);



		return (
			<div className="order-wrap">
				<h2>Order</h2>
				{orderId}
				<div className="total">
				<strong>{formatPrice(total)}</strong>
				</div>
			</div>
	)}
}

export default Order;