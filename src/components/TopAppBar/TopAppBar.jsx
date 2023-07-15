/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsAccountCircleFilled24Px } from "../../icons/IconsAccountCircleFilled24Px";
import { IconsArrowBack24Px } from "../../icons/IconsArrowBack24Px";
import { IconsAttachFile24Px } from "../../icons/IconsAttachFile24Px";
import { IconsMenu24Px } from "../../icons/IconsMenu24Px";
import { IconsMoreVert24Px } from "../../icons/IconsMoreVert24Px";
import { IconsToday24Px } from "../../icons/IconsToday24Px";
import { IconButton } from "../IconButton";
import "./style.css";

export const TopAppBar = ({
  configuration,
  elevation,
  className,
  visible = true,
  text = "Product",
  hasTrailingIcon = true,
}) => {
  return (
    <div className={`top-app-bar ${configuration} ${elevation} ${className}`}>
      {["large", "medium"].includes(configuration) && (
        <>
          <div className="leading-trailing">
            <IconButton
              configuration="standard"
              icon={<IconsArrowBack24Px className="instance-node-2" />}
              state="enabled"
            />
            <div className="trailing-icon">
              <IconButton
                configuration="standard"
                icon={<IconsAttachFile24Px className="instance-node-2" />}
                state="enabled"
              />
              <IconButton
                configuration="standard"
                icon={<IconsToday24Px className="instance-node-2" />}
                state="enabled"
              />
              <IconButton
                configuration="standard"
                icon={<IconsMoreVert24Px className="instance-node-2" />}
                state="enabled"
              />
            </div>
          </div>
          <div className="headline">
            <div className="headline-2">Title</div>
          </div>
        </>
      )}

      {["small-centered", "small"].includes(configuration) && (
        <>
          <>
            {visible && (
              <IconButton
                configuration="standard"
                icon={
                  configuration === "small-centered" ? (
                    <IconsMenu24Px className="instance-node-2" color="#49454F" />
                  ) : (
                    <IconsArrowBack24Px className="instance-node-2" />
                  )
                }
                state="enabled"
              />
            )}
          </>
          <div className="headline-3">
            {configuration === "small" && <>Title</>}

            {configuration === "small-centered" && <>{text}</>}
          </div>
          <>
            {hasTrailingIcon && (
              <>
                <>
                  {configuration === "small" && (
                    <div className="trailing-icon-2">
                      <IconButton
                        configuration="standard"
                        icon={<IconsAttachFile24Px className="instance-node-2" />}
                        state="enabled"
                      />
                      <IconButton
                        configuration="standard"
                        icon={<IconsToday24Px className="instance-node-2" />}
                        state="enabled"
                      />
                      <IconButton
                        configuration="standard"
                        icon={<IconsMoreVert24Px className="instance-node-2" />}
                        state="enabled"
                      />
                    </div>
                  )}

                  {configuration === "small-centered" && (
                    <IconButton
                      configuration="standard"
                      icon={<IconsAccountCircleFilled24Px className="instance-node-2" color="#49454F" />}
                      state="enabled"
                    />
                  )}
                </>
              </>
            )}
          </>
        </>
      )}
    </div>
  );
};

TopAppBar.propTypes = {
  configuration: PropTypes.oneOf(["large", "small-centered", "medium", "small"]),
  elevation: PropTypes.oneOf(["on-scroll", "flat"]),
  visible: PropTypes.bool,
  text: PropTypes.string,
  hasTrailingIcon: PropTypes.bool,
};
