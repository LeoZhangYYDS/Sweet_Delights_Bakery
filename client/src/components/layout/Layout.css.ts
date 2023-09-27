import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  background: vars.colors.body,
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});
