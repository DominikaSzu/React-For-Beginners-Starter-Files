import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
	myInput = React.createRef();
	
    goToStore = e => {
    	e.preventDefault();
    	const url = this.myInput.current.value;
    	this.props.history.push(`/store/${url}`);
    }

    render() {
        return (
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>
				<input type="text" ref={this.myInput} required placeholder="Store Name" defaultValue={getFunName()}/>
				<button type="submit">Visit Store</button>
			</form>
       )	
    }
    
}

export default StorePicker;