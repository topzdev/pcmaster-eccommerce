import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

// Stylesheet
import './resources/css/bootstrap-grid.min.css';
import './resources/css/main.min.css';

// Components
// import Menu from "./components/layout/Menu";
import Main from './components/Main';
const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Route exact path='/' component={Main} />
				<Route exact path='/admin'>
					<h1>Hello Admin</h1>
				</Route>
			</Router>
		</Provider>
	);
};

export default App;
