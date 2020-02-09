import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFoundPage from '../../pages/NotFoundPage';
import ProjectsOverview from '../../pages/Overview/Projects/loadable';
import ProjectDetails from '../../pages/Overview/ProjectDetails';
import MetricsOverView from '../../pages/Overview/Metrics';
import DataFlowTrigger from '../../pages/DataFlow/Trigger';
import DataFlowAction from '../../pages/DataFlow/Action';
import DataFlowOutput from '../../pages/DataFlow/Output';

import { Container } from './styles';

/* eslint-disable */
const Router = () => {
  return (
    <Container>
      <Switch>
        {/*Project related routes*/}
        <Route exact path="/overview/projects"            component={ProjectsOverview} />
        <Route exact path="/overview/projects/:projectId" component={ProjectDetails} />

        {/*Metrics related routes*/}
        <Route exact path="/overview/metrics"             component={MetricsOverView} />

        {/*DataFlow related routes*/}
        <Route exact path="/dataflow/trigger/:projectId"  component={DataFlowTrigger} />
        <Route exact path="/dataflow/action/:projectId"   component={DataFlowAction} />
        <Route exact path="/dataflow/output/:projectId"   component={DataFlowOutput} />

        {/*If no routes matched, we show 404 page*/}
        <Route path="" component={NotFoundPage} />
      </Switch>
    </Container>
  )

};
/* eslint-enable */

export default Router;
