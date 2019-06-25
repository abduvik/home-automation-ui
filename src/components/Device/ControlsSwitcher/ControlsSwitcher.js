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

  switch (props.deviceData.type) {
    case TEMPERATURE:
      return (
        <TemperatureControl
          key={props.deviceId}
          deviceId={props.deviceId}
          {...props.deviceData}
        />
      );
    case MODE:
      return (
        <ModeControl
          key={props.deviceId}
          deviceId={props.deviceId}
          {...props.deviceData}
        />
      );
    case SCALE:
      return (
        <ScaleControl
          key={props.deviceId}
          deviceId={props.deviceId}
          {...props.deviceData}
        />
      );
    default:
      return null;
  }
}

ControlsSwitcher.propTypes = {
  deviceId: PropTypes.string,
  deviceData: PropTypes.object
};

export default ControlsSwitcher;
