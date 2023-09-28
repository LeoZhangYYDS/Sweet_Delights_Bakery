import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const link = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.icons,
  fontSize: "1rem",
  ":hover": {
    textDecoration: "underline",
  },
  "@media": {
    "screen and (max-width:1400px)": {
      margin: "1rem 0",
      textAlign: "center",
    },
  },
});
