import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
state = {
	fishes: {},
	order: {}
}

addFish = (fish) => {
	const fishes = {...this.state.fishes};
	fishes[`fish${Date.now()}`] = fish;
	this.setState({ fishes });
}

loadSampleFishes = () => {
	this.setState({ fishes: sampleFishes});
}

render() {
	return (
	<div className="catch-of-the-day">
		<div className="menu">
			<Header tagline="Fresh seafood market" />
			<ul className="fishes">
			{Object.keys(this.state.fishes).map(key => {
				return <Fish details={this.state.fishes[key]}
					  key={key} />
			})}
			</ul>
		</div>
		<Order />
		<Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
	</div>				
	)
}}

export default App;
