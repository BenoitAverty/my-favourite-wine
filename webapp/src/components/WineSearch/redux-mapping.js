import { changeSearchString } from '../../actions';

export const mapStateToProps = ({ appState }) => ({
  searchString: appState.searchString,
});

export const mapDispatchToProps = (dispatch) => ({
  onSearchStringChanged: (newValue) => dispatch(changeSearchString(newValue)),
});
