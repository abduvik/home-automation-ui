import React from "react";
import PropTypes from "prop-types";
import { TEMPERATURE, SCALE } from "../../../utils/deviceControls.types";
import TemperatureControl from "../Controls/Temperature/TemperatureControl";
import { MODE } from "./../../../utils/deviceControls.types";
import ModeControl from "../Controls/Mode/ModeControl";
import ScaleControl from "../Controls/Scale/ScaleControl";

import classes from "./ControlsSwitcher.module.scss";

export const controlsSwitcher = device => {};

function ControlsSwitcher(props) {
  if (!props.deviceData) return null;

  const controlProps = {
    controlId: props.controlId,
    onUpdateValue: props.onUpdateValue,
    ...props.deviceData
  };

  let control;

  switch (props.deviceData.type) {
    case TEMPERATURE:
      control = <TemperatureControl {...controlProps} />;
      break;
    case MODE:
      control = <ModeControl {...controlProps} />;
      break;
    case SCALE:
      control = <ScaleControl {...controlProps} />;
      break;
    default:
      control = null;
  }

  if (!control) return null;

  return (
    <div className={classes.TemperatureControlContainer}>
      <div className={classes.Title} data-test="device-title">
        {props.deviceData.name}
      </div>
      {control}
    </div>
  );
}

ControlsSwitcher.propTypes = {
  controlId: PropTypes.string,
  deviceData: PropTypes.object
};

export default ControlsSwitcher;
