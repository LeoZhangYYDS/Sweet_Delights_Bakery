import { style } from "@vanilla-extract/css";
export const nav = style({
  opacity: "0.8",
  ":hover": {
    opacity: "1",
  },
});
export const link = style({
  color: "black",
  marginRight: "30px",
  textDecoration: "none",
  ":hover": {
    color: "FireBrick",
    textDecoration: "underline",
  },
});

export const logoBox = style({
  display: "flex",
  alignItems: "center",
});
export const logo = style({
  width: "63px",
  height: "55px",
  marginRight: "8px",

  "@media": {
    "screen and (max-width:520px)": {
      display: "none",
    },
  },
});
export const logo2 = style({
  width: "250px",
  height: "45px",
  "@media": {
    "screen and (max-width:520px)": {
      width: "200px",
      height: "35px",
    },
  },
});
