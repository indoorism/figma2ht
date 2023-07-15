import React from "react";
import { Button } from "../../components/Button";
import { Fridge } from "../../components/Fridge";
import { StatusBarWrapper } from "../../components/StatusBarWrapper";
import { TextField } from "../../components/TextField";
import { TopAppBar } from "../../components/TopAppBar";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div-2">
        <StatusBarWrapper
          className="status-bar-2"
          statusBarWifi="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/wifi.svg"
        />
        <TextField
          className="text-field-instance"
          hasLabelText={false}
          leadingIcon={false}
          state="enabled"
          style="filled"
          text="Email"
          textConfigurations="label-text"
          trailingIcon={false}
        />
        <TextField
          className="text-field-2"
          hasLabelText={false}
          leadingIcon={false}
          state="enabled"
          style="filled"
          text="Password"
          textConfigurations="label-text"
          trailingIcon={false}
        />
        <TopAppBar
          className="top-app-bar-instance"
          configuration="small-centered"
          elevation="on-scroll"
          hasTrailingIcon={false}
          text="Login"
          visible={false}
        />
        <div className="group">
          <div className="overlap">
            <Fridge />
            <div className="rectangle-2" />
            <h1 className="h-1">FlavorSaver</h1>
          </div>
        </div>
        <img
          className="rectangle-3"
          alt="Rectangle"
          src="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/rectangle-56@2x.png"
        />
        <img
          className="rectangle-4"
          alt="Rectangle"
          src="https://generation-sessions.s3.amazonaws.com/b65d37785f906b6b7f2edb5611692543/img/rectangle-57@2x.png"
        />
        <div className="text-wrapper-2">or using:</div>
        <Button className="button-instance" configuration="filled" icon="n-a" state="enabled" text="LOGIN" />
      </div>
    </div>
  );
};
