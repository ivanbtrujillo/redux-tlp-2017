import { INCREMENT_VALUE, DECREMENT_VALUE, RESET_VALUE } from '../actions';

const initialState = {
  value: 0
}

export const counter = (state = initialState, action) => {
  switch(action.type){
    case INCREMENT_VALUE:
      return Object.assign({}, state, {value: state.value +1 });

    case DECREMENT_VALUE:
      return Object.assign({}, state, {value: state.value -1 });

    case RESET_VALUE:
       return Object.assign({}, state, initialState);

    default:
      return state;
  }
}

