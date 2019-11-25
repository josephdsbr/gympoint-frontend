import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import Table from '~/Components/Table';
import api from '~/services/api';

export default function StudentList() {
  const [title, setTitle] = useState('Gerenciando Alunos');
  const [column, setColumn] = useState(['NAME', 'EMAIL', 'IDADE']);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getStudentData() {
      const response = await api.get('/students');
      const students = response.data.map(x => ({
        name: x.name,
        email: x.email,
        age: x.age,
      }));

      setData(students);
    }

    getStudentData();
  }, []);

  return (
    <Container>
      <Table
        title={title}
        columns={column}
        data={data}
        description="Find a student"
        url="/student-register"
      />
    </Container>
  );
}
