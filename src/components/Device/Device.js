import React from "react";
import PropTypes from "prop-types";
import ControlsSwitcher from "./ControlsSwitcher/ControlsSwitcher";

function Device(props) {
  if (!props.device) return;

  // Checks it has controls before rendering them
  let deviceControls;
  if (props.device.controls && !!Object.values(props.device.controls).length) {
    deviceControls = Object.entries(props.device.controls).map(device => {
      const deviceId = device[0];
      const deviceData = device[1];
      return <ControlsSwitcher key={deviceId} deviceId={deviceId} deviceData={deviceData} />;
    });
  }

  return (
    <div>
      <div>
        <div>{props.device.icon}</div>
        <div>
          <div>{props.device.name}</div>
        </div>
        <div>Switcher</div>
      </div>
      <div>{deviceControls}</div>
    </div>
  );
}

Device.propTypes = {
  deviceId: PropTypes.string,
  device: PropTypes.object
};

export default Device;
