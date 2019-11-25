import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import StudentList from '~/pages/StudentList';
import PlanList from '~/pages/PlanList';
import StudentRegister from '~/pages/StudentRegister';
import EnrollmentList from '~/pages/EnrollmentList';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/student-list" exact component={StudentList} isPrivate />
      <Route path="/plan-list" exact component={PlanList} isPrivate />
      <Route
        path="/enrollment-list"
        exact
        component={EnrollmentList}
        isPrivate
      />
      <Route
        path="/student-register"
        exact
        component={StudentRegister}
        isPrivate
      />
    </Switch>
  );
}
