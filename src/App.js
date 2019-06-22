import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.module.scss";
import Layout from "./hoc/Layout/Layout";
import RoomsDashboard from "./containers/RoomsDashboard/RoomsDashboard";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={RoomsDashboard} />
      </Switch>
    </Layout>
  );
}

export default App;
