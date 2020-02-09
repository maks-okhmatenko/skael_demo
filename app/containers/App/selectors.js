/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const selectModals = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.modals,
  );

export { selectGlobal, selectRouter, selectModals };
