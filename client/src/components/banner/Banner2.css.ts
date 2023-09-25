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
  display: "flex",
  border: "1px solid red",
});
export const img = style({
  width: "50%",
  height: "100%",
  objectFit: "cover",
});

export const box2 = style({
  background: "BurlyWood",
  opacity: "0.93",
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const text = style({
  color: "white",
  width: "20vw",
  height: "auto",
  marginBottom: "1rem",
});
export const box3 = style({ width: "68%" });
