import React from "react";
import PropTypes from "prop-types";
import classes from "./Switch.module.scss";

function Switch(props) {
  let switchClasses = [classes.Switch];
  if(props.checked){
    switchClasses.push(classes.Checked);
  }
  
  return (
    <label className={switchClasses.join(" ")}>
      <input type="checkbox" {...props} />
      <div />
    </label>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
};

export default Switch;
