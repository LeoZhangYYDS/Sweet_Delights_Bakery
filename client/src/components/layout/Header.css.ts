import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const background = style({
  background: vars.colors.nav,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 8px 6px -6px gray",
  width: "100vw",
  position: "fixed",
  zIndex: " 3",
});
export const box = style({
  width: "60vw",
});
export const logoBox = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const logo1 = style({
  width: "4.5rem",
  height: "4rem",
  "@media": {
    "screen and (max-width:700px)": {
      display: "none",
    },
  },
});

export const logo2 = style({
  marginLeft: "0.5rem",
  width: "16rem",
  height: "3rem",
  "@media": {
    "screen and (max-width:700px)": {
      width: "8rem",
      height: "1.4rem",
    },
  },
});
export const box2 = style({
  display: "flex ",
  justifyContent: "end",
});
export const nav = style({
  width: "20vw",
  display: "flex",
  justifyContent: "space-between",
  "@media": {
    "screen and (max-width:991px)": {
      width: "100%",
      marginTop: "2rem",
    },
  },
});
export const link = style({
  fontFamily: vars.fonts.body,
  fontSize: "1rem",
  ":hover": {
    textDecoration: "underline",
    color: vars.colors.icons,
  },
  "@media": {
    "screen and (max-width:991px)": {
      margin: "1rem 0",
      textAlign: "center",
    },
  },
});
export const icon = style({ color: vars.colors.icons });
