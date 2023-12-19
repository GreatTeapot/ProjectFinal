import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {router} from './app/index';

const renderRoutes = (routes) => {
  return routes.map((route) => (
      <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => (
              <route.component {...props} routes={route.routes} />
          )}
      />
  ));
};

const App = () => {
  return (
    <Router>
      <Switch>
        {renderRoutes(router)}
        <Route path="/" component={MainNewUserPage} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/login" component={LogInPage} exact />
        <Route path="/logout" component={LogOutPage} exact />
        <Route path="/authuser" component={MainOurUserPage} exact />
        <Route path="/home" component={HomePage} exact />
        <Route path="/game" component={GamePage} exact />
      </Switch>
    </Router>
  );
};

export default App;
