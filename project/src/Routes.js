import {Switch, Route} from "react-router-dom";

import Home from "./Components/Nav";


export default function Routes() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
     
    </Switch>
    </>
  )
};
