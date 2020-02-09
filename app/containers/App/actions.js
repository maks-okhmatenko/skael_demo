/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import { SHOW_MODAL, HIDE_MODAL, HIDE_ALL_MODALS } from './constants';

export const showModal = (id, props) => ({
  type: SHOW_MODAL,
  payload: { type: id, props },
});

export const hideModal = (id = '') => ({
  type: HIDE_MODAL,
  payload: { id },
});

export const hideAllModals = () => ({
  type: HIDE_ALL_MODALS,
});
