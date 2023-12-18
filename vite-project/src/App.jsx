import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { router } from '../src/main.jsx';

const App = () => {
  const dispatch = useDispatch();

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

  return (
    <Router>
      <Switch>
        {/* Добавьте ваши другие маршруты здесь */}
        {renderRoutes(router)}
      </Switch>
    </Router>
  );
};

export default App;
