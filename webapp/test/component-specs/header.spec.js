/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme'; // look into enzyme-chai
import { Header } from '../../src/components';

describe('Header Component', () => {
  it('Should render a title with the name of the app', () => {
    expect(shallow(<Header />).contains(<h1>My Favourite Wine</h1>)).to.equal(true);
  });
});
