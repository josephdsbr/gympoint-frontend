import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HelpAnswer from '~/pages/Help/Answer';

import {
  Container,
  Content,
  Wrapper,
  Title,
  ContentBody,
  StudentInfo,
} from './styles';

import api from '~/services/api';

export default function HelpList() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState({ question: '' });
  const [close, setClose] = useState(true);

  useEffect(() => {
    async function loadStudent() {
      const response = await api.get('/help-others-not-answer');
      setData(response.data);
    }

    loadStudent();
  }, []);

  async function handleQuestionAnswer(id) {
    const response = await api.get(`/help-others/${id}/info`);
    setInfo(response.data);
    setClose(false);
  }

  return (
    <Container>
      <Wrapper>
        <Title>Pedidos de Auxílio</Title>
        <Content>
          <HelpAnswer info={info} disabled={close} />
          <ContentBody>
            <h2>Student</h2>
            {data.map(request => (
              <StudentInfo key={request.id}>
                <p>{request.student.name}</p>
                <button
                  type="button"
                  onClick={() => handleQuestionAnswer(request.id)}
                >
                  Answer
                </button>
              </StudentInfo>
            ))}
          </ContentBody>
        </Content>
      </Wrapper>
    </Container>
  );
}
