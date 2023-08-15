import React from 'react';
import {Link} from 'react-router-dom';

function Contact(){
	return(
		<React.Fragment>
			<div>Contact</div>
			<Link to='/about'>About</Link>
			<Link to='/home'>Home</Link>
		</React.Fragment>
		)
}

export default Contact;