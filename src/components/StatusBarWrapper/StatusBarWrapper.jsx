/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { StatusBar } from "../StatusBar";
import "./style.css";

export const StatusBarWrapper = ({
  className,
  statusBarWifi = "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/wifi-3.svg",
}) => {
  return (
    <div className={`status-bar-wrapper ${className}`}>
      <StatusBar
        className="status-bar-instance"
        overlapGroupClassName="design-component-instance-node"
        reception="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/reception-3.svg"
        variant="iphone"
        wifi={statusBarWifi}
      />
    </div>
  );
};

StatusBarWrapper.propTypes = {
  statusBarWifi: PropTypes.string,
};
