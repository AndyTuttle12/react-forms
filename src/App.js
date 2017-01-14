import React, { Component } from 'react';
// import {Router, Route} from 'react-router';
// import logo from './logo.svg';
import './App.css';
import '../styles.css'; 

class App extends Component {

  constructor(props) {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <form className="sign-up-form">
        <Header/>
        <Section num="1" text="first name address" />
        <FormWrapper />
        <FormWrapper />
        <Section />
        <FormWrapper />
        <FormWrapper />
        <Section />
        <FormWrapper /> 
        <FormWrapper />
        <Section />
        <FormWrapper />
        <FormWrapper />
        <FormWrapper />
      </form>
    )
  }
}

class Header extends Component {
  render() {
    return (
      <h1>Sign up now!<span>Sign up for the dev job of your dreams!</span></h1>
    )
  }
}

class Section extends Component {

  render() {
    return (
      <div className="section">
        <span>{this.props.num}</span>{this.props.text}
      </div>
    )
  }
}

class FormWrapper extends Component {


  render() {
    return (
      <div></div>
    )
  }
}

export default App;


















