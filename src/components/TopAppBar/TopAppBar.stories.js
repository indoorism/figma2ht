import { TopAppBar } from ".";

export default {
  title: "Components/TopAppBar",
  component: TopAppBar,
};

export const Default = {
  args: {
    configuration: "large",
    elevation: "on-scroll",
    className: {},
    visible: true,
    text: "Product",
    hasTrailingIcon: true,
  },
};
