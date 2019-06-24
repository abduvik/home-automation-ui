import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./Room.module.scss";

function Room(props) {
  return (
    <div className={classes.Room}>
      <div>
        <div className={classes.Title}>{props.name}</div>
        <div>{props.devicesCount} Devices</div>
      </div>
      <FontAwesomeIcon icon={props.icon} className={classes.Icon} />
    </div>
  );
}

Room.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  icon: PropTypes.string,
  devicesCount: PropTypes.number
};

export default Room;
