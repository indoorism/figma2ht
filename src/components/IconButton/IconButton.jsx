/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsSettings24Px11 } from "../../icons/IconsSettings24Px11";
import "./style.css";

export const IconButton = ({
  configuration,
  state,
  icon = <IconsSettings24Px11 className="icons-settings" color="#49454F" />,
  className,
}) => {
  return (
    <div className={`icon-button state-12-${state} configuration-3-${configuration} ${className}`}>
      <div className="container">
        <div className="icons-settings-wrapper">{icon}</div>
      </div>
    </div>
  );
};

IconButton.propTypes = {
  configuration: PropTypes.oneOf(["filled", "outlined", "tonal", "standard"]),
  state: PropTypes.oneOf(["enabled", "pressed", "focused", "hovered", "disabled"]),
};
