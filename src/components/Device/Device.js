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

  /**
   * Event fired when the value of a control is changed
   */
  onControlValueChangedHandler = (controlId, newValue) => {
    this.props.onControlValueChanged(this.props.deviceId, controlId, newValue);
  };

  render() {
    if (!this.props.device) return;

    // Checks it has controls before rendering them
    let deviceControls;
    if (
      this.props.device.controls &&
      !!Object.values(this.props.device.controls).length
    ) {
      deviceControls = Object.entries(this.props.device.controls).map(
        device => {
          const controlId = device[0];
          const deviceData = device[1];
          return (
            <div key={controlId} className={classes.DeviceContainer}>
              <ControlsSwitcher
                controlId={controlId}
                deviceData={deviceData}
                onUpdateValue={this.onControlValueChangedHandler}
              />
            </div>
          );
        }
      );
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
