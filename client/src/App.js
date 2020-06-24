import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import AppHeader from "./components/Header";
import { routes } from './providers/routes';
import { AppProvider } from "./context/App";

function App() {
  
  return (
    <>
      <Router>
        <AppProvider>
          <AppHeader />
        </AppProvider>
        {routes.map(({ path, title, Component }) => (
          <Route exact
            path={path} 
            key={path} >
              <Component title={title}/>
          </Route>
        ))}
      </Router>
    </>
  );
}

export default App;
