import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const box = style({
  margin: "7rem 0",
  width: "60vw",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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

  width: "60vw",
});
export const title = style({
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "1.5rem",
  marginTop: "2rem",
});
export const category = style({
  width: "100%",
  margin: "1rem 0 2rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "screen and (max-width:662)": {
      display: "flex",
      flexDirection: "column",
    },
  },
});
