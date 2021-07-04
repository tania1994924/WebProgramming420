import {Switch, Route} from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";

export default function Routes() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Nav />
        <Home/>
        <Footer/>
      </Route>
     
    </Switch>
    </>
  )
};
