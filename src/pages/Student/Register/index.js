import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import {
  Container,
  Content,
  Info,
  Option,
  FormHeader,
  FormBody,
} from './styles';
import api from '~/services/api';
import history from '~/services/history';

export default function StudentRegister() {
  async function handleSubmit(
    { name, email, age, weight, height },
    { resetForm }
  ) {
    try {
      await api.post('/students', {
        name,
        email,
        age,
        weight,
        height,
      });

      toast(`Student: ${name} was registered with email: ${email}`);

      history.push('/student-list');
    } catch (err) {
      toast.error('An error ocurred, please try again');
    }
  }

  function handleBack() {
    history.push('student-list');
  }
  return (
    <Container>
      <Content>
        <Form onSubmit={handleSubmit}>
          <FormHeader>
            <h1>Student Register</h1>
            <aside>
              <button type="button" className="back" onClick={handleBack}>
                BACK
              </button>
              <button type="submit" className="save">
                SAVE
              </button>
            </aside>
          </FormHeader>
          <FormBody>
            <Option>
              <label htmlFor="name">FULL NAME</label>
              <Input name="name" placeholder="John Doe" />
            </Option>
            <Option>
              <label htmlFor="email">EMAIL</label>
              <Input
                name="email"
                type="email"
                placeholder="example@email.com"
              />
            </Option>
            <Info>
              <Option>
                <label htmlFor="age">AGE</label>
                <Input name="age" placeholder="21" />
              </Option>
              <Option>
                <label htmlFor="weight">WEIGHT (KG)</label>
                <Input name="weight" placeholder="81" />
              </Option>
              <Option>
                <label htmlFor="height">HEIGHT (CM)</label>
                <Input name="height" placeholder="175" />
              </Option>
            </Info>
          </FormBody>
        </Form>
      </Content>
    </Container>
  );
}
