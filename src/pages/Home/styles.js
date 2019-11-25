import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: #fff;
  border: 1px solid #979797;
  border-radius: 4px;
  padding: 35px;
  height: 60%;
  min-height: 400px;
  width: 25%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  form {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    span {
      margin-top: -15px;
      color: #ee4d64;
    }

    label {
      padding: 6px 0;
      font-weight: 700;
      font-size: 1rem;
      color: #444444;
      margin-bottom: 2px;
    }

    input {
      padding-left: 10px;
      height: 2.5rem;
      border: 1px solid rgba(151, 151, 151, 0.6);
      border-radius: 4px;
      margin-bottom: 15px;
    }

    button {
      margin-top: 10px;
      background: #ee4d64;
      color: #fff;
      font-weight: 700;
      font-size: 1.1rem;
      height: 2.5rem;
      transition: background 0.2s;
      border: none;
      border-radius: 4px;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
