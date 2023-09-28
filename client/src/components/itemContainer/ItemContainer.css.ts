import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const background = style({
  width: "100%",
  height: "40%",
  background: vars.colors.nav,
  marginTop: "2rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const box = style({
  border: "1px solid black",
  width: "60vw",
  height: "40vh",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
