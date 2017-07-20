import React from 'react';
import CharacterList from '../../components/character-list';
import { connect } from 'react-redux';

const SearchResults = (props) => (<CharacterList characters={props.characters} />)

const mapStateToProps = (state) => ({characters: state.gameOfThrones.characters });

export default connect(mapStateToProps, null)(SearchResults);
