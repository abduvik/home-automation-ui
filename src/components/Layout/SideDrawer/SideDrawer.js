import React from "react";
import PropTypes from 'prop-types'
import Navigation from "../Header/Navigation/Navigation";
import NavigationItem from "./../Header/Navigation/NavigationItem/NavigationItem";

import classes from "./SideDrawer.module.scss";

export default function SideDrawer(props) {
  const sideDrawerContainerClasses = [classes.SideDrawerContainer];

  // If open props is passed
  if (props.isOpen) {
    sideDrawerContainerClasses.push(classes.Open);
  }

  return (
    <div className={sideDrawerContainerClasses.join(" ")}>
      <div className={classes.SideDrawer}>
        <div className={classes.Title}>Menu</div>
        <Navigation>
          <NavigationItem>Rooms</NavigationItem>
          <NavigationItem>Github</NavigationItem>
        </Navigation>
      </div>
    </div>
  );
}

SideDrawer.propTypes = {
    isOpen: PropTypes.bool
}
