import React, {Component} from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';

// import {HomeComponent, AboutComponent, ContactComponent, NavComponent} from '../components';
import HomeComponent from './HomeComponent';
import AboutComponent from './AboutComponent';
import ContactComponent from './ContactComponent';
import NavComponent from './NavComponent';
import LoginComponent from './LoginComponent';
import PrivateRoute from './PrivateRoute';

import {connect} from 'react-redux';


class LayoutComponent extends Component {
	render () {
		return (
			<div className = "app-container">
				{/*Navbar*/}
				<div className = "navbar">
					<NavComponent />
				</div>

				{/*AppContent*/}
				<div className="app-content">
				{this.props.children}
				</div>
				
				{/*Footer*/}
				<div className = "Footer">
					This is Footer
				</div>

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

	export default connect(mapProp,mapState)(LayoutComponent)