import React, { FC, StrictMode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CssBaseline } from '@material-ui/core'

import Example from "./views/Example";

export const App: FC = () => {
  return (
    <StrictMode>
      <Router>
        <Switch>
          <Route path="/">
            <Example />
          </Route>
        </Switch>
      </Router>
    </StrictMode>
  );
};

export default App