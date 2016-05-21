/* eslint-env mocha */

import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import WineSearch from '../../../src/components/WineSearch';

// import the mappings for this component
describe('<WineSearch /> pure component', () => {
  describe('With no search string', () => {
    it('Should render an empty field', () => {
      const wrapper = shallow(<WineSearch searchString="" />);

      expect(wrapper).to.have.descendants('input[type="text"]');
      expect(wrapper.find('input[type="text"]')).to.have.value('');
    });

    it('Should fire the searchStringChanged handler when the search field changes', () => {
      const newFieldValue = 'new field value';
      const handler = sinon.spy();
      const wrapper = shallow(<WineSearch searchString="" onSearchStringChanged={handler} />);

      wrapper.find('input[type="text"]').simulate('change', { target: { value: newFieldValue } });
      expect(handler).to.have.been.calledWith(newFieldValue);
    });
  });

  describe('With a search string', () => {
    it('should render a search field with the searchstring inside it', () => {
      const searchString = 'Chateau la Pompe';
      const wrapper = shallow(<WineSearch searchString={searchString} />);
      expect(wrapper).to.have.descendants('input[type="text"]');
      expect(wrapper.find('input[type="text"]')).to.have.value(searchString);
    });
  });
});
