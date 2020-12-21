import React, { useEffect, useState } from 'react';
import styles from './characters.module.css';

const Characters = () => {
  const [state, setState] = useState({
    characters: [],
    isLoading: true
  });

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(data => data.json())
      .then(response => {
        setState(currentState => ({
          ...currentState,
          characters: response.results,
          isLoading: false
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (state.isLoading) {
    return <div>Loading data...</div>
  }

  return (
    <div className={styles.charactersContainer}>
      <table className={styles.charactersTable}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Specie</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {state.characters.map(character => {
            return (
              <tr key={character.id}>
                <td>{character.name}</td>
                <td>{character.species}</td>
                <td>
                  <img src={character.image} width="40px" height="40px" alt='character' />
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