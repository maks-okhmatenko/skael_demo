import { SHOW_MODAL, HIDE_MODAL } from '../constants';

import { showModal, hideModal } from '../actions';

describe('App Actions', () => {
  describe('showModal', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: SHOW_MODAL,
        payload: { type: 'PROJECT_CREATE_MODAL' },
      };

      expect(showModal('PROJECT_CREATE_MODAL')).toEqual(expectedResult);
    });
  });

  describe('hideModal', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: HIDE_MODAL,
        payload: { id: '' },
      };

      expect(hideModal()).toEqual(expectedResult);
    });
  });
});
