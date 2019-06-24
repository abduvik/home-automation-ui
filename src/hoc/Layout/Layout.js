import React, { Fragment } from "react";

import classes from "./Layout.module.scss";
import { Header } from './../../containers/Header/Header';
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
