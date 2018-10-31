import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	render() {
		const { image, name, status, price, desc } = this.props.details;

		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h4 className="fish-name">{name}
					<span className="price">{formatPrice(price)}</span>
				</h4>
				<p>{desc}</p>
				<button>Add To Cart</button>
			</li>
	)}
}

export default Fish;