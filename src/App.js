import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import Rooms from "./containers/Rooms/Rooms";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Rooms} />
      </Switch>
    </Layout>
  );
}

export default App;
