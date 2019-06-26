import React, { Component } from "react";
import PropTypes from "prop-types";
import ControlsSwitcher from "./ControlsSwitcher/ControlsSwitcher";

import classes from "./Device.module.scss";
import Switch from "./../UI/Switch/Switch";

export default class Device extends Component {
  static propTypes = {
    deviceId: PropTypes.string,
    device: PropTypes.object,
    onToggleDeviceSwitch: PropTypes.func,
    onControlValueChanged: PropTypes.func
  };

  render() {
    if (!this.props.device) return;

    // Checks it has controls before rendering them
    let deviceControls;
    if (
      this.props.device.controls &&
      !!Object.values(this.props.device.controls).length
    ) {
      deviceControls = Object.entries(this.props.device.controls).map(device => {
        const deviceId = device[0];
        const deviceData = device[1];
        return (
          <div key={deviceId} className={classes.DeviceContainer}>
            <ControlsSwitcher
              deviceId={deviceId}
              deviceData={deviceData}
              onUpdateValue={this.props.onControlValueChanged}
            />
          </div>
        );
      });
    }

    return (
      <div className={classes.Device}>
        <div className={classes.Header}>
          <div>{this.props.device.icon}</div>
          <div className={classes.Title}>{this.props.device.name}</div>
          <div className={classes.Switch}>
            <Switch
              onChange={this.props.onToggleDeviceSwitch}
              checked={this.props.device.switch}
            />
          </div>
        </div>
        <div>{deviceControls}</div>
      </div>
    );
  }
}
