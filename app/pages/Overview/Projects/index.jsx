import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import NewProject from './components/NewProject';
import ProjectsList from './components/ProjectsList';
import reducer from './reducer';
import saga from './saga';

import { useInjectReducer } from '../../../utils/injectReducer';
import { useInjectSaga } from '../../../utils/injectSaga';

import { showModal, hideAllModals } from '../../../containers/App/actions';
import { getProjectsList } from './actions';

import { selectProjectsList } from './selectors';
import { Container } from './styles';

const ProjectsPage = ({ projects, getProjects, newProject }) => {
  useInjectReducer({ key: 'projects', reducer });
  useInjectSaga({ key: 'projects', saga });

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <Container>
      <NewProject onClick={newProject} />
      <ProjectsList projects={projects} />
    </Container>
  );
};

ProjectsPage.propTypes = {
  projects: PropTypes.array,
  getProjects: PropTypes.func,
  newProject: PropTypes.func,
};

ProjectsPage.defaultProps = {
  projects: [],
  getProjects: () => {},
  newProject: () => {},
};

const mapStateToProps = createStructuredSelector({
  projects: selectProjectsList(),
});

const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjectsList()),
  newProject: () => {
    const modalProps = {
      onSubmit: () => dispatch(hideAllModals()),
      onCancel: () => dispatch(hideAllModals()),
    };

    return dispatch(showModal('PROJECT_CREATE_MODAL', modalProps));
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ProjectsPage);
