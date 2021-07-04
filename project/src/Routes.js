import {Switch, Route} from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Plan from "./Components/Plan";

export default function Routes() {
  return (
    <>
    <Switch>
      <Route exact path="/">
        <Nav />
        <Home/>
        <Footer/>
      </Route>
      <Route exact path="/plan">
      <Nav />
        <Plan/>
        <Footer/>
      </Route>
      <Route exact path="/stay">
      <Nav />
        <Home/>
        <Footer/>
      </Route>
      <Route exact path="/places">
      <Nav />
        <Home/>
        <Footer/>
      </Route>
      <Route exact path="/experience">
      <Nav />
        <Home/>
        <Footer/>
      </Route>
      <Route exact path="/contact">
      <Nav />
        <Home/>
        <Footer/>
      </Route>

    </Switch>
    </>
  )
};
