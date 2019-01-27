import React, {Component} from 'react';
import http from 'axios';

import {connect} from 'react-redux';

class HomeComponent extends Component {

	constructor(props){
		super(props);
	}

	componentDidMount() {
		http.get('/user').then(user => {
			console.log(user);
		})
	}
	render () {
		return (
			<div>
			<div>Age:  <span>{this.props.age}</span></div>
			<button type="button" onClick={this.props.onUp}>UP</button>
			<button type="button" onClick={this.props.onDown}>DOWN</button>
				<h1>This is HomeComponent</h1>
			</div>
		);
		
	}
	


}

	const mapProp = (state) => {
		return {
			age:state.age
		}
	}

	const mapState = (dispach) => {
		return {
			onUp: () => dispach({type:'Age_Up'}),
			onDown: () => dispach({type:'Age_Down'})
		}
	}

export default connect(mapProp,mapState)(HomeComponent)