import React from 'react';
import './style.css';

export default (props) => (
  <div className="finder">
    <form onSubmit={props.onSubmit} className="finderForm">
      <input
        placeholder="Busca un personaje de GOT"
        className="form-control"
        value={props.term}
        onChange={props.onChange}
      />
      <span className="input-group-btn">
        <button className="btn finderButton" type="submit"> Buscar </button>
      </span>
    </form>
  </div>
)