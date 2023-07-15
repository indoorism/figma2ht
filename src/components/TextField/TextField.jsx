/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconsCancel24Px } from "../../icons/IconsCancel24Px";
import { IconsError24Px } from "../../icons/IconsError24Px";
import { IconsSearch24Px } from "../../icons/IconsSearch24Px";
import { IconButton } from "../IconButton";
import "./style.css";

export const TextField = ({
  supportingText = true,
  style,
  state,
  textConfigurations,
  leadingIcon,
  trailingIcon,
  className,
  hasLabelText = true,
  text = "Supporting text",
}) => {
  return (
    <div
      className={`text-field leading-icon-${leadingIcon} ${state} ${textConfigurations} trailing-icon-${trailingIcon} ${style} ${className}`}
    >
      {style === "filled" && ["enabled", "hovered"].includes(state) && (
        <div className="state-layer-wrapper">
          <div className="state-layer">
            {leadingIcon && (
              <IconButton
                configuration="standard"
                icon={<IconsSearch24Px className="instance-node" />}
                state="enabled"
              />
            )}

            <div className="content">
              <div className="label-text">
                {!trailingIcon && textConfigurations === "label-text" && !leadingIcon && (
                  <>
                    <>{hasLabelText && <div className="label-text-2">Label</div>}</>
                  </>
                )}

                {((!leadingIcon && textConfigurations === "input-text" && !trailingIcon) ||
                  (!leadingIcon && trailingIcon) ||
                  (leadingIcon && textConfigurations === "input-text") ||
                  (leadingIcon && textConfigurations === "label-text") ||
                  (leadingIcon && textConfigurations === "placeholder-text" && trailingIcon) ||
                  (textConfigurations === "placeholder-text" && !trailingIcon)) && (
                  <div className="label-text-3">Label</div>
                )}
              </div>
              {["input-text", "placeholder-text"].includes(textConfigurations) && (
                <div className="input-text-wrapper">
                  <div className="input-text-2">
                    {textConfigurations === "input-text" && <>Input</>}

                    {textConfigurations === "placeholder-text" && <>Placeholder</>}
                  </div>
                </div>
              )}
            </div>
            {trailingIcon && (
              <IconButton
                configuration="standard"
                icon={<IconsCancel24Px className="instance-node" />}
                state="enabled"
              />
            )}
          </div>
        </div>
      )}

      {((state === "disabled" && style === "outlined") ||
        (state === "enabled" && style === "outlined") ||
        state === "error" ||
        state === "focused" ||
        (state === "hovered" && style === "outlined")) && (
        <>
          <div className="text_field-2">
            {style === "outlined" && (
              <div className="state-layer-2">
                {leadingIcon && (
                  <IconButton
                    className={`${state === "disabled" && "class"}`}
                    configuration="standard"
                    icon={<IconsSearch24Px className="instance-node" />}
                    state="enabled"
                  />
                )}

                <div className="content">
                  {((state === "disabled" && textConfigurations === "input-text") ||
                    (state === "disabled" && textConfigurations === "placeholder-text") ||
                    (state === "enabled" && textConfigurations === "input-text") ||
                    (state === "enabled" && textConfigurations === "placeholder-text") ||
                    (state === "error" && textConfigurations === "input-text") ||
                    (state === "error" && textConfigurations === "placeholder-text") ||
                    state === "focused" ||
                    (state === "hovered" && textConfigurations === "input-text") ||
                    (state === "hovered" && textConfigurations === "placeholder-text")) && (
                    <>
                      <div className="input-text-3">
                        {((state === "disabled" && textConfigurations === "input-text") ||
                          (state === "enabled" && textConfigurations === "input-text") ||
                          (state === "hovered" && textConfigurations === "input-text") ||
                          textConfigurations === "placeholder-text") && (
                          <div className="input-text-4">
                            {textConfigurations === "input-text" && <>Input</>}

                            {textConfigurations === "placeholder-text" && <>Placeholder</>}
                          </div>
                        )}

                        {textConfigurations === "input-text" && ["error", "focused"].includes(state) && (
                          <>
                            <div className="input-text-5">Input</div>
                            <img
                              className="caret"
                              alt="Caret"
                              src={
                                state === "error"
                                  ? "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/caret-15.svg"
                                  : "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/caret-23.svg"
                              }
                            />
                          </>
                        )}

                        {textConfigurations === "label-text" && (
                          <img
                            className="caret-2"
                            alt="Caret"
                            src="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/caret-23.svg"
                          />
                        )}
                      </div>
                      <div className="label-text-wrapper">
                        <div className="label-text-4">Label</div>
                      </div>
                    </>
                  )}

                  {((state === "disabled" && textConfigurations === "label-text") ||
                    (state === "enabled" && textConfigurations === "label-text") ||
                    (state === "error" && textConfigurations === "label-text") ||
                    (state === "hovered" && textConfigurations === "label-text")) && (
                    <div className="label-text">
                      <div className="label-text-5">Label</div>
                    </div>
                  )}
                </div>
                {trailingIcon && (
                  <IconButton
                    className={`${state === "disabled" && "class"}`}
                    configuration="standard"
                    icon={
                      state === "error" ? (
                        <IconsError24Px className="instance-node" />
                      ) : (
                        <IconsCancel24Px className="instance-node" />
                      )
                    }
                    state="enabled"
                  />
                )}
              </div>
            )}

            {style === "filled" && (
              <>
                <div className="state-layer-wrapper-2">
                  <div className="state-layer-3">
                    {leadingIcon && (
                      <IconButton
                        configuration="standard"
                        icon={<IconsSearch24Px className="instance-node" />}
                        state="enabled"
                      />
                    )}

                    <div className="content">
                      <div className="label-text">
                        <div className="label-text-6">Label</div>
                        {textConfigurations === "label-text" && state === "focused" && (
                          <img
                            className="caret"
                            alt="Caret"
                            src="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/caret-23.svg"
                          />
                        )}
                      </div>
                      {["input-text", "placeholder-text"].includes(textConfigurations) && (
                        <div className="input-text-6">
                          <div className="placeholder-text-2">
                            {textConfigurations === "placeholder-text" && <>Placeholder</>}

                            {textConfigurations === "input-text" && <>Input</>}
                          </div>
                          {textConfigurations === "input-text" && (
                            <img
                              className="caret"
                              alt="Caret"
                              src={
                                state === "error"
                                  ? "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/caret-15.svg"
                                  : "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/caret-23.svg"
                              }
                            />
                          )}
                        </div>
                      )}
                    </div>
                    {trailingIcon && (
                      <IconButton
                        configuration="standard"
                        icon={
                          state === "error" ? (
                            <IconsError24Px className="instance-node" />
                          ) : (
                            <IconsCancel24Px className="instance-node" />
                          )
                        }
                        state="enabled"
                      />
                    )}
                  </div>
                </div>
                <img
                  className="stroke"
                  alt="Stroke"
                  src={
                    state === "error"
                      ? "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/stroke-45.svg"
                      : "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/stroke-49.svg"
                  }
                />
              </>
            )}
          </div>
          <>
            {supportingText && (
              <div className="supporting-text">
                <div className="supporting-text-2">{text}</div>
              </div>
            )}
          </>
        </>
      )}

      {style === "filled" && state === "disabled" && (
        <>
          <div className="disabled-sate-color" />
          <div className="state-layer-wrapper-3">
            <div className="state-layer-4">
              {leadingIcon && (
                <IconButton
                  configuration="standard"
                  icon={<IconsSearch24Px className="instance-node" />}
                  state="enabled"
                />
              )}

              <div className="content">
                <div className="label-text">
                  <div className="label-text-7">Label</div>
                </div>
                {["input-text", "placeholder-text"].includes(textConfigurations) && (
                  <div className="input-text-7">
                    <div className="input-text-8">
                      {textConfigurations === "input-text" && <>Input</>}

                      {textConfigurations === "placeholder-text" && <>Placeholder</>}
                    </div>
                  </div>
                )}
              </div>
              {trailingIcon && (
                <IconButton
                  configuration="standard"
                  icon={<IconsCancel24Px className="instance-node" />}
                  state="enabled"
                />
              )}
            </div>
          </div>
        </>
      )}

      {style === "filled" && ["disabled", "enabled", "hovered"].includes(state) && (
        <>
          <img
            className="stroke-2"
            alt="Stroke"
            src={
              state === "disabled"
                ? "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/stroke-57.svg"
                : "https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/stroke-61.svg"
            }
          />
          <>
            {supportingText && (
              <div className="supporting-text-wrapper">
                <div className="supporting-text-3">{text}</div>
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

TextField.propTypes = {
  supportingText: PropTypes.bool,
  style: PropTypes.oneOf(["outlined", "filled"]),
  state: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  textConfigurations: PropTypes.oneOf(["input-text", "label-text", "placeholder-text"]),
  leadingIcon: PropTypes.bool,
  trailingIcon: PropTypes.bool,
  hasLabelText: PropTypes.bool,
  text: PropTypes.string,
};
