import React from 'react';
import { Button, Modal } from 'antd';

const TaskCreateModal = (props) => (
  <Modal
    visible
    title="Title"
    footer={[
      <Button key="back">Return</Button>,
      <Button key="submit" type="primary">
        Submit
      </Button>,
    ]}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
);

export default TaskCreateModal;
