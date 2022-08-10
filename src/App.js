import './App.css';

// type in rcc to create react  class based components
// ctrl k ctrl s for keyboard shortcuts in vscode
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';

export default class App extends Component {
  c="john";//this is a claass variable
  render() {
    return (
      <div>
      {/* Hello My first class based Component {this.c} */}
      <NavBar/>
      <News/>
      </div>
    )
  }
}
