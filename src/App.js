import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const Home = React.lazy(() => {
  return import("./pages/Home");
});

const CardList = React.lazy(() => {
  return import("./pages/CardList");
});

const BigCard = React.lazy(() => {
  return import("./pages/BigCard");
});

const Advice = React.lazy(() => {
  return import("./components/Advice");
});

const About = React.lazy(() => {
  return import("./components/About");
});

function App() {
  let routes = (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/all" exact component={CardList} />
      <Route path="/advice" exact component={Advice} />
      <Route path="/about" exact component={About} />
      <Route path="/:breedId" exact component={BigCard} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App">
      <Navigation />
      {<Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>}
      <Footer />
    </div>
  );
}

export default App;
