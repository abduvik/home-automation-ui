import React from "react";

import classes from "./Navigation.module.scss";

export default function Navigation(props) {
  return (
    <nav className={classes.Nav}>
      <ul>{props.children}</ul>
    </nav>
  );
}
