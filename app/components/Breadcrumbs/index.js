import React from 'react';
import { Breadcrumb } from 'antd';

function Breadcrumbs() {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  );
}

Breadcrumbs.propTypes = {};

export default Breadcrumbs;
