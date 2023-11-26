import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const productGrid = style({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: "1rem",
  border: "2px solid gray",
  padding: "rem",
  background: vars.colors.cart,
  color: "gary",
  transition: "all 0.1s ease-in",

  ":hover": {
    backgroundColor: vars.colors.nav,
    borderColor: "black",
  },
});

export const productSnapshot = style({
  width: "100%",
  height: "100%",
  aspectRatio: "1 / 1",
  objectFit: "contain",
});

export const productDetails = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "1rem 1rem",
});

export const productTitle = style({
  fontSize: "1rem",
  fontWeight: "border",
  color: "gary",

  textAlign: "center",
});

export const productPrice = style({
  marginTop: "0.4rem",
  color: "gary",
});
export const x = style({
  border: "0",
  background: "none",
  width: "100%",
  textAlign: "end",
});
