import React, { useState, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import { Container, Question, Answer, Content, Header } from './styles';
import api from '~/services/api';

export default function HelpAnswer({ info, show, onHandleClose }) {
  const { question, id } = info;

  async function onHandleSubmit({ answer }) {
    const response = await api.post(`/help-others/${id}/anwser`, { answer });
    onHandleClose();
    window.location.reload();
  }

  return (
    <Container disabled={show}>
      <Content>
        <Question>
          <Header>
            <button type="button" onClick={onHandleClose}>
              <MdClose size={17} color="#777" />
            </button>
            <h1>PERGUNTA DO ALUNO</h1>
          </Header>

          <p>{question}</p>
        </Question>
        <Answer>
          <h1>SUA RESPOSTA</h1>
          <Form onSubmit={onHandleSubmit}>
            <Input name="answer" multiline />
            <button type="submit" onClick={() => console.log('ola')}>
              Answer
            </button>
          </Form>
        </Answer>
      </Content>
    </Container>
  );
}

HelpAnswer.propTypes = {
  info: PropTypes.object,
  onHandleClose: PropTypes.func,
  show: PropTypes.bool,
};
