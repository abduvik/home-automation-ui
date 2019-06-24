import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./../../containers/Header/Header";
import SideDrawer from "../../containers/SideDrawer/SideDrawer";

import classes from "./Layout.module.scss";

export class Layout extends Component {
  static propTypes = {
    isSideDrawerOpen: PropTypes.bool
  };

  render() {
    return (
      <Fragment>
        <Header />
        <SideDrawer isOpen={this.props.isSideDrawerOpen} />
        <main className={classes.Main}>{this.props.children}</main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  isSideDrawerOpen: state.ui.openSideDrawer
});

export default connect(mapStateToProps)(Layout);
