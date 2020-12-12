import { Route, Switch } from "react-router";
import { observer } from "mobx-react";
//stores
import randomStore from "../stores/randomStore";
import treasureStore from "../stores/treasureStore";
// Components
import Home from "./Home";
import TreasureList from "./TreasureList";
import RandomList from "./RandomList";

const Routes = () => {
  return (
    <Switch>
      <Route path="/treasure">
        <TreasureList things={treasureStore.treasurs} />
      </Route>
      <Route path="/random">
        <RandomList things={randomStore.randoms} />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
};

export default observer(Routes);
