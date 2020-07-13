import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import AppHeader from "./components/front/Header";
import { routes } from './providers/routes';

function App() {

  return (
    <>
      <Router>
        <AppHeader />
        {routes.map(({ path, title, Component }) => (
          <Route exact
            path={path} 
            key={path} >
              <section className="page-content">
                <Component title={title}/>
              </section>
          </Route>
        ))}
      </Router>
    </>
  );
}

export default App;
