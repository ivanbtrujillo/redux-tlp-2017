import React from 'react';
import './style.css';

export default (props) => (
  <tr>
    <td> <img width="120px" height="120px" src={props.character.image} alt={props.character.name} /> </td>
    <td className="characterText"> {props.character.name}</td>
    <td className="characterText"> {props.character.house}</td>
  </tr>
)