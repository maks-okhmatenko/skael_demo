import produce from 'immer';
import {
  GET_PROJECTS_LIST,
  GET_PROJECTS_LIST_SUCCESS,
  GET_PROJECTS_LIST_ERROR,
} from './constants';

// The initial state of the App
export const initialState = {
  // different page states
  loading: false,
  error: null,

  // list of available projects
  projects: [],
};

/* eslint-disable default-case, no-param-reassign */
const ProjectsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case GET_PROJECTS_LIST:
        draft.loading = true;
        draft.error = false;
        break;

      case GET_PROJECTS_LIST_SUCCESS:
        draft.projects = action.payload.projects;
        draft.loading = false;
        break;

      case GET_PROJECTS_LIST_ERROR:
        draft.error = action.payload.error;
        draft.loading = false;
        break;
    }
  });

export default ProjectsReducer;
