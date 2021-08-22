import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../Login";
import "tailwindcss/tailwind.css";
export const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Switch>
          <Route exact component={Login} path="/" />
        </Switch>
      </Router>
    </Suspense>
  );
};
