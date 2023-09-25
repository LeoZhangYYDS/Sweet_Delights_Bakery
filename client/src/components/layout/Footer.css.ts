import { style } from "@vanilla-extract/css";

export const background = style({
  marginTop: "2rem",
  background: "Ivory",
  width: "100vw",
  height: "3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const footer = style({
  width: "60vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const text = style({
  textAlign: "center",
  flexGrow: "1",
});
export const links = style({
  display: "flex",
  gap: "1rem",
});
export const icon = style({
  color: "red",
});
