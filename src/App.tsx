import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {connect} from 'react-redux';
interface props {
  age: any,
  onAgeUp: any,
  onAgeDown: any
}
class App extends Component<props> {
  render() {
  return (
    <div className="App">
     <div> Age : {this.props.age} </div>
     <button onClick={this.props.onAgeUp}>Age UP</button>
     <button onClick={this.props.onAgeDown}>Age DOWN</button>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAgeUp: () => dispatch({type:'AGE_UP'}),
    onAgeDown: () => dispatch({type: 'AGE_DOWN'})
  }
}

const mapStateToProps = (state: any) => {
  return {
    age: state.age
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
