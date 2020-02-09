import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 20px;
  width: 100px;
  height: 100px;

  border-width: 1px;
  border-style: dashed;
  border-color: lightgray;
  border-radius: 5px;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #f0f2f5;
  }
`;

export const Text = styled.span`
  font-size: 14px;
`;
