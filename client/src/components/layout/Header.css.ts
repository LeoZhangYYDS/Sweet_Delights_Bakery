import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";
export const background = style({
  background: vars.colors.nav,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  boxShadow: "0 4px 6px -6px gray",
  width: "100%",
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
    "screen and (max-width:1400px)": {
      width: "100%",
      marginTop: "2rem",
    },
  },
});

export const icon = style({ color: vars.colors.icons });
