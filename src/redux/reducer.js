import { combineReducers } from 'redux';
import {searchPokemon, requestPokemon} from './module/reducer';

export default combineReducers({
  searchPokemon, requestPokemon
});