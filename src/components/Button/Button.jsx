/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Icon20 } from "../../icons/Icon20";
import { Icon7 } from "../../icons/Icon7";
import "./style.css";

export const Button = ({ configuration, icon, state, className, text = "Enabled" }) => {
  return (
    <div className={`button ${icon} configuration-${configuration} state-8-${state} ${className}`}>
      <div className="state-layer-5">
        {icon === "with-icon" && state === "disabled" && ["filled", "outlined"].includes(configuration) && (
          <Icon20 className="icon" />
        )}

        {((configuration === "filled" && icon === "with-icon" && state === "disabled") ||
          (configuration === "outlined" && icon === "with-icon" && state === "disabled") ||
          icon === "n-a") && (
          <div className="label-text-8">
            {state === "disabled" && <>Disabled</>}

            {state === "pressed" && <>Pressed</>}

            {state === "focused" && <>Focused</>}

            {state === "hovered" && <>Hovered</>}

            {state === "enabled" && <>{text}</>}
          </div>
        )}

        {((configuration === "elevated" && icon === "with-icon" && state === "disabled") ||
          (configuration === "text" && icon === "with-icon" && state === "disabled") ||
          (configuration === "tonal" && icon === "with-icon" && state === "disabled") ||
          (icon === "with-icon" && state === "enabled") ||
          (icon === "with-icon" && state === "focused") ||
          (icon === "with-icon" && state === "hovered") ||
          (icon === "with-icon" && state === "pressed")) && (
          <>
            <Icon7
              className="icon"
              color={
                configuration === "filled"
                  ? "white"
                  : (configuration === "elevated" && state === "disabled") ||
                    (configuration === "outlined" && state === "pressed") ||
                    (configuration === "text" && state === "disabled") ||
                    configuration === "tonal"
                  ? "#413230"
                  : "#6D8234"
              }
              opacity={state === "disabled" ? "0.38" : undefined}
            />
            <div className="label-text-9">
              {state === "enabled" && <>{text}</>}

              {state === "pressed" && <>Pressed</>}

              {state === "focused" && <>Focused</>}

              {state === "hovered" && <>Hovered</>}

              {state === "disabled" && <>Disabled</>}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Button.propTypes = {
  configuration: PropTypes.oneOf(["filled", "tonal", "elevated", "text", "outlined"]),
  icon: PropTypes.oneOf(["with-icon", "n-a"]),
  state: PropTypes.oneOf(["enabled", "focused", "pressed", "hovered", "disabled"]),
  text: PropTypes.string,
};
