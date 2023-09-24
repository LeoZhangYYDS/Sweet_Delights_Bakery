import { style } from "@vanilla-extract/css";

export const footer = style({
  background: "rgb(0,0,0,0.3)",
  width: "100vw",
  position: "fixed",
  bottom: "0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
export const box = style({
  width: "75vw",
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "9fr 10fr 5fr 1fr 0.5fr 1fr",
});

export const item = style({
  color: "white",
  opacity: "0.7",
  textAlign: "center",

  ":hover": {
    opacity: "1",
  },
  "@media": {
    "screen and (max-width:690px)": {
      fontSize: "10px",
    },
  },
});
