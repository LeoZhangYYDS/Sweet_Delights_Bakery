import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";
export const styledLabel = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.theme,
});
export const file = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.theme,
});

export const img = style({
  width: "20%",
  margin: "1rem auto",
});
