import React from "react";
import PropTypes from "prop-types";
import classes from "./Switch.module.scss";

function Switch(props) {
  return (
    <label className={classes.Switch}>
      <input type="checkbox" {...props} />
      <div />
    </label>
  );
}

Switch.propTypes = {
  onChange: PropTypes.func
};

export default Switch;
