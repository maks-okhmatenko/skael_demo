import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import { Container, Text } from './styles';

const Index = ({ onClick }) => (
  <Container onClick={onClick}>
    <Icon type="plus" style={{ fontSize: '20px' }} />
    <Text>New</Text>
  </Container>
);

Index.propTypes = {
  onClick: PropTypes.func,
};

Index.defaultPrps = {
  onClick: () => {},
};

export default Index;
