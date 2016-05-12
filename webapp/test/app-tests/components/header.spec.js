/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { Header } from '../../../src/components';

describe('Header Component', () => {
  it('Should render a title with the name of the app', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).to.have.tagName('h1');
    expect(wrapper.find('h1')).to.have.text('My Favourite Wine');
  });
});
