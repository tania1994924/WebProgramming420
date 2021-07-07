import {Switch, Route} from "react-router-dom";

import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Plan from "./Components/Plan";
import Place from "./Components/Places";
import Experience from "./Components/Experience";
import Gallery from "./Components/Gallery";
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
        <Place/>
        <Footer/>
      </Route>
      <Route exact path="/experience">
      <Nav />
        <Experience/>
        <Footer/>
      </Route>
      <Route exact path="/gallery">
      <Nav />
        <Gallery/>
        <Footer/>
      </Route>

    </Switch>
    </>
  )
};
