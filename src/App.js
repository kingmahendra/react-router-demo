import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, NavLink, Link} from 'react-router-dom';

const Home = () => (<div> Home Component </div>);
const About = () => (<div> About Component </div>);
const Contact = () => (<div> Contact Component </div>);
const User = ({match}) => (<div> Welcome {match.params.userid}</div>);
const Error = () => (<div> Error: Page not found !!!! </div>);

class App extends Component {
  render() {
    return (

        <BrowserRouter>
        <div>
          <ul>
            <li> <NavLink to="/"> Home </NavLink> </li>
            <li> <NavLink to="/about"> About </NavLink> </li>
            <li> <NavLink to="/contact"> Contact </NavLink> </li>
            <li> <NavLink to="/user/mahendra"> User </NavLink> </li>
          </ul>
          <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/user/:userid' exact strict component={User}/>
            <Route component={Error}/>
         </Switch>
        </div>
    
 
        </BrowserRouter>

    )
  }
}
export default App;
