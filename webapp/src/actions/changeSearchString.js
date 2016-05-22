export const CHANGE_SEARCH_STRING = 'CHANGE_SEARCH_STRING';

export const changeSearchString = (newSearchString) => ({
  type: CHANGE_SEARCH_STRING,
  newSearchString,
});
