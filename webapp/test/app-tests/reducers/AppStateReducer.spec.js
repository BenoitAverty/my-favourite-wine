/* eslint-env mocha */

import { expect } from 'chai';

import { appStateReducer } from '../../../src/store/reducers';
import { searchWine } from '../../../src/actions';

describe('stateReducer', () => {
  describe('When receiving a searchWine action', () => {
    it('Should return a new state with the label "SEARCHING_WINE"', () => {
      const action = searchWine();
      const actual = appStateReducer({ label: 'MAIN_PAGE' }, action);
      const expected = { label: 'SEARCHING_WINE' };

      expect(actual).to.equal(expected);
    });
  });
});
