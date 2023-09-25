import { style } from "@vanilla-extract/css";
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
  width: "60vw",
  textAlign: "start",
});

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
  background: "BurlyWood",
  opacity: "0.93",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const text = style({
  color: "white",
  textAlign: "center",
  width: "20vw",
  height: "auto",
  marginBottom: "1rem",
});
