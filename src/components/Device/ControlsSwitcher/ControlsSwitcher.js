import React from "react";
import PropTypes from "prop-types";
import { TEMPERATURE, SCALE } from "../../../utils/deviceControls.types";
import TemperatureControl from "../Controls/Temperature/TemperatureControl";
import { MODE } from "./../../../utils/deviceControls.types";
import ModeControl from "../Controls/Mode/ModeControl";
import ScaleControl from "../Controls/Scale/ScaleControl";

export const controlsSwitcher = device => {};

function ControlsSwitcher(props) {
  if (!props.deviceData) return null;

  const controlProps = {
    controlId: props.controlId,
    onUpdateValue: props.onUpdateValue,
    ...props.deviceData
  };

  switch (props.deviceData.type) {
    case TEMPERATURE:
      return <TemperatureControl {...controlProps} />;
    case MODE:
      return <ModeControl {...controlProps} />;
    case SCALE:
      return <ScaleControl {...controlProps} />;
    default:
      return null;
  }
}

ControlsSwitcher.propTypes = {
  controlId: PropTypes.string,
  deviceData: PropTypes.object
};

export default ControlsSwitcher;
