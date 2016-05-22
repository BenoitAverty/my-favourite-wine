import React from 'react';

import WineSearchResult from '../WineSearchResult';

const WineSearch = ({ searchString, onSearchStringChanged }) => {
  const handleChange = event => onSearchStringChanged(event.target.value);

  return (
    <div>
      <input type="text" value={searchString} onChange={handleChange} />
      <WineSearchResult />
    </div>
  );
};

WineSearch.propTypes = {
  searchString: React.PropTypes.string,
  onSearchStringChanged: React.PropTypes.function,
};

export default WineSearch;
