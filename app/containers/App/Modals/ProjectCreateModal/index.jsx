import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal } from 'antd';

const ProjectCreateModal = ({ onSubmit, onCancel }) => {
  const footer = [
    <Button key="back" onClick={onCancel}>Return</Button>,
    <Button key="submit" type="primary" onClick={onSubmit}>
      Submit
    </Button>,
  ];

  return (
    <Modal
      visible
      title="New Project"
      onOk={onSubmit}
      onCancel={onCancel}
      footer={footer}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

ProjectCreateModal.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

ProjectCreateModal.defaultProps = {
  onSubmit: () => {},
  onCancel: () => {},
};

export default ProjectCreateModal;
