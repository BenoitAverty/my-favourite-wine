import React from 'react';

import WineSearch from '../WineSearch';

const RateWineSection = ({ active = false, onSectionSelection = undefined }) => {
  let output;
  if (active) {
    output = (
      <div>
        <h2>Find a Wine</h2>
        <WineSearch />
      </div>
    );
  } else {
    output = (
      <div onClick={onSectionSelection}>
        <h2>Find a Wine</h2>
        <p className="mainPage-action-description">
          Select a wine that you have tasted and give it a grade
        </p>
      </div>
    );
  }
  return output;
};

RateWineSection.propTypes = {
  onSectionSelection: React.PropTypes.func,
  active: React.PropTypes.bool,
};

export default RateWineSection;
