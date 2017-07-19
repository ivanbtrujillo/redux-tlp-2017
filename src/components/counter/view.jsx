import React from 'react';
import './style.css';

export default (props) => (
  <div className="counter">
    <h1 className="counterTitle"> Counter </h1>
    <p> El valor es: {props.value}
      <span className="counterValue"> </span>
    </p>
    <button className="counterButton" onClick={props.increment} > Incrementar </button>
    <button className="counterButton" onClick={props.decrement} > Decrementar </button>
    <button className="counterButton" onClick={props.reset} > Resetear </button>
  </div>
)


