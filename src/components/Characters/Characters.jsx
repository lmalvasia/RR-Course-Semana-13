import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddCharacter from './AddCharacter';
import {
  addCharacter,
  getCharacters,
  deleteCharacter
} from '../../redux/actions/charactersActions';
import styles from './characters.module.css';

const Characters = () => {
  const dispatch = useDispatch()
  const [showCharacterForm, toggleCharacterForm] = useState(false);
  const characters = useSelector(store => store.characters.list)
  const isLoading = useSelector(store => store.characters.isLoading)
  const error = useSelector(store => store.characters.error)

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  const addNewCharacter = character => {
    dispatch(addCharacter(character));
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
                  <button onClick={() => dispatch(deleteCharacter(character._id))}>X</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
};

export default Characters;