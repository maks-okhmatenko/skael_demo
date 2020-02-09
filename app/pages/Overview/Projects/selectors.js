import { createSelector } from 'reselect';
import { initialState } from './reducer';

export const selectProjectsDomain = state => state.projects || initialState;

export const selectProjectsList = () =>
  createSelector(
    selectProjectsDomain,
    state => state.projects,
  );
