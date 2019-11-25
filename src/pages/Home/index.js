import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { Container, Content } from './styles';

import { signInRequest } from '~/store/modules/auth/actions';
import Logo from '~/static/logo.png';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Por favor, informe um e-mail válido')
    .required('Esta informação é obrigatória'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
});

export default function Home() {
  const dispatch = useDispatch();
  async function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <Content>
        <img src={Logo} />
        <Form schema={schema} onSubmit={handleSubmit}>
          <label>SEU E-MAIL</label>
          <Input name="email" type="email" placeholder="exemplo@email.com" />
          <label>SUA SENHA</label>
          <Input name="password" type="password" placeholder="*********" />
          <button type="submit">Entrar no Sistema</button>
        </Form>
      </Content>
    </Container>
  );
}
