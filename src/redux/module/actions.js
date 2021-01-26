import * as types from './types';

export const setSearchField = (text) => ({
  text: types.CHANGE_SEARCH_FIELD,
  payload: text
})