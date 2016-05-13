import { searchWine } from '../../actions';

export const mapDispatchToProps = (dispatch) => ({
  onSectionSelection: (e) => {
    if (typeof e !== 'undefined') {
      e.preventDefault();
    }
    console.log('fired');

    dispatch(searchWine());
  },
});

export const mapStateToProps = (state) => ({
  active: state.appState.label === 'SEARCHING_WINE',
});
