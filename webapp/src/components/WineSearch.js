import React from 'react';

const WineSearch = ({ searchString, onSearchStringChanged }) => {
  const handleChange = event => onSearchStringChanged(event.target.value);

  return (
    <div>
      <input type="text" value={searchString} onChange={handleChange} />;
    </div>
  );
};

WineSearch.propTypes = {
  searchString: React.PropTypes.string,
  onSearchStringChanged: React.PropTypes.function,
};

export default WineSearch;
