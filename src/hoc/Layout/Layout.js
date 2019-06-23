import React, { Fragment } from "react";
import Header from "./../../components/Layout/Header/Header";

import classes from "./Layout.module.scss";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className={classes.Main}>{props.children}</main>
    </Fragment>
  );
}
