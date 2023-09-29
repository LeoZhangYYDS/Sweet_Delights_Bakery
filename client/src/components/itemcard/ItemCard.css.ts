import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const card = style({
  height: "40vh",
  border: "2px solid #E97777",
  ":hover": { border: "2px solid #900C3F" },
});
export const img = style({
  height: "85%",
  width: "100%",
  objectFit: "cover",
});
export const name = style({
  height: "10%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
});
export const price = style({
  height: "5%",
  display: "flex",
  alignItems: "center",
  justifyContent: "start",
});
