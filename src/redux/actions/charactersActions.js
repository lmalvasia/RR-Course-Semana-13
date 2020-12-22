import {
  GET_CHARACTERS_FETCHING,
  GET_CHARACTERS_FULFILLED,
  GET_CHARACTERS_REJECTED,
  ADD_CHARACTERS_FETCHING,
  ADD_CHARACTERS_FULFILLED,
  ADD_CHARACTERS_REJECTED,
  DELETE_CHARACTERS_FETCHING,
  DELETE_CHARACTERS_FULFILLED,
  DELETE_CHARACTERS_REJECTED,
} from '../../constants/actionTypes';

const URL = 'https://server-weekly13.herokuapp.com/characters';

const getCharactersFetching = () => ({
  type: GET_CHARACTERS_FETCHING,
});

const getChractersFulfilled = (payload) => ({
  type: GET_CHARACTERS_FULFILLED,
  payload,
});

const getCharactersRejected = () => ({
  type: GET_CHARACTERS_REJECTED,
});

export const getCharacters = () => dispatch => {
  dispatch(getCharactersFetching());
  return fetch(URL)
    .then(data => data.json())
    .then(response => {
      dispatch(getChractersFulfilled(response));
    })
    .catch(() => {
      dispatch(getCharactersRejected());
    });
};

const addCharacterFetching = () => ({
  type: ADD_CHARACTERS_FETCHING,
});

const addCharacterFullfiled = (payload) => ({
  type: ADD_CHARACTERS_FULFILLED,
  payload,
});

const addCharacterRejected = () => ({
  type: ADD_CHARACTERS_REJECTED,
});

export const addCharacter = character => dispatch => {
  dispatch(addCharacterFetching());
  return fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character)
  }).then(data => data.json())
    .then(response => {
      dispatch(addCharacterFullfiled(response));
    })
    .catch(() => {
      dispatch(addCharacterRejected());
    });
};

const deleteCharacterFetching = () => ({
  type: DELETE_CHARACTERS_FETCHING,
});

const deleteCharacterFulfilled = (payload) => ({
  type: DELETE_CHARACTERS_FULFILLED,
  payload,
});

const deleteCharacterRejected = () => ({
  type: DELETE_CHARACTERS_REJECTED,
});

export const deleteCharacter = id => dispatch => {
  dispatch(deleteCharacterFetching());
  return fetch(`${URL}/${id}`, { method: 'DELETE' })
    .then(data => data.json())
    .then(() => {
      dispatch(deleteCharacterFulfilled(id));
    })
    .catch(() => {
      dispatch(deleteCharacterRejected());
    });
};
