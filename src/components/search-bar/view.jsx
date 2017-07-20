import React from 'react';
import './style.css';

export default (props) => (
  <div className="searchBar">
    <form onSubmit={this.onFormSubmit} className="searchForm">
      <input
        placeholder="Find a GOT character"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
      />
      <span className="input-group-btn">
        <button className="btn searchButton" type="submit"> Search </button>
      </span>
    </form>
  </div>
)