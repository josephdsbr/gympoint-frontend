import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  top: 0;
`;

export const Content = styled.div`
  height: 8vh;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    margin-right: 20px;
    a {
      img {
        max-width: 160px;
        max-height: 160px;
      }
    }
  }
`;

export const Menu = styled.div`
  padding-left: 20px;
  border-left: 1px solid rgba(151, 151, 151, 0.6);

  a {
    margin: 0 8px;
    font-weight: 700;
    color: #444444;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  h1 {
    color: #666666;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  a {
    font-size: 0.6rem;
    color: #de3b3b;
  }
`;
