import React, { Fragment } from "react";
import Header from "./../../components/Layout/Header/Header";

import classes from "./Layout.module.scss";
import SideDrawer from "../../components/Layout/SideDrawer/SideDrawer";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <SideDrawer isOpen={false} />
      <main className={classes.Main}>{props.children}</main>
    </Fragment>
  );
}
