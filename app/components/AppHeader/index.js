import React from 'react';
import styled from 'styled-components';
import { Layout, Avatar, Icon } from 'antd';

const { Header } = Layout;

const HeaderStyles = {
  background: '#fff',
  padding: '15px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
};

const AvatarStyled = styled.div`
  justify-content: center;
`;

const AppHeader = () => (
  <Header style={HeaderStyles}>
    <AvatarStyled>
      <Avatar icon={<Icon type="user" />} />
    </AvatarStyled>
  </Header>
);

AppHeader.propTypes = {};

export default AppHeader;
