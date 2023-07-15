/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const StatusBar = ({
  variant,
  className,
  reception = "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/reception-2.svg",
  wifi = "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/wifi-2.svg",
  overlapGroupClassName,
}) => {
  return (
    <div className={`status-bar ${variant} ${className}`}>
      {variant === "iphone" && (
        <>
          <div className="element">10:14</div>
          <div className="frame">
            <img className="reception" alt="Reception" src={reception} />
            <img className="wifi" alt="Wifi" src={wifi} />
            <div className="battery">
              <div className={`overlap-group ${overlapGroupClassName}`}>
                <div className="rectangle" />
              </div>
            </div>
          </div>
        </>
      )}

      {variant === "android" && (
        <div className="div">
          <img
            className="img"
            alt="Wifi"
            src="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/wifi-1.svg"
          />
          <img
            className="reception-2"
            alt="Reception"
            src="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/reception-1.svg"
          />
          <div className="text-wrapper">10:14</div>
        </div>
      )}
    </div>
  );
};

StatusBar.propTypes = {
  variant: PropTypes.oneOf(["android", "iphone"]),
  reception: PropTypes.string,
  wifi: PropTypes.string,
};
