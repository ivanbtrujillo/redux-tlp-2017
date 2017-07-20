import React from 'react';
import './style.css';

import Character from '../character';

export default (props) => {

  const renderCharacter = (character) => <Character character={character} key={character.name} />

  return (
    <div className="list">
      <table className="table table-hover">
        <thead>
          <tr className="tableTitle">
            <th></th>
            <th>Nombre</th>
            <th>Casa</th>
          </tr>
        </thead>
        <tbody>
          {props.characters.map(renderCharacter)}
        </tbody>
      </table>
    </div>
  )
}

