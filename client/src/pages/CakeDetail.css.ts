import { style } from "@vanilla-extract/css";
import { vars } from "../styles/themes.css";

export const box = style({
  width: "65%",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  "@media": {
    "screen and (max-width:950px)": { flexDirection: "column", height: "100%" },
  },
});
export const left = style({
  marginTop: "9rem",
  width: "50%",
  height: "75vh",
  display: "flex",
  flexDirection: "row",
  "@media": {
    "screen and (max-width:950px)": {
      width: "100%",

      flexDirection: "column",
    },
  },
});
export const mid = style({
  width: "10%",
  height: "70%",
  "@media": {
    "screen and (max-width:950px)": { display: "none" },
  },
});
export const right = style({
  marginTop: "9rem",
  marginBottom: "1rem",
  width: "40%",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  "@media": {
    "screen and (max-width:950px)": {
      margin: "1rem 0",
      width: "100%",
      height: "auto",
    },
  },
});
export const img = style({
  width: "100%",
  height: "85%",
  objectFit: "contain",
  borderRadius: "3px",
  "@media": {
    "screen and (max-width:950px)": {
      marginTop: "1rem",
      width: "55vw",
      height: "65vh",
    },
  },
});
export const rightTop = style({
  fontFamily: vars.fonts.body,
});
export const name = style({
  fontWeight: "bold",
  marginBottom: "1.5rem",
  color: vars.colors.text,
  "@media": {
    "screen and (max-width:950px)": {
      display: "none",
    },
  },
});

export const name1 = style({
  display: "none",

  "@media": {
    "screen and (max-width:950px)": {
      display: "contents",
      fontWeight: "bold",
      color: vars.colors.text,
      fontFamily: vars.fonts.body,
    },
  },
});
export const price = style({
  fontSize: "1.5rem",
  color: vars.colors.icons,
  marginBottom: "1.5rem",
});
export const description = style({
  marginBottom: "3rem",
  color: vars.colors.text,
});
export const text = style({
  fontSize: "0.9rem",
  fontWeight: "bold",
  color: vars.colors.icons,
  marginBottom: "2rem",
});
export const rightBottom = style({
  fontFamily: vars.fonts.body,
});
export const box1 = style({
  display: "flex",
  justifyContent: "flex-start",
});

export const button = style({ width: "100%" });
export const text2 = style({
  fontSize: "0.85rem",
  margin: "1.5rem 0",
  color: vars.colors.text,
});
export const buttonBox = style({
  width: "40%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});
