import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const styledLabel = style({
  display: "none",
});

export const styledInput = style({
  margin: "2rem 0",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: "0.9em",
  letterSpacing: "0.1em",
  outline: "none",
  border: "2px solid rgba(0, 0, 0, 0.02)",
  borderRadius: "1rem",
  color: "",
  background: "rgba(136, 126, 126, 0.04)",
  transition: "all 0.2s",

  ":focus": {
    boxShadow: "none",
    transform: "scale(1.01)",
  },
});

export const userNav = style({
  fontFamily: vars.fonts.body,
  marginTop: "1rem",
  paddingTop: "1rem",
  fontSize: "0.9em",
  fontStyle: "italic",
});

export const link = style({
  textDecoration: "none",
  color: vars.colors.theme,
  ":hover": { textDecoration: "underline" },
});
