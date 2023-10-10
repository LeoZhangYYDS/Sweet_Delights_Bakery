import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const box = style({
  margin: "7rem 0",
  width: "60vw",
});
export const content = style({
  marginTop: "2rem",
  color: vars.colors.icons,
  fontFamily: vars.fonts.brand,
  display: "flex",
  flexDirection: "column",
});
export const icon = style({
  display: "flex",
  alignItems: "center",
});
export const title = style({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.5rem",
});
