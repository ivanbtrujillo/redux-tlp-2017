import axios from 'axios';

export const FETCH_SINGLE = 'FETCH_SINGLE';

const API_URL ="http://localhost:4000";

export const fetchSingleCharacter = (name) => {

  const url = `${API_URL}/characters?name=${name}`;
  const request = axios.get(url);

  return { 
    type: FETCH_SINGLE,
    payload: request
  }
};