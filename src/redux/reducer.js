import { combineReducers } from 'redux';
import { searchPokemon, changePage } from './module/reducer';

export default combineReducers({
  searchPokemon, changePage
});