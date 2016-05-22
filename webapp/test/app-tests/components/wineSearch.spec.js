/* eslint-env mocha */

import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { WineSearchResult } from '../../../src/components';

import { changeSearchString } from '../../../src/actions';

import WineSearch from '../../../src/components/WineSearch/internal-component';

import { mapStateToProps, mapDispatchToProps }
from '../../../src/components/WineSearch/redux-mapping';

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

    it('Should render a WineSearchResult', () => {
      const wrapper = shallow(<WineSearch searchString="" />);

      expect(wrapper).to.contain(<WineSearchResult />);
    });
  });

  describe('With a search string', () => {
    it('should render a search field with the searchstring inside it', () => {
      const searchString = 'Chateau la Pompe';
      const wrapper = shallow(<WineSearch searchString={searchString} />);

      expect(wrapper).to.have.descendants('input[type="text"]');
      expect(wrapper.find('input[type="text"]')).to.have.value(searchString);
    });

    it('Should render a WineSearchResult', () => {
      const wrapper = shallow(<WineSearch searchString="Test" />);

      expect(wrapper).to.contain(<WineSearchResult />);
    });
  });
});

describe('WineSearch mapStateToProps', () => {
  it('Should map the SearchString in state to searchString prop', () => {
    const state = {
      appState: {
        label: 'SEARCHING_WINE',
        searchString: 'a search string',
      },
    };

    const { searchString: actual } = mapStateToProps(state);

    expect(actual).to.equal('a search string');
  });
});

describe('WineSearch mapDispatchToProps', () => {
  it('Should dispatch "changeSearchString" action through "onSearchStringChanged" prop', () => {
    const dispatch = sinon.spy();
    const expected = changeSearchString('newValue');

    mapDispatchToProps(dispatch).onSearchStringChanged('newValue');

    expect(dispatch).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
    expect(dispatch).to.have.been.calledWith(expected);
  });
});
