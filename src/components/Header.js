import React, { Component } from 'react';
import CounterButton from './CounterButton'


class Header extends Component{
	render(){
		console.log('Header');
	  return(
	  	<div>
				<h1 className='f1'>RobotFriend</h1>
				<CounterButton color="green" />
			</div>
  		);
	}
}

export default Header;
