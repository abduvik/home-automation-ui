import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import Backdrop from "../Backdrop/Backdrop";

import classes from "./Modal.module.scss";

function Modal(props) {
  let modalClasses = [classes.Modal];
  if (props.show) {
    modalClasses.push(classes.Show);
  }

  return (
    <Fragment>
      <Backdrop show={props.show} onClick={props.onCloseModal} />
      <div data-test="modal-body" className={modalClasses.join(" ")}>
        <div>{props.children}</div>
        <div className={classes.BtnContainer}>
          <Button onClick={props.onCloseModal}>Close</Button>
        </div>
      </div>
    </Fragment>
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  onCloseModal: PropTypes.func
};

export default Modal;
