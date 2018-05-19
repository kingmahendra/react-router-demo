import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom';

const NewComp = () => {
  return (

    <div>
      New Route
    </div>
  )
}

class App extends Component {
  render() {
    return (
      
      <BrowserRouter> 
        <Route path='/new' component={NewComp}/>
      </BrowserRouter>
    )
  }
}
export default App;
