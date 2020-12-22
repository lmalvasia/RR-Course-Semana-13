import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import AddCharacter from './AddCharacter';
import {
  addCharacter as addCharacterAction,
  getCharacters as getCharactersAction,
  deleteCharacter as deleteCharacterAction
} from '../../redux/actions/charactersActions';
import styles from './characters.module.css';
import { bindActionCreators } from 'redux';

const Characters = ({
  characters,
  isLoading,
  error,
  addCharacter,
  getCharacters,
  deleteCharacter
}) => {
  const [showCharacterForm, toggleCharacterForm] = useState(false);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const addNewCharacter = character => {
    addCharacter(character);
    toggleCharacterForm(!showCharacterForm);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!!</div>;
  }

  return (
    <div className={styles.charactersContainer}>
      <button className={styles.addCharacterButton} onClick={() => toggleCharacterForm(!showCharacterForm)}>Add character</button>
      {showCharacterForm && <AddCharacter addCharacter={addNewCharacter} />}
      <table className={styles.charactersTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specie</th>
            <th>Gender</th>
            <th style={{width: '20px'}}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {characters.map(character => {
            return (
              <tr key={character._id}>
                <td>{character.name}</td>
                <td>{character.specie}</td>
                <td>{character.gender}</td>
                <td style={{textAlign: 'center'}}>
                  <button onClick={() => deleteCharacter(character._id)}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    addCharacter: addCharacterAction,
    getCharacters: getCharactersAction,
    deleteCharacter: deleteCharacterAction
  }, dispatch);
};

const mapStateToProps = state => {
  return {
    isLoading: state.characters.isLoading,
    error: state.characters.error,
    characters: state.characters.list
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);