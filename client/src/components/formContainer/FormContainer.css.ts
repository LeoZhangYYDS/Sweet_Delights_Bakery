import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const generalForm = style({
  minWidth: "60vw",
});

export const authForm = style({
  minWidth: "25vw",
});

export const container = style({
  marginTop: "8rem",
  minHeight: "76vh",
  display: "flex",
  flexDirection: "column",
});

export const leadCard = style({
  background: vars.colors.form,
  color: vars.colors.title,
  margin: "auto",
  padding: "2rem",
  borderRadius: "1rem",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
  textAlign: "center",
});

export const cardTitle = style({
  color: vars.colors.formHeading,
  paddingBottom: "1rem",
  fontSize: "2em",
  fontWeight: "bold",
});