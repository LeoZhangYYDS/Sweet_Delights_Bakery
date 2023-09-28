import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const background = style({
  marginTop: "2rem",
  width: "100%",
  background: "",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

// export const heading = style({
//   color: vars.colors.title,
//   font: vars.fonts.body,
//   width: "60vw",
//   textAlign: "center",
//   fontSize: "1.5rem",
//   background: vars.colors.boxColor,
//   "@media": {
//     "screen and (max-width:983px)": { fontSize: "1.1rem" },
//     "screen and (max-width:567px)": { fontSize: "0.8rem" },
//   },
// });

export const box1 = style({
  width: "60vw",
  height: "40vh",
  position: "relative",
});

export const img = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

export const box2 = style({
  width: "25vw",
  height: "30vh",
  position: "absolute",
  top: "5vh",
  right: "5vw",
  background: vars.colors.boxColor,
  opacity: "0.85",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const text1 = style({
  color: vars.colors.white,
  fontFamily: vars.fonts.brand,
  textAlign: "center",
  width: "20vw",
  height: "auto",
  marginBottom: "1rem",

  "@media": {
    "screen and (max-width:983px)": { fontSize: "1.3rem" },
    "screen and (max-width:567px)": { fontSize: "1rem" },
  },
});
export const text2 = style({
  color: vars.colors.white,
  fontFamily: vars.fonts.body,
  textAlign: "center",
  width: "20vw",
  height: "auto",
  marginBottom: "1rem",
  "@media": {
    "screen and (max-width:983px)": { fontSize: "0.8rem" },
    "screen and (max-width:567px)": { display: "none" },
  },
});
