import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import About from './about.js';
import Contact from './contact.js';
import Home from './home.js';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';

function Main(){
	return(
		<React.Fragment>
			<Header/>
			<Switch>
				<Route path='/home' component={Home}/>
				<Route path='/about' component={About}/>
				<Route path='/contact' component={Contact}/>
				<Redirect to='/home'/>
			</Switch>
			<Footer/>
		</React.Fragment>
		)
}

export default withRouter(Main);