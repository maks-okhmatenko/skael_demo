import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
`;

export const ImageWrap = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid lightgray;
  overflow: hidden;
  border-radius: 5px;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const TextWrap = styled.div`
  font-size: 12px;
`;

export const TextRow = styled.div`
  & > span:first-child {
    font-weight: bold;
  }
`;
