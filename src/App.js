import React, { Suspense } from "react";
import "./App.css";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Selectbox from "./components/Selectbox";

const Home = React.lazy(() => {
  return import("./pages/Home");
});

const Login = React.lazy(() => {
  return import("./pages/Login");
});

const Reset = React.lazy(() => {
  return import("./pages/Reset");
});

const Dashboard = React.lazy(() => {
  return import("./pages/Dashboard");
});

const AddBreed = React.lazy(() => {
  return import("./pages/AddBreed");
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
      <Route path="/admin/login" exact component={Login} />
      <Route path="/admin/reset" exact component={Reset} />
      <Route path="/admin/dashboard" exact component={Dashboard} />
      <Route path="/admin/new/breed" exact component={AddBreed} />
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
