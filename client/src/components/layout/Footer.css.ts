import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const background = style({
  background: vars.colors.nav,
  width: "100%",
  height: "5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 -4px 6px -6px gray",
});
export const footer = style({
  width: "60vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const text = style({
  fontFamily: vars.fonts.body,
  color: vars.colors.icons,
  fontSize: "0.8rem",
  textAlign: "center",
  flexGrow: "1",
  "@media": {
    "screen and (max-width:600px)": { fontSize: "0.7rem" },
  },
});
export const links = style({
  display: "flex",
  gap: "1rem",
  justifyContent: "center",
  alignItems: "center",
});
export const icon = style({
  color: vars.colors.icons,
});
