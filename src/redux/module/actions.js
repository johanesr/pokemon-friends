import * as types from './types';
import axios from 'axios';

export const setSearchField = (text) => ({
  text: types.CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestPokemons = (dispatch) => {
  dispatch({type: types.REQUEST_POKEMON_PENDING});
  axios.get('https://pokeapi.co/api/v2/pokedex/2')
    .then(res => { dispatch({ type: types.REQUEST_POKEMON_SUCCESS, payload: res.data.pokemon_entries })})
    .catch(err => { dispatch({ type: types.REQUEST_POKEMON_FAILED, payload: err })});
}