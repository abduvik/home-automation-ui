import React from "react";
import PropTypes from "prop-types";

import classes from "./Backdrop.module.scss";

function Backdrop(props) {
  let backdropClasses = [classes.Backdrop];
  if (props.show) backdropClasses.push(classes.Show);

  return <div className={backdropClasses.join(" ")} onClick={props.onClick} />;
}

Backdrop.propTypes = {
  show: PropTypes.bool,
  onClick: PropTypes.func
};

export default Backdrop;
