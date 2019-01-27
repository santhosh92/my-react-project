import React, {Component}  from 'react';
import {BrowserRouter as Router, Redirect, Switch, Route} from 'react-router-dom';;

import  {PrivateRoute}  from './components/PrivateRoute';
import LayoutComponent from './components/LayoutComponent';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import ContactComponent from './components/ContactComponent';




class AppRoutes extends Component {

  render() {
    
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
      <Route path="/login" exact component={LoginComponent} />
      <LayoutComponent>
      <PrivateRoute path="/home" exact component={HomeComponent} />
      <PrivateRoute path="/about" exact   component={AboutComponent} />
      <PrivateRoute path="/contact" exact   component={ContactComponent} />
      <Redirect from="*" to="/home" />
      </LayoutComponent>
      </Switch>
      </Router>
    );

    
  }



}
export default AppRoutes;