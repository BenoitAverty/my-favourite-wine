/* eslint-env mocha */

import { expect } from 'chai';

import appStateReducer from '../../../src/store/reducers/appStateReducer';
import { searchWine } from '../../../src/actions';

describe('stateReducer', () => {
  describe('When receiving a searchWine action', () => {
    it('Should return a new state with the label "SEARCHING_WINE"', () => {
      const action = searchWine();
      const actual = appStateReducer({ label: 'MAIN_PAGE' }, action);
      const expected = { label: 'SEARCHING_WINE' };

      expect(actual).to.deep.equal(expected);
    });
  });

  describe('When receiving an unknown action', () => {
    it('Should return the state passed as parameter', () => {
      const initialState = { label: 'MAIN_PAGE' };
      const actual = appStateReducer(initialState, { type: undefined });

      expect(actual).to.equal(initialState);
    });
  });
});
