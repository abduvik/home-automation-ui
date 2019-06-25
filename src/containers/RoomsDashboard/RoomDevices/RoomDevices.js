import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRoomDevices } from "./../../../store/devices/devices.actions";
import Device from "./../../../components/Device/Device";

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

  render() {
    if (!this.props.devices) return null;

    return Object.entries(this.props.devices).map(deviceData => (
      <div key={deviceData[0]}>
        <Device deviceId={deviceData[1]} device={deviceData[1]} />
      </div>
    ));
  }
}

const mapStateToProps = state => ({
  devices: state.devices.devices
});

const mapDispatchToProps = {
  fetchRoomDevices
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomDevices);
