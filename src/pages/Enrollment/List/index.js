import React, { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { FaAccusoft } from 'react-icons/fa';
import { Container } from './styles';
import Table from '~/Components/Table';
import api from '~/services/api';

export default function EnrollmentList() {
  const [title, setTitle] = useState('Gerenciando Matrículas');
  const [column, setColumn] = useState([
    'STUDENT',
    'PLAN',
    'START',
    'END',
    'ACTIVE',
  ]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getEnrollmentData() {
      const response = await api.get('/enrollments');

      const plans = response.data.map(x => ({
        id: x.id,
        name: x.student.name,
        plan: x.plan.title,
        start: format(parseISO(x.start_date), "dd'/'mm'/'yyyy"),
        end: format(parseISO(x.end_date), "dd'/'mm'/'yyyy"),
        active: x.active ? 'Yes' : 'Not',
      }));

      setData(plans);
    }

    getEnrollmentData();
  }, []);

  return (
    <Container>
      <Table
        title={title}
        columns={column}
        data={data}
        description="Find a enrollment"
        url="/enrollment-register"
        save="/enrollment-edit"
      />
    </Container>
  );
}
