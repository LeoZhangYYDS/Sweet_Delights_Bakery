import { createGlobalTheme } from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Blinker, apple-system, sans-serif",
    body: "Montserrat, apple-system, sans-serif",
  },
  colors: {
    // Semantic tokens
    nav: "#FAF8F1",
    icons: "#900C3F",
    theme: "#E97777",
    white: "#F8F6F4",
    boxColor: "#ECA869",
    boxColor2: "#D3756B",
    text: "#1d2d44",
  },
});

export const vars = { ...root };
