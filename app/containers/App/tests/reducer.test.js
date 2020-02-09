import produce from 'immer';

import appReducer from '../reducer';
import { showModal } from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      modals: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the showModal action correctly', () => {
    const modal = {
      type: 'SOME_MODAL',
      props: {},
    };

    const expectedResult = produce(state, draft => {
      draft.modals = [modal];
    });

    expect(appReducer(state, showModal(modal.type, modal.props))).toEqual(
      expectedResult,
    );
  });
});
