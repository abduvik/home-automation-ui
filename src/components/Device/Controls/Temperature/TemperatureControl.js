import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "./../../../UI/Button/Button";

import classes from "./TemperatureControl.module.scss";

export default class TemperatureControl extends Component {
  static propTypes = {
    controlId: PropTypes.string,
    name: PropTypes.string,
    unit: PropTypes.string,
    value: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    onUpdateValue: PropTypes.func
  };



  onIncreaseTemperatureHandler = () => {
    if (this.props.max === this.props.value) return null;
    this.props.onUpdateValue(this.props.controlId, this.props.value + 1);
  };

  onDecreaseTemperatureHandler = () => {
    if (this.props.min === this.props.value) return null;
    this.props.onUpdateValue(this.props.controlId, this.props.value - 1);
  };

  render() {
    console.log(this.props);
    return (
      <div className={classes.TemperatureControlContainer}>
        <div className={classes.Title}>{this.props.name}</div>
        <div className={classes.TemperatureControl}>
          <div className={classes.MinusBtn}>
            <Button onClick={this.onDecreaseTemperatureHandler}>
              <FontAwesomeIcon icon={faMinus} />
            </Button>
          </div>
          <div className={classes.Temperature}>{this.props.value}</div>
          <div className={classes.PlusBtn}>
            <Button onClick={this.onIncreaseTemperatureHandler}>
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
