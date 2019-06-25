import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

export class RoomDevices extends Component {
  static propTypes = {};

  render() {
    return <div>Room Devices</div>;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomDevices);
