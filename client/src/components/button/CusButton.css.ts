import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const button = style({
  fontFamily: vars.fonts.body,
  fontSize: "1rem",
  fontWeight: "bold",
  color: vars.colors.theme,
  background: vars.colors.white,
  border: "1px solid",
  padding: "0.3rem 1rem",
  ":hover": { color: vars.colors.white, background: vars.colors.theme },
});
