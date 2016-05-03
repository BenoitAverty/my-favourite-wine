import React from 'react';


export const App = ({ greeting }) =>
  <h1>
    Hello, {greeting}?
  </h1>;

App.propTypes = {
  greeting: React.PropTypes.string.isRequired,
};
