import React, { Component } from 'react';
import './App.css';
import Navigation from '../components/Navigation/Navigation'
import Logo from '../components/Logo/Logo'
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from '../components/LoginForm/LoginForm'
import Particles from 'react-particles-js'
import InputForm from '../components/InputForm/inputForm'
import Register from '../components/Register/Register'

const particlesParm={
  particles:{
    number:{
      value:85,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component {

  constructor(){
    super()
    this.state={
      imageURL:'',
      imageDisplay:'',
      route:'login',
      signedIn:false,
    }
  }

  onLinkAdd=(event)=>{
    this.setState({imageURL:event.target.value})
  }

  onSumbit=()=>{
    this.setState({imageDisplay:this.state.imageURL})
  }
  changeState=(states)=>{
    this.setState({route:states})
  }

  render() {
    let context
    const { imageDisplay,route,signedIn }=this.state
    if(route==='login'){
      context=(
        <Login navigationChange={this.changeState}/>
      )
    }
    else if(route==='register'){
      context=<Register navigationChange={this.changeState}/>
    }
    else{
      context=(
        <div>
        <Logo />
        <InputForm inputData={ this.onLinkAdd } imageURL={ imageDisplay } onSumbit={ this.onSumbit } />
        </div>
      )
    }
    return (
      <div className="App">
      <Particles  className="particless" params={ particlesParm } />
        <Navigation navigationStatus={ signedIn } navigationChange={this.changeState}/>
        { context }
      </div>
    );
  }
}

export default App;
