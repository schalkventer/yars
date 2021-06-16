import React, { FC, StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Base from "./components/Base";

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