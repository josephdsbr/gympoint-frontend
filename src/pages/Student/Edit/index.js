import React, { useEffect, useState } from 'react';
import { Input, Form } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import history from '~/services/history';
import api from '~/services/api';
import {
  Container,
  Content,
  FormHeader,
  FormBody,
  Option,
  Info,
} from './styles';

export default function StudentEdit({ location }) {
  const [data, setData] = useState({});
  const [id, setId] = useState();

  useEffect(() => {
    const { id: studentId } = location.state;

    async function getStudent(studentId) {
      const response = await api.get(`/students/${studentId}`);
      setId(id);
      setData(response.data);
    }

    getStudent(studentId);
  }, []);

  function onHandleBack() {
    history.goBack();
  }

  async function onHandleSubmit({ name, email, age, weight, height }) {
    try {
      const response = await api.put('/students', {
        id,
        name,
        email,
        age,
        weight,
        height,
      });
      history.push('/history-list');
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  }

  return (
    <Container>
      <Content>
        <Form initialData={data} onSubmit={onHandleSubmit}>
          <FormHeader>
            <h1>Student Edit</h1>
            <aside>
              <button type="button" className="back" onClick={onHandleBack}>
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

StudentEdit.propTypes = {
  location: PropTypes.object,
};
