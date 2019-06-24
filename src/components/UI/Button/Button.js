import React from "react";
import PropTypes from "prop-types";

import classes from "./Button.module.scss";

function Button(props) {
  return (
    <button className={classes.Button + " " + props.className} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

export default Button;
