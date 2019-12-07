import React, { useState, useMemo, useEffect } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import { format, parseISO } from 'date-fns';
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

export default function EnrollmentEdit({ location }) {
  const [startDate, setStartDate] = useState(new Date());
  const [plans, setPlans] = useState([]);
  const [data, setData] = useState();
  const [name, setName] = useState('');
  const [selectedPlan, setSelectedPlan] = useState({});
  const [planSelected, setPlanSelected] = useState();

  useEffect(() => {
    async function loadPlans() {
      const response = await api.get('/plans');
      const dt = response.data;
      setPlans(dt);
    }

    loadPlans();
  }, []);

  useEffect(() => {
    const { id: enrollmentId } = location.state;

    async function getData(enrollmentId) {
      const response = await api.get('/enrollments');
      const dt = response.data[0];

      setStartDate(parseISO(dt.start_date));
      setData(dt);
      setName(dt.student.name);

      const planResponse = await api.get(`/plans/${dt.plan.id}`);
      setSelectedPlan(planResponse.data);
      setPlanSelected(planResponse.data.title);
    }

    getData(enrollmentId);
  }, []);

  async function handleChange(selectedOption) {
    const response = await api.get(`/plans/${selectedOption.target.value}`);
    setSelectedPlan(response.data);
    setPlanSelected(response.data.title);
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

  async function onHandleSubmit({ plan: plan_id, start_date }) {
    const { student, plan, id } = data;

    const body = {
      plan_id: plan_id === '' ? plan.id : plan_id,
      start_date,
      student_id: student.id,
    };

    await api.put(`/enrollments/${id}`, body);
  }

  return (
    <Container>
      <Content>
        <Form onSubmit={onHandleSubmit}>
          <FormHeader>
            <h1>Enrollment Edit</h1>
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
              <Input name="name" placeholder="John Doe" value={name} />
            </Option>
            <Info>
              <Option>
                <label htmlFor="plan">PLAN</label>
                <Select
                  placeholder={planSelected}
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
