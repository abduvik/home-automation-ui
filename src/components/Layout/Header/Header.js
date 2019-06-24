import React from "react";
import Navigation from "./Navigation/Navigation";
import NavigationItem from "./Navigation/NavigationItem/NavigationItem";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import classes from "./Header.module.scss";
import Button from './../../UI/Button/Button';

export default function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.HeaderContainer}>
        <div className={classes.AppName}>Home Automation UI</div>
        <div className={classes.Navigation}>
          <Navigation>
            <NavigationItem>Rooms</NavigationItem>
            <NavigationItem>Github</NavigationItem>
          </Navigation>
        </div>
        <div className={classes.MenuBtn}>
          <Button>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </div>
      </div>
    </header>
  );
}
