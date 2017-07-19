import React from 'react';
import './style.css';

export default (props) => (
  <div className="counter">
    <h1 className="counterTitle"> Counter </h1>
    <p> El valor es:
      <span className="counterValue"> </span>
    </p>
    <button className="counterButton" onClick="" > Incrementar </button>
    <button className="counterButton" onClick="" > Decrementar </button>
    <button className="counterButton" onClick="" > Resetear </button>
  </div>
)


