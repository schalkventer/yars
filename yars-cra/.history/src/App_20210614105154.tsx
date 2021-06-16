import React, { FC, StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Basic from "./views/Basic";

export const App: FC = () => {
  return (
    <StrictMode>
      <Base>
        <Router>
          <Switch>
            <Route path="/">
              <Basic />
            </Route>
          </Switch>
        </Router>
      </Base>
    </StrictMode>
  );
};

export default App