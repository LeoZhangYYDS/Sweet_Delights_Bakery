import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const app = style({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

export const img = style({
  objectFit: "cover",
  zIndex: "-10",
  opacity: "0.35",
  width: "100vw",
  height: "100vh",
  position: "fixed",
});
export const appContent = style({
  minHeight: "91.3vh",
  display: "flex",
  justifyContent: "center",
});
