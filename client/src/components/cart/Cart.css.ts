import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/themes.css";

export const cartCanvas = style({
  transition: "all 0.6s ease-in-out",
  "@media": {
    "screen and (max-width: 700px)": {
      width: "100% !important",
    },
  },
});

export const cartHeader = style({
  fontFamily: vars.fonts.brand,
  background: vars.colors.cart,
});

export const cartTitle = style({
  marginTop: "1rem",
  fontSize: "1.1rem",
  fontWeight: "bolder",
  textTransform: "uppercase",
  color: vars.colors.icons,
});

export const cartBody = style({
  fontFamily: vars.fonts.body,
  backgroundColor: vars.colors.nav,
});

export const cartList = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const cartFooter = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  background: vars.colors.cart,
  padding: `1rem 1rem`,
  borderTop: `2px solid black`,
});

export const cartFooterTotal = style({
  fontSize: "1rem",
  fontFamily: vars.fonts.body,
  margin: 0,
});
