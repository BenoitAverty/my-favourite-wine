/* eslint-env mocha */

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { RateWineSection } from '../../../src/components';
import configureMockStore from 'redux-mock-store';
import * as actions from '../../../src/actions';

describe('<RateWineSection>', () => {
  let mockStore;
  beforeEach(() => {
    mockStore = configureMockStore()({});
  });

  it('Should render a subtitle displaying the action possible from this section', () => {
    const wrapper = shallow(<RateWineSection store={mockStore} />).shallow();
    expect(wrapper).to.have.descendants('h2');
    expect(wrapper.find('h2')).to.have.text('Find a Wine');
  });

  it('Should contain a description explaining what\'s possible through this action', () => {
    const wrapper = shallow(<RateWineSection store={mockStore} />).shallow();
    expect(wrapper).to.have.descendants('p.mainPage-action-description');
  });

  it('should fire fire a "searchWine" action when clicked', () => {
    const wrapper = shallow(<RateWineSection store={mockStore} />).shallow();
    wrapper.find('a').simulate('click');
    expect(mockStore.getActions()).to.include({ type: actions.SEARCH_WINE });
  });
});
