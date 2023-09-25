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
  fontSize: "1.5rem",
  "@media": {
    "screen and (max-width:983px)": { fontSize: "1.1rem" },
    "screen and (max-width:567px)": { fontSize: "0.8rem" },
  },
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
export const text1 = style({
  color: "white",
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
  color: "white",
  textAlign: "center",
  width: "20vw",
  height: "auto",
  marginBottom: "1rem",
  "@media": {
    "screen and (max-width:983px)": { fontSize: "0.8rem" },
    "screen and (max-width:567px)": { display: "none" },
  },
});
