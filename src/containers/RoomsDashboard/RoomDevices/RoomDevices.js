import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchRoomDevices,
  toggleDeviceSwitch,
  updateDeviceControlValue
} from "./../../../store/devices/devices.actions";
import Device from "./../../../components/Device/Device";
import { NavLink } from "react-router-dom";
import classes from "./RoomDevices.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export class RoomDevices extends Component {
  static propTypes = {
    fetchRoomDevices: PropTypes.func
  };

  state = {
    mountFailded: false
  };

  componentDidMount() {
    if (
      !!this.props.match &&
      !!this.props.match.params &&
      !!this.props.match.params.id &&
      !!this.props.fetchRoomDevices
    ) {
      const roomId = this.props.match.params.id;
      this.props.fetchRoomDevices(roomId);
    }
  }

  /**
   * This for toggling the main switch of the device
   */
  toggleDeviceSwitch = deviceId => {
    this.props.toggleDeviceSwitch(deviceId);
  };

  /**
   * Evenet handler when a device control value changed
   */
  onControlValueChangedHandler = (deviceId, controlId, newValue) => {
    this.props.updateDeviceControlValue({ deviceId, controlId, newValue });
  };

  render() {
    if (!this.props.devices) return null;

    return (
      <Fragment>
        <NavLink to="/" className={classes.BackLink}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>Back to Rooms</span>
        </NavLink>
        <div className={classes.RoomDevices}>
          {Object.entries(this.props.devices).map(device => {
            const deviceId = device[0];
            const deviceData = device[1];
            return (
              <div key={deviceId} className={classes.Column}>
                <Device
                  deviceId={deviceId}
                  device={deviceData}
                  onToggleDeviceSwitch={() => this.toggleDeviceSwitch(deviceId)}
                  onControlValueChanged={this.onControlValueChangedHandler}
                />
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  devices: state.devices.devices
});

const mapDispatchToProps = {
  fetchRoomDevices,
  toggleDeviceSwitch,
  updateDeviceControlValue
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomDevices);
