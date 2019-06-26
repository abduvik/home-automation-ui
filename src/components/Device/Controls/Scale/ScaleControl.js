import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./ScaleControl.module.scss";

export default class ScaleControl extends Component {
  static propTypes = {
    controlId: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number
  };

  onChangeScaleHandler = event => {
    const updatedValue = event.target.value;
    if (updatedValue !== this.props.value) {
      this.props.onUpdateValue(this.props.controlId, parseInt(updatedValue));
    }
  };

  render() {
    return (
      <div className={classes.RangeContainer}>
        <div className={classes.CurrentValue} data-test="current-value">
          {this.props.value}
        </div>
        <input
          className={classes.Range}
          type="range"
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          value={this.props.value}
          onChange={this.onChangeScaleHandler}
        />
      </div>
    );
  }
}
