import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))",
  gap: "1rem",
  width: "100%",
});
