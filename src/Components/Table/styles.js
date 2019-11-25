import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  height: 80%;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5%;

    h1 {
      color: #444444;
    }

    aside {
      button {
        background: #ee4d64;
        border: none;
        padding: 10px;
        color: #ffffff;
        font-weight: 700;
        border-radius: 4px;
        margin-right: 20px;
      }
      input {
        padding: 10px;
        border: none;
        border-radius: 4px;
      }
    }
  }

  table,
  th,
  td {
    text-align: left;
  }

  table {
    width: 100%;
    background: #ffffff;
    padding: 25px;
    border: none;
    border-radius: 10px;
    tr {
      border-bottom: 1px solid rgba(151, 151, 151, 0.6);
      td {
        padding: 4px 0;
      }

      .edit {
        width: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        button {
          border: none;
        }

        .change {
          color: #4d85ee;
          background: none;
          margin-right: 20px;
        }

        .clean {
          background: none;
          color: #de3b3b;
        }
      }
    }
  }
`;
