import { SEARCH_WINE, CHANGE_SEARCH_STRING } from '../../actions';

const initialState = {
  label: 'MAIN_PAGE',
};

const appStateReducer = (appState = initialState, action) => {
  switch (action.type) {
    case SEARCH_WINE:
      return { label: 'SEARCHING_WINE' };
    case CHANGE_SEARCH_STRING:
      return { label: appState.label, searchString: action.newSearchString };
    default:
      return appState;
  }
};

export default appStateReducer;
