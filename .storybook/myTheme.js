import { create } from "storybook/theming";

export default create({
  base: "light",
  brandTitle: "My custom Storybook",
  brandUrl: "https://example.com",
  brandImage: "/logo.png",
  brandTarget: "_self",
  //   ui
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appBorderColor: "#585C6D",
  colorSecondary: "#9b91c6",

  textColor: "#9b91c6",
  textInverseColor: "#000",
});
