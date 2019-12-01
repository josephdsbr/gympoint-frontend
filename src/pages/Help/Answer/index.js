import React, { useEffect, useState } from 'react';
import { MdClose } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import { Container, Question, Answer, Content, Button, Header } from './styles';

export default function HelpAnswer({ info, disabled }) {
  const { question } = info;
  const [close, setClose] = useState(!disabled);

  return (
    <Container disabled={close}>
      <Content>
        <Question>
          <Header>
            <Button onClick={() => setClose(true)}>
              <MdClose size={17} color="#777" />
            </Button>
            <h1>PERGUNTA DO ALUNO</h1>
          </Header>

          <p>{question}</p>
        </Question>
        <Answer>
          <h1>SUA RESPOSTA</h1>
          <Form>
            <Input name="answer" multiline />
            <button type="submit">Answer</button>
          </Form>
        </Answer>
      </Content>
    </Container>
  );
}
