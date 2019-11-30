import styled from 'styled-components';

export const Container = styled.div`
  height: 93vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

export const FormHeader = styled.header`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: #444444;
  }

  button {
    padding: 8px 20px;
    border: none;
    font-weight: 700;
    color: white;
    border-radius: 10px;
  }

  .back {
    background-color: #707070;
    margin-right: 5px;
  }

  .save {
    background-color: #ee4d64;
    margin-left: 5px;
  }
`;

export const FormBody = styled.div`
  background-color: white;
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 10px;

  display: flex;
  flex-direction: column;

  label {
    font-weight: 700;
    color: #444444;
  }

  input {
    width: 100%;
    margin: 10px 0;
    border: 1px solid #dddddd;
    padding: 7px;
    border-radius: 4px;
  }
`;

export const Info = styled.div`
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  div {
    width: auto !important;
  }
`;

export const Option = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
