import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./../../containers/Header/Header";
import SideDrawer from "../../containers/SideDrawer/SideDrawer";

import classes from "./Layout.module.scss";
import { closeErrorModal } from "./../../store/ui/ui.actions";
import Modal from "./../../components/UI/Modal/Modal";

export class Layout extends Component {
  static propTypes = {
    isSideDrawerOpen: PropTypes.bool
  };

  render() {
    return (
      <Fragment>
        <Header />
        <SideDrawer isOpen={this.props.isSideDrawerOpen} />
        <Modal
          data-test="errors-modal"
          show={!!this.props.error}
          onCloseModal={this.props.closeErrorModal}
        >
          {this.props.error && this.props.error.message}
        </Modal>
        <main className={classes.Main}>{this.props.children}</main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  error: state.ui.error,
  isSideDrawerOpen: state.ui.openSideDrawer
});

const mapDispatchToProps = {
  closeErrorModal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
