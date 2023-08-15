import React from 'react';
import {Link} from 'react-router-dom';

function Home(){
	return(
		<React.Fragment>
			<div>Home</div>
			<Link to='/about'>About</Link>
			<Link to='/contact'>Contact</Link>
		</React.Fragment>
		)
}

export default Home;