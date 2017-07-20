import { FETCH_SINGLE } from '../actions';

const initialState = {
  characters: []
}

export const gameOfThrones = (state = initialState, action) => {
  
  switch(action.type){

    case FETCH_SINGLE:
      let newData = [...action.payload.data, ...state.characters]
      return action.payload.data ? Object.assign({},state, { characters: newData }) : state;

    default:
      return state;
  }
}