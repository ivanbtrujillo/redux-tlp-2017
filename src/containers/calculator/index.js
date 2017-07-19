import React, { Component } from 'react';
import Counter from '../../components/counter';

export default class Calculator extends Component {

  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  increment = () => this.setState({value: this.state.value +1 });
  decrement = () => this.setState({value: this.state.value - 1 });
  reset = () => this.setState({value: 0 });

  render() {
    return (
      <Counter
        value={this.state.value}
        increment={this.increment}
        decrement={this.decrement}
        reset={this.reset}
       />
    );
  }
}