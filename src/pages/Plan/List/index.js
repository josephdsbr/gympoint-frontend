import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Table from '~/Components/Table';
import api from '~/services/api';

export default function PlanList() {
  const [title, setTitle] = useState('Gerenciando Alunos');
  const [column, setColumn] = useState([
    'TITLE',
    'DURATION',
    'VALUE PER MONTH',
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getPlanData() {
      const response = await api.get('/plans');
      const plans = response.data.map(x => ({
        id: x.id,
        name: x.title,
        email: `${x.duration} ${x.duration === 1 ? 'month' : 'months'}`,
        age: x.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      }));

      setData(plans);
    }

    getPlanData();
  }, []);

  return (
    <Container>
      <Table
        title={title}
        columns={column}
        data={data}
        description="Find a plan"
        url="/plan-register"
        save="/plan-edit"
      />
    </Container>
  );
}
