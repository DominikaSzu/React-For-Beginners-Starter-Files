import React from 'react';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import StorePicker from './StorePicker';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={StorePicker}></Route>
		</Switch>
	</BrowserRouter>
);

export default Router;