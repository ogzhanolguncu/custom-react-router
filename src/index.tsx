import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider } from './router/RouterContext';
import { Link } from './router/Link';
import { Route } from './router/Route';
import { routes } from './routes';

import './styles.css';

function App() {
  return (
    <RouterProvider routeList={routes}>
      <Route path={routes.home.path}>
        <p>Homepage</p>
        <Link to={routes.about.path}>Go to about</Link>
      </Route>

      <Route path={routes.about.path}>
        <p>About</p>
        <Link to={routes.home.path}>Go to home</Link>
      </Route>
    </RouterProvider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
