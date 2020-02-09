/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { SHOW_MODAL, HIDE_MODAL, HIDE_ALL_MODALS } from './constants';

// The initial state of the App
export const initialState = {
  modals: [
    // { type: 'MODAL_TYPE', props: { ...modal props here }}
  ],
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SHOW_MODAL:
        const newModal = { ...action.payload };
        draft.modals.push(newModal);
        break;

      case HIDE_MODAL:
        draft.modals.pop();
        break;

      case HIDE_ALL_MODALS:
        draft.modals.length = 0;
        break;
    }
  });

export default appReducer;
