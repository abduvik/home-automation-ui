import React, { Component } from "react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import Navigation from "../../components/Layout/Navigation/Navigation";
import NavigationItem from "../../components/Layout/Navigation/NavigationItem/NavigationItem";
import { toggleSideDrawer } from "./../../store/ui/ui.actions";
import Button from "../../components/UI/Button/Button";

import classes from "./SideDrawer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

export class SideDrawer extends Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  render() {
    const sideDrawerContainerClasses = [classes.SideDrawerContainer];

    if (this.props.isOpen) {
      sideDrawerContainerClasses.push(classes.Open);
    }

    return (
      <div className={sideDrawerContainerClasses.join(" ")}>
        <Button className={classes.CloseDrawerBtn} onClick={this.props.toggleSideDrawer}>
          <FontAwesomeIcon icon={faWindowClose} />
        </Button>
        <div className={classes.SideDrawer}>
          <div className={classes.Title}>Menu</div>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isOpen: state.ui.openSideDrawer
});

const mapDispatchToProps = {
  toggleSideDrawer
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideDrawer);
