import React from "react";

import classes from "./Button.module.scss";

export default function Button(props) {
  return <button className={classes.Button}>{props.children}</button>;
}
