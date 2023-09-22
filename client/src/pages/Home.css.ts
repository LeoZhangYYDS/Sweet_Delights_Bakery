import { style } from "@vanilla-extract/css";
export const box = style({
  background: "black",
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  zIndex: "-1",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const image = style({
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(/img/4.jpg)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  position: "fixed",
  zIndex: "-2",
  opacity: "0.7",
});
export const text = style({
  color: "snow",
  textAlign: "center",
});
