import React, { Fragment } from "react";
import Header from "./../../components/Layout/Header/Header";

export default function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
}
