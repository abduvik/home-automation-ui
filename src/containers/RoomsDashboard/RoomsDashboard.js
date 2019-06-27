import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchRooms } from "./../../store/rooms/rooms.actions";
import Room from "../../components/Rooms/Room";

import classes from "./RoomsDashboard.module.scss";

export class RoomsDashboard extends Component {
  static propTypes = {
    fetchRooms: PropTypes.func,
    rooms: PropTypes.object
  };

  componentDidMount() {
    if (this.props.fetchRooms) {
      this.props.fetchRooms();
    }
  }

  onClickRoomHandler = roomId => {
    // Go to room page
    this.props.history.push(`/room/${roomId}`);
  };

  render() {
    if (!this.props.rooms) return null;

    return (
      <div className={classes.Row}>
        {Object.entries(this.props.rooms).map(roomData => {
          const roomId = roomData[0];
          const room = roomData[1];
          return (
            <div
              data-test={`room-card-${roomId}`}
              key={roomId}
              className={classes.Column}
              onClick={() => this.onClickRoomHandler(roomId)}
            >
              <Room
                id={roomId}
                name={room.name}
                icon={room.icon}
                devicesCount={room.devicesCount}
              />
            </div>
          );
        })}
      </div>
    );
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
