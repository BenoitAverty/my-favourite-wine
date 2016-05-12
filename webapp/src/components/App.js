import React from 'react';
import { Provider } from 'react-redux';

import { Header, RateWineSection } from '.';
import configureStore from '../store';

const store = configureStore();

export const App = () =>
  <Provider store={store}>
    <Header />
    <RateWineSection />
  </Provider>;
