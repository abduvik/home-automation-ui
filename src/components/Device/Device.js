import React from "react";
import PropTypes from "prop-types";
import ControlsSwitcher from "./ControlsSwitcher/ControlsSwitcher";

import classes from "./Device.module.scss";
import Switch from "./../UI/Switch/Switch";

function Device(props) {
  if (!props.device) return;

  // Checks it has controls before rendering them
  let deviceControls;
  if (props.device.controls && !!Object.values(props.device.controls).length) {
    deviceControls = Object.entries(props.device.controls).map(device => {
      const deviceId = device[0];
      const deviceData = device[1];
      return (
        <ControlsSwitcher
          key={deviceId}
          deviceId={deviceId}
          deviceData={deviceData}
        />
      );
    });
  }

  return (
    <div className={classes.Device}>
      <div className={classes.Header}>
        <div>{props.device.icon}</div>
        <div className={classes.Title}>{props.device.name}</div>
        <div className={classes.Switch}>
          <Switch onChange={props.onToggleDeviceSwitch} checked={props.device.switch} />
        </div>
      </div>
      <div>{deviceControls}</div>
    </div>
  );
}

Device.propTypes = {
  deviceId: PropTypes.string,
  device: PropTypes.object,
  onToggleDeviceSwitch: PropTypes.func
};

export default Device;
