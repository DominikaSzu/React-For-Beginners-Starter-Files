import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
	handleClick = () => {
		this.props.addToOrder(this.props.index);
	}

	render() {
		const { image, name, status, price, desc } = this.props.details;
		let isAvaiable = status === "available";

		return (
			<li className="menu-fish">
				<img src={image} alt={name} />
				<h4 className="fish-name">{name}
					<span className="price">{formatPrice(price)}</span>
				</h4>
				<p>{desc}</p>
				<button disabled={!isAvaiable} onClick={() => this.props.addToOrder(this.props.index)} >{isAvaiable ? "Add To Cart" : "Sold Out"}</button>
			</li>
	)}
}

export default Fish;