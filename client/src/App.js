import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import { routes } from './providers/routes';

function App() {
  return (
    <Router>
      {routes.map(({ path, Component }) => (
        <Route exact
          path={path} 
          key={path} >
            <Component />
        </Route>
      ))}
    </Router>
  );
}

export default App;
