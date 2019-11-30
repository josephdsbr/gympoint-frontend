import React, { useState } from 'react';
import { Container, Content } from './styles';
import history from '~/services/history';

export default function Table({
  title,
  columns,
  data,
  description,
  url,
  save,
}) {
  function handleHistory() {
    history.push(url);
  }

  function handleSave(id) {
    history.push(save, { id });
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
            {Object.values(row)
              .slice(1, row.lenght)
              .map(info => (
                <td>{info}</td>
              ))}
            <td className="edit">
              <button
                type="button"
                className="change"
                onClick={() => handleSave(row.id)}
              >
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
