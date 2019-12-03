import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DatePicker from '~/Components/DatePicker';
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

export default function EnrollmentRegister() {
  const [startDate, setStartDate] = useState(new Date());
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState({});

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');
      setPlans(response.data);
    }

    loadPlans();
  }, []);

  async function handleChange(selectedOption) {
    const response = await api.get(`/plans/${selectedOption.target.value}`);
    setSelectedPlan(response.data);
  }

  function handleBack() {
    history.goBack();
  }

  const price = useMemo(
    () => (selectedPlan.id ? selectedPlan.duration * selectedPlan.price : 0),
    [selectedPlan]
  );

  const finalDate = useMemo(() => {
    if (selectedPlan.id) {
      const d = new Date(startDate.getTime());
      const e = selectedPlan.id
        ? new Date(d.setMonth(d.getMonth() + selectedPlan.duration))
        : d;
      return format(e, 'MM/dd/yyyy');
    }
  }, [selectedPlan, startDate]);

  return (
    <Container>
      <Content>
        <Form>
          <FormHeader>
            <h1>Enrollment Register</h1>
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
              <label htmlFor="name">STUDENT NAME</label>
              <Input name="name" placeholder="John Doe" />
            </Option>
            <Info>
              <Option>
                <label htmlFor="plan">PLAN</label>
                <Select
                  placeholder="Choose your plan"
                  name="plan"
                  onChange={e => handleChange(e)}
                  options={plans.map(x => ({ id: x.id, title: x.title }))}
                />
              </Option>
              <Option>
                <label htmlFor="start_date">START DATE</label>
                <DatePicker
                  name="start_date"
                  value={startDate}
                  setStartDate={setStartDate}
                />
              </Option>
              <Option>
                <label htmlFor="end_date">END DATE</label>
                <Input name="end_date" value={finalDate} disabled />
              </Option>
              <Option>
                <label htmlFor="final_value">FINAL VALUE</label>
                <Input name="final_value" value={price} disabled />
              </Option>
            </Info>
          </FormBody>
        </Form>
      </Content>
    </Container>
  );
}
