import { style } from "@vanilla-extract/css";
export const background = style({
  background: "Ivory",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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
});

export const logo2 = style({
  marginLeft: "0.5rem",
  width: "16rem",
  height: "3rem",
});
export const box2 = style({
  display: "flex ",
  justifyContent: "end",
});
export const nav = style({
  width: "20vw",
  display: "flex",
  justifyContent: "space-between",
});
export const link = style({
  fontSize: "1rem",
  ":hover": {
    textDecoration: "underline",
  },
});
export const icon = style({ color: "red" });
