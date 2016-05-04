import React from 'react';


export const App = ({ greeting }) =>
  <h3>
    Hello, {greeting}?
  </h3>;

App.propTypes = {
  greeting: React.PropTypes.string.isRequired,
};
