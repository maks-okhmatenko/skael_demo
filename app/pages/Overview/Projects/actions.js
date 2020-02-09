import {
  GET_PROJECTS_LIST,
  GET_PROJECTS_LIST_SUCCESS,
  GET_PROJECTS_LIST_ERROR,
} from './constants';

export const getProjectsList = () => ({
  type: GET_PROJECTS_LIST,
});

export const getProjectsListSuccess = projects => ({
  type: GET_PROJECTS_LIST_SUCCESS,
  payload: { projects },
});

export const getProjectsListError = error => ({
  type: GET_PROJECTS_LIST_ERROR,
  payload: { error },
});
