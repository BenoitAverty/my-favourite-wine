import { combineReducers } from 'redux';
import appState from './appStateReducer';

// Shape of the global state:
// {
//   appState: {
//     label,
//     (optional props of the state),
//   },
//   wines: [
//     {
//       label,
//       domain,
//       designation,
//       varietal: [],
//       tasting: { date, grade (1 to 5) }
//     },
//     ...
//   ]
// }

export default combineReducers({
  appState,
});
