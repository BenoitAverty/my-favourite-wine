/* eslint-env mocha */

import React from 'react';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { WineSearch } from '../../../src/components';
import { searchWine } from '../../../src/actions';

// import the internal "dumb" component
import RateWineSection from '../../../src/components/RateWineSection/internal-component';

// import the mappings for this component
import { mapStateToProps, mapDispatchToProps }
from '../../../src/components/RateWineSection/redux-mapping';

describe('<RateWineSection /> pure component', () => {
  let wrapper;
  let onSectionSelection;

  it('Should render a subtitle displaying the action possible from this section', () => {
    wrapper = shallow(<RateWineSection />);
    expect(wrapper).to.contain(<h2>Find a Wine</h2>);
  });

  describe('When inactive', () => {
    beforeEach(() => {
      onSectionSelection = sinon.spy();
      wrapper = shallow(<RateWineSection onSectionSelection={onSectionSelection} />);
    });

    it('Should contain a description explaining what\'s possible through this action', () => {
      expect(wrapper).to.have.descendants('p.mainPage-action-description');
    });

    it('should fire the onSectionSelection callback when clicked', () => {
      wrapper.find('div').simulate('click');
      expect(onSectionSelection).to.have.been.called; // eslint-disable-line no-unused-expressions
    });
  });

  describe('When active', () => {
    beforeEach(() => {
      onSectionSelection = sinon.spy();
      wrapper = shallow(<RateWineSection active onSectionSelection={onSectionSelection} />);
    });

    it('Should render the WineSearch component', () => {
      expect(wrapper).to.contain(<WineSearch />);
    });
  });
});

describe('RateWineSection mapStateToProps', () => {
  it('Should return active=true when appState=SEARCHING_WINE', () => {
    const { active: actual } = mapStateToProps({ appState: { label: 'SEARCHING_WINE' } });
    const expected = true;

    expect(actual).to.equal(expected);
  });

  it('Should return active=false when appState!=SEARCHING_WINE', () => {
    const { active: actual } = mapStateToProps({ appState: { label: 'MAIN_PAGE' } });
    const expected = false;

    expect(actual).to.equal(expected);
  });
});

describe('RateWineSection mapDispatchToProps', () => {
  it('Should dispatch searchWine action through "onSectionSelection"', () => {
    const dispatch = sinon.spy();
    const expected = searchWine();
    mapDispatchToProps(dispatch).onSectionSelection();

    expect(dispatch).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
    expect(dispatch).to.have.been.calledWith(expected);
  });
});
