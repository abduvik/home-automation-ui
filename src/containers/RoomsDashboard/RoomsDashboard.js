import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRooms } from './../../store/rooms/rooms.actions';

export class RoomsDashboard extends Component {
  static propTypes = {
    fetchRooms: PropTypes.func,
    rooms: PropTypes.object
  };

  componentDidMount(){
    this.props.fetchRooms();
  }

  render() {
    return <div>Rooms</div>;
  }
}

const mapStateToProps = state => ({
  rooms: state.rooms.rooms
});

const mapDispatchToProps = {
  fetchRooms
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomsDashboard);
