import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  FAILURE_CHARACTERS,
  REQUEST_ADD_CHARACTER,
  RECEIVE_ADD_CHARACTER,
  FAILURE_ADD_CHARACTER,
  REQUEST_DELETE_CHARACTER,
  RECEIVE_DELETE_CHARACTER,
  FAILURE_DELETE_CHARACTER
} from '../../constants/actionTypes';

const URL = 'https://server-weekly13.herokuapp.com/characters';

const reqCharacters = () => ({
  type: REQUEST_CHARACTERS,
});

const receiveCharacters = (payload) => ({
  type: RECEIVE_CHARACTERS,
  payload,
});

const failureCharacters = () => ({
  type: FAILURE_CHARACTERS,
});

export const getCharacters = () => dispatch => {
  dispatch(reqCharacters());
  return fetch(URL)
    .then(data => data.json())
    .then(response => {
      dispatch(receiveCharacters(response));
    })
    .catch(() => {
      dispatch(failureCharacters());
    });
};

const reqAddCharacter = () => ({
  type: REQUEST_ADD_CHARACTER,
});

const receiveAddCharacter = (payload) => ({
  type: RECEIVE_ADD_CHARACTER,
  payload,
});

const failureAddCharacter = () => ({
  type: FAILURE_ADD_CHARACTER,
});

export const addCharacter = character => dispatch => {
  dispatch(reqAddCharacter());
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  }).then(data => data.json())
    .then(response => {
      dispatch(receiveAddCharacter(response));
    })
    .catch(() => {
      dispatch(failureAddCharacter());
    });
};

const reqDeleteCharacter = () => ({
  type: REQUEST_DELETE_CHARACTER,
});

const receiveDeleteCharacter = (payload) => ({
  type: RECEIVE_DELETE_CHARACTER,
  payload,
});

const failureDeleteCharacter = () => ({
  type: FAILURE_DELETE_CHARACTER,
});

export const deleteCharacter = id => dispatch => {
  dispatch(reqDeleteCharacter());
  return fetch(`${URL}/${id}`, { method: 'DELETE' })
    .then(data => data.json())
    .then(() => {
      dispatch(receiveDeleteCharacter(id));
    })
    .catch(() => {
      dispatch(failureDeleteCharacter());
    });
};
