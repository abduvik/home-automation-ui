import React from "react";
import PropTypes from "prop-types";

function TemperatureControl(props) {
  return <div>Temperature </div>;
}

TemperatureControl.propTypes = {
  deviceId: PropTypes.string,
  name: PropTypes.string,
  unit: PropTypes.string,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number
};

export default TemperatureControl;
