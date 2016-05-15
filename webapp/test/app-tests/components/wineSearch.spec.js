/* eslint-env mocha */

import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import WineSearch from '../../../src/components/WineSearch';

// import the mappings for this component
describe('<WineSearch /> pure component', () => {
  let wrapper;

  describe('With no search string', () => {
    beforeEach(() => {
      wrapper = shallow(<WineSearch searchString="" />);
    });

    it('Should render an empty field', () => {
      expect(wrapper).to.have.descendants('input[type="text"]');
      expect(wrapper.find('input[type="text"]').value).to.be.empty; // eslint-disable-line
    });
  });
});
