import React, { memo } from 'react';
import styled from 'styled-components';
import LogoImage from '../../images/logo.svg';
// import PropTypes from 'prop-types';

const LogoStyled = styled.div`
  width: 200px;
  height: auto;
  padding: 20px 25px;

  & img {
    width: 100%;
    height: auto;
  }
`;

function Logo() {
  return (
    <LogoStyled>
      <img src={LogoImage} alt="company-logo" />
    </LogoStyled>
  );
}

Logo.propTypes = {};

export default memo(Logo);
