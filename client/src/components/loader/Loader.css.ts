import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const loadingBox = style({
  minHeight: "50vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const loadingSpinner = style({
  color: vars.colors.icons,
  width: "10rem !important",
  height: "10rem !important",
});
