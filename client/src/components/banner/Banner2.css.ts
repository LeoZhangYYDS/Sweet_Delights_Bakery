import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const background = style({
  marginTop: "2rem",
  width: "100vw",
  background: "",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const heading = style({
  color: vars.colors.title,
  font: vars.fonts.body,
  width: "60vw",
  textAlign: "start",
  fontSize: "1.5rem",
  "@media": {
    "screen and (max-width:983px)": { fontSize: "1.1rem" },
    "screen and (max-width:567px)": { fontSize: "0.8rem" },
  },
});
export const box1 = style({
  width: "60vw",
  height: "40vh",
  display: "flex",
});
export const img = style({
  width: "50%",
  height: "100%",
  objectFit: "cover",
});

export const box2 = style({
  background: vars.colors.boxColor,
  opacity: "0.8",
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const text1 = style({
  color: vars.colors.heading,
  fontFamily: vars.fonts.brand,
  width: "20vw",
  height: "auto",
  marginBottom: "1rem",
  "@media": {
    "screen and (max-width:983px)": { fontSize: "1.3rem" },
    "screen and (max-width:567px)": { fontSize: "1rem" },
  },
});
export const text2 = style({
  color: vars.colors.heading,
  fontFamily: vars.fonts.body,
  width: "20vw",
  height: "auto",
  marginBottom: "1rem",
  "@media": {
    "screen and (max-width:983px)": { fontSize: "0.8rem" },
    "screen and (max-width:567px)": { display: "none" },
  },
});
export const box3 = style({ width: "68%" });
