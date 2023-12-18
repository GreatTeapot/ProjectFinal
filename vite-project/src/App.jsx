import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { router } from './app/index.js';

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
        {renderRoutes(router)}
        <Route path="/" element={<MainNewUserPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="logout" element={<LogOutPage />} />
        <Route path="/authuser" element={<MainOurUserPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Switch>
    </Router>
  );
};

export default App;
