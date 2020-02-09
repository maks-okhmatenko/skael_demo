import React from 'react';

import ProjectCreateModal from '../Modals/ProjectCreateModal';
import TaskCreateModal from '../Modals/TaskCreateModal';

const ModalsFactory = {
  PROJECT_CREATE_MODAL: props => (
    <ProjectCreateModal {...props} />
  ),

  TASK_CREATE_MODAL: props => (
    <TaskCreateModal {...props} />
  )
};

export default ModalsFactory;
