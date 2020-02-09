import React from 'react';
import PropTypes from 'prop-types';
import ProjectItem from '../ProjectItem';
import { Container, Item } from './styles';

const ProjectsList = props => {
  const { projects, onProjectClick } = props;

  return (
    <Container>
      {projects.map((project, index) => (
        <Item key={index}>
          <ProjectItem {...project} onClick={onProjectClick} />
        </Item>
      ))}
    </Container>
  );
};

ProjectsList.propTypes = {
  projects: PropTypes.array,
  onProjectClick: PropTypes.func,
};

ProjectsList.defaultProps = {
  projects: [],
  onProjectClick: () => {},
};

export default ProjectsList;
