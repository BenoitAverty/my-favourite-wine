import React from 'react';


export const App = ({ greeting }) =>
  <h2>
    Hello, {greeting}?
  </h2>;

App.propTypes = {
  greeting: React.PropTypes.string.isRequired,
};
