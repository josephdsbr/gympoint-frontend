import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, Menu, Profile } from './styles';
import LogoDefault from '~/static/logo-default.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/student-list">
            <img src={LogoDefault} alt="" />
          </Link>
        </nav>
        <Menu>
          <Link to="/student-list">ALUNOS</Link>
          <Link to="/plan-list">PLANOS</Link>
          <Link to="/enrollment-list">MATRÍCULAS</Link>
          <Link to="/">PEDIDOS DE AUXÍLIO</Link>
        </Menu>
      </Content>

      <Profile>
        <h1>José Vinícius</h1>
        <Link to="logout">Sair do Sistema</Link>
      </Profile>
    </Container>
  );
}
