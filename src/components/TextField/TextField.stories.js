import { TextField } from ".";

export default {
  title: "Components/TextField",
  component: TextField,
};

export const Default = {
  args: {
    supportingText: true,
    style: "outlined",
    state: "enabled",
    textConfigurations: "input-text",
    leadingIcon: true,
    trailingIcon: true,
    className: {},
    hasLabelText: true,
    text: "Supporting text",
  },
};
