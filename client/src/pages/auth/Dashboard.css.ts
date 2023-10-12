import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const text = style({
  fontFamily: vars.fonts.body,
});

export const buttonBox = style({
  marginTop: "2rem",
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
});
