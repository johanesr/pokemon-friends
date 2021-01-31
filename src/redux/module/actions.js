import * as types from './types';

export const setSearchField = (text) => ({
  type: types.CHANGE_SEARCH_FIELD,
  payload: text
})

export const setCurrentPage = (curPage) => ({
  type: types.CHANGE_PAGE,
  payload: curPage
})
