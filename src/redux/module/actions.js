import * as types from './types';

export const setSearchField = (text) => ({
  type: types.CHANGE_SEARCH_FIELD,
  payload: text
})
