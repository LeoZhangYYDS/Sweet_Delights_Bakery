import { style } from "@vanilla-extract/css";
export const background = style({
  marginTop: "1rem",
  width: "100vw",
  background: "",
  display: "flex",
  justifyContent: "center",
});

export const grid = style({
  width: "60vw",
  height: "60vh",
  display: "grid",
  gridTemplateColumns: "repeat(7, 1fr)",
  gridAutoRows: "repeat(6, 1fr)",
  gap: "1rem",
  "@media": {
    "screen and (max-width:1400px)": {
      gridTemplateColumns: "repeat(4, 1fr)",
      gridAutoRows: "repeat(4, 1fr)",
    },
  },
});

export const item1 = style({
  gridArea: "1/1/7/4",
  position: "relative",
  overflow: "hidden",
  "@media": {
    "screen and (max-width:1400px)": { gridArea: "1/1/3/3" },
  },
});
export const item2 = style({
  gridArea: "1/4/7/6",
  position: "relative",
  overflow: "hidden",
  "@media": {
    "screen and (max-width:1400px)": { gridArea: "1/3/3/5" },
  },
});
export const item3 = style({
  gridArea: "1/6/4/8",
  position: "relative",
  overflow: "hidden",
  "@media": {
    "screen and (max-width:1400px)": { gridArea: "3/1/5/3" },
  },
});
export const item4 = style({
  gridArea: "4/6/7/8",
  position: "relative",
  overflow: "hidden",
  "@media": {
    "screen and (max-width:1400px)": { gridArea: "3/3/5/5" },
  },
});
export const text = style({
  position: "absolute",
  bottom: "0.5rem",
  right: "0.5rem",
  color: "white",
  fontSize: "1.3rem",
  zIndex: "1",
  ":hover": {
    textDecoration: "underline",
  },
  "@media": {
    "screen and (max-width:1400px)": { fontSize: "1rem" },
  },
});
export const img = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",

  ":hover": {
    background: "black",
    opacity: "0.9",
    transform: "scale(1.08)",
    transition: "all 0.7s",
  },
});

export const cover = style({
  width: "100%",
  height: "100%",
  position: "absolute",
  background: "black",
  opacity: "0",
  transition: "opacity 0.8s",
  ":hover": {
    opacity: "0.2",
  },
});
