// React
import { Route, Switch } from "react-router";
import { observer } from "mobx-react";

// Components
import Home from "./Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
