import styled from 'styled-components';

export const Container = styled.div`
  height: 93vh;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 60%;
  height: 80%;
  display: flex;
  flex-direction: column;
  padding: 1%;
`;

export const Title = styled.h1`
  color: #444444;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  background: #ffffff;
  width: 100%;
  padding: 4%;

  border-radius: 10px;
`;

export const ContentBody = styled.div`
  h2 {
    color: #444444;
    margin-bottom: 1rem;
  }
`;

export const StudentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eeeeee;

  p {
    color: #666666;
    font-size: 1rem;
  }

  button {
    border: none;
    background: none;
    color: #4d85ee;
  }
`;
