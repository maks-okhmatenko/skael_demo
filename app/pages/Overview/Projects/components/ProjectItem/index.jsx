import React from 'react';
import PropTypes from 'prop-types';
import { Container, ImageWrap, Image, TextWrap, TextRow } from './styles';

const ProjectItem = ({ title, dateModified, onClick }) => (
  <Container onClick={onClick}>
    <ImageWrap>
      <Image src="http://placekitten.com/100/100" />
    </ImageWrap>

    <TextWrap>
      <TextRow>
        <span>Name:</span>
        <span>{title}</span>
      </TextRow>

      <TextRow>
        <span>Modified:</span>
        <span>{dateModified}</span>
      </TextRow>
    </TextWrap>
  </Container>
);

ProjectItem.propTypes = {
  title: PropTypes.string,
  dateModified: PropTypes.string,
  onClick: PropTypes.func,
};

ProjectItem.defaultProps = {
  title: '',
  dateModified: 'N/A',
  onClick: () => {},
};

export default ProjectItem;
