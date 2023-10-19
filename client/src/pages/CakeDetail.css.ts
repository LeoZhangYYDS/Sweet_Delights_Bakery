import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const box = style({
  width: "65%",
  display: "flex",

  flexDirection: "row",
});
export const left = style({
  marginTop: "9rem",
  width: "50%",
  height: "65%",
  display: "flex",
  flexDirection: "row",
});
export const mid = style({
  width: "10%",
  height: "80%",
});
export const right = style({
  marginTop: "9rem",
  width: "40%",
  height: "80%",
  display: "flex",
  flexDirection: "column",
});
export const img = style({
  width: "100%",
  height: "85%",
  objectFit: "cover",
  borderRadius: "3px",
});
export const rightTop = style({
  fontFamily: vars.fonts.body,
});
export const name = style({
  fontWeight: "bold",
  marginBottom: "1.5rem",
  color: vars.colors.text,
});
export const price = style({
  fontSize: "1.5rem",
  color: vars.colors.icons,
  marginBottom: "1.5rem",
});
export const description = style({
  marginBottom: "3rem",
  color: vars.colors.text,
});
export const text = style({
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: vars.colors.icons,
  marginBottom: "2rem",
});
export const rightBottom = style({
  fontFamily: vars.fonts.body,
});
export const button = style({ width: "100%" });
export const text2 = style({
  fontSize: "0.85rem",
  margin: "1.5rem 0",
  color: vars.colors.text,
});
export const buttonBox = style({
  width: "40%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
