import React from 'react';
import { Container, Content } from './styles';
import history from '~/services/history';

export default function Table({ title, columns, data, description, url }) {
  function handleHistory() {
    history.push(url);
  }
  return (
    <Container>
      <header>
        <h1>{title}</h1>
        <aside>
          <button type="button" onClick={handleHistory}>
            CADASTRAR
          </button>
          <input placeholder={description} />
        </aside>
      </header>
      <table>
        <tr>
          {columns.map(column => (
            <th>{column}</th>
          ))}
        </tr>
        {data.map(row => (
          <tr>
            {Object.values(row).map(info => (
              <td>{info}</td>
            ))}
            <td className="edit">
              <button type="button" className="change">
                editar
              </button>
              <button type="button" className="clean">
                apagar
              </button>
            </td>
          </tr>
        ))}
      </table>
    </Container>
  );
}
