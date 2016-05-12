import { SEARCH_WINE } from '../../actions';

const initialState = {
  label: 'MAIN_PAGE',
};

export const appStateReducer = () => (appState = initialState, action) => {
  console.log(`Received action: ${action}. the state is ${appState}`);
  switch (action.type) {
    case SEARCH_WINE:
      return { label: 'SEARCHING_WINE' };
    default:
      return appState;
  }
};
