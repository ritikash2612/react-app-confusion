import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';


class App extends Component{

  
render() {

  var style = {

  }
  return (
    <div className="App">
      <Main/>
    </div>
  );
}
}

export default App;

