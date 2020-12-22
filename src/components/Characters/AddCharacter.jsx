import React, { useState } from 'react';
import styles from './characters.module.css';

const AddCharacter = (props) => {
  const [name, setName] = useState('');
  const [specie, setSpecie] = useState('Human');
  const [gender, setGender] = useState('Male');

  const onSubmitCharacter = (e) => {
    e.preventDefault();
    props.addCharacter({
      name,
      specie,
      gender
    });
  };

  return (
    <div className={styles.addCharacterContainer}>
      <form onSubmit={onSubmitCharacter}>
        <input type="text" name="text" value={name} onChange={(e) => setName(e.target.value)} />
        <select value={specie} onChange={(e) => setSpecie(e.target.value)}>
          <option value="Human">Human</option>
          <option value="Jedi">Jedi</option>
          <option value="Hutt">Hutt</option>
        </select>
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="Human">Male</option>
          <option value="Jedi">Female</option>
          <option value="Hutt">Other</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddCharacter;