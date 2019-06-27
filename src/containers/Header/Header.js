import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { toggleSideDrawer } from "./../../store/ui/ui.actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "./../../components/UI/Button/Button";
import Navigation from "./../../components/Layout/Navigation/Navigation";
import NavigationItem from "./../../components/Layout/Navigation/NavigationItem/NavigationItem";

import classes from "./Header.module.scss";

export class Header extends Component {
  static propTypes = {
    toggleSideDrawer: PropTypes.func
  };

  render() {
    return (
      <header className={classes.Header}>
        <div className={classes.HeaderContainer}>
          <div className={classes.AppName}>Home Automation UI</div>
          <div className={classes.Navigation}>
            <Navigation>
              <NavigationItem>
                <NavLink to="/">Rooms</NavLink>
              </NavigationItem>
              <NavigationItem>
                <a
                  href="https://github.com/AbdelrahmanSE/home-automation-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </NavigationItem>
            </Navigation>
          </div>
          <div className={classes.MenuBtn}>
            <Button onClick={this.props.toggleSideDrawer}>
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = {
  toggleSideDrawer
};

export default connect(
  null,
  mapDispatchToProps
)(Header);
