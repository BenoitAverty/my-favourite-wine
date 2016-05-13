import { SEARCH_WINE } from '../../actions';

const initialState = {
  label: 'MAIN_PAGE',
};

const appStateReducer = (appState = initialState, action) => {
  switch (action.type) {
    case SEARCH_WINE:
      return { label: 'SEARCHING_WINE' };
    default:
      return appState;
  }
};

export default appStateReducer;
