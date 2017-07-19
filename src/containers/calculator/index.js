import React, { Component } from 'react';
import Counter from '../../components/counter';

import { increment, decrement, reset } from '../../redux/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const Calculator = (props) => (
  <Counter
    value={props.counter.value}
    increment={props.increment}
    decrement={props.decrement}
    reset={props.reset}
    />
);

const mapStateToProps = (state) => ({counter: state.counter});
const mapDispatchToProps = (dispatch) => bindActionCreators({increment, decrement, reset}, dispatch); 

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
