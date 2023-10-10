import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const card = style({
  height: "40vh",
  background: vars.colors.nav,
  ":hover": { transform: "scale(1.03)", transition: " 0.4s" },
});
export const img = style({
  height: "32vh",
  width: "100%",
  objectFit: "cover",
});

export const content = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.icons,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const name = style({
  height: "4vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const price = style({
  height: "4vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
