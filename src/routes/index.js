import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import StudentList from '~/pages/Student/List';
import PlanList from '~/pages/Plan/List';
import PlanEdit from '~/pages/Plan/Edit';
import StudentRegister from '~/pages/Student/Register';
import EnrollmentList from '~/pages/EnrollmentList';
import StudentEdit from '~/pages/Student/Edit';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/student-list" exact component={StudentList} isPrivate />
      <Route path="/plan-list" exact component={PlanList} isPrivate />
      <Route path="/plan-edit" exact component={PlanEdit} isPrivate />
      <Route path="/student-edit" exact component={StudentEdit} isPrivate />
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
