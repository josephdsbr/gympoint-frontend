import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${props =>
    props.disabled
      ? css`
          display: none;
        `
      : css`
          display: flex;
        `}
  position: absolute;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    order: 0;
  }

  button {
    order: 1;
    background: none;
    border: none;
  }
`;

export const Button = styled.button``;

export const Content = styled.div`
  background: rgba(255, 255, 255);
  width: 25%;
  padding: 1%;
  border-radius: 4px;
`;

export const Question = styled.div`
  h1 {
    color: #444444;
    font-size: 0.9em;
    margin-bottom: 1%;
  }

  p {
    color: #666666;
    font-size: 1em;
  }
`;

export const Answer = styled.div`
  h1 {
    font-size: 0.9em;
    color: #444444;
    margin: 4% 0 1% 0;
  }

  form {
    display: flex;
    flex-direction: column;

    textarea {
      min-height: 100px;
      max-height: 120px;
      border: 0.5px solid #dddddd;
      border-radius: 5px;
      padding: 7px;
      margin-bottom: 10px;
    }

    button {
      border: none;
      border-radius: 4px;
      padding: 5px;
      background: #ee4d64;
      color: #ffffff;
    }
  }
`;
