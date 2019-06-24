import React from "react";
import Navigation from "../Header/Navigation/Navigation";
import NavigationItem from "./../Header/Navigation/NavigationItem/NavigationItem";

import classes from "./SideDrawer.module.scss";

export default function SideDrawer() {
  return (
    <div className={classes.SideDrawer}>
      <div className={classes.Title}>Menu</div>
      <Navigation>
        <NavigationItem>Rooms</NavigationItem>
        <NavigationItem>Github</NavigationItem>
      </Navigation>
    </div>
  );
}
