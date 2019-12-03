import React, { useEffect, useState } from 'react';

import { Input, Form } from '@rocketseat/unform';
import api from '~/services/api';
import {
  Container,
  Content,
  FormHeader,
  FormBody,
  Option,
  Info,
} from './styles';

import history from '~/services/history';

export default function PlanEdit({ location }) {
  const [data, setData] = useState({});
  const [id, setId] = useState();
  const [durationValue, setDurationValue] = useState(0);
  const [priceValue, setPriceValue] = useState(0);

  useEffect(() => {
    const { id } = location.state;

    async function getPlan(planId) {
      const response = await api.get(`/plans/${planId}`);
      const { title, duration, price } = response.data;
      setId(id);
      setPriceValue(price);
      setDurationValue(duration);
      setData({ title, duration, price, total_price: price * duration });
    }

    getPlan(id);
  }, []);

  async function onHandleSubmit({ title, duration, price }) {
    try {
      const response = await api.put(`/plans/${id}`, {
        title,
        duration,
        price,
      });
    } catch (err) {
      console.log(`ERROR: ${err}`);
    }
  }

  async function onHandleBack() {
    history.goBack();
  }

  return (
    <Container>
      <Content>
        <Form initialData={data} onSubmit={onHandleSubmit}>
          <FormHeader>
            <h1>Plan Edit</h1>
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
              <label htmlFor="title">PLAN TITLE</label>
              <Input name="title" placeholder="Gold State" />
            </Option>
            <Info>
              <Option>
                <label htmlFor="duration">DURATION(IN MONTHS)</label>
                <Input
                  name="duration"
                  placeholder="6"
                  onChange={e => setDurationValue(e.target.value)}
                />
              </Option>
              <Option>
                <label htmlFor="price">MONTHLY PRICE</label>
                <Input
                  name="price"
                  placeholder="R$89,00"
                  onChange={e => setPriceValue(e.target.value)}
                />
              </Option>
              <Option>
                <label htmlFor="total_price">TOTAL PRICE</label>
                <Input
                  name="total_price"
                  value={`R$ ${priceValue * durationValue}`}
                  placeholder="R$ 534,00"
                  disabled
                />
              </Option>
            </Info>
          </FormBody>
        </Form>
      </Content>
    </Container>
  );
}
