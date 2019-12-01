import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import StudentList from '~/pages/Student/List';
import PlanList from '~/pages/Plan/List';
import PlanEdit from '~/pages/Plan/Edit';
import PlanRegister from '~/pages/Plan/Register';
import StudentRegister from '~/pages/Student/Register';
import EnrollmentList from '~/pages/Enrollment/List';
import EnrollmentRegister from '~/pages/Enrollment/Register';
import StudentEdit from '~/pages/Student/Edit';
import HelpList from '~/pages/Help/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/student-list" exact component={StudentList} isPrivate />
      <Route path="/plan-list" exact component={PlanList} isPrivate />
      <Route path="/plan-edit" exact component={PlanEdit} isPrivate />
      <Route path="/plan-register" exact component={PlanRegister} isPrivate />
      <Route path="/help-list" exact component={HelpList} isPrivate />

      <Route path="/student-edit" exact component={StudentEdit} isPrivate />
      <Route
        path="/enrollment-list"
        exact
        component={EnrollmentList}
        isPrivate
      />
      <Route
        path="/enrollment-register"
        exact
        component={EnrollmentRegister}
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
