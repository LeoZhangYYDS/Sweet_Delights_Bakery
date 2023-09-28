import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";
export const error = style({
  fontFamily: vars.fonts.brand,
  width: "100vw",
  height: "91.3vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "4rem",
});

export const text = style({
  marginBottom: "2rem",
});
