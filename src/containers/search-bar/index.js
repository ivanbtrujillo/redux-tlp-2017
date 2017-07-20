import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Finder from '../../components/finder';
import { fetchSingleCharacter } from '../../redux/actions';

class Search extends Component {

  constructor(props){
    super(props);
    this.state = { term: ''};
  }

  onInputChange = (event) => this.setState({term: event.target.value});

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.fetchSingleCharacter(this.state.term);
    this.setState({term: ''});
  }
  
  render = () => (
    <Finder onSubmit={this.onFormSubmit}
      term={this.state.term}
      onChange={ this.onInputChange}
    />   
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators({fetchSingleCharacter}, dispatch);

export default connect(null, mapDispatchToProps)(Search);