import React from 'react';
import { searchWine } from '../actions';

import { connect } from 'react-redux';

const InternalRateWineSection = ({ onSectionSelection }) =>
  <div>
    <a href="" onClick={onSectionSelection}><h2>Find a Wine</h2></a>
    <p className="mainPage-action-description">
      Select a wine that you have tasted and give it a grade
    </p>
  </div>;

InternalRateWineSection.propTypes = {
  onSectionSelection: 'function',
};

const mapDispatchToProps = (dispatch) => ({
  onSectionSelection: () => {
    console.log('dispatching');
    dispatch(searchWine());
  },
});

export const RateWineSection = connect(null, mapDispatchToProps)(InternalRateWineSection);
