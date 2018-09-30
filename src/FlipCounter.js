import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class FlipCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: props.value,
    };
  };
  
componentDidMount (){
  let a = Number(this.state.num).toString();
  if (a.length < 6){
    let zeros = 6-a.length;
    for (let i=0; i<zeros; i++){
      a = "0"+a;
    }
  }
  this.setState ({
      num: a,
  })
}


  render() {
    return (
     <div>
       {/* <input type='number'></input> */}
        <span>
         {this.state.num}
       </span>
       </div>
    );
  }
}

export default FlipCounter;