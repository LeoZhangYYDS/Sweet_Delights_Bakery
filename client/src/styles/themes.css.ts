import { createGlobalTheme } from "@vanilla-extract/css";

export const root = createGlobalTheme(":root", {
  fonts: {
    brand: "Roboto, apple-system, sans-serif",
    body: "Open Sans, apple-system, sans-serif",
  },
  colors: {
    // Semantic tokens
    nav: "#F6F4EB",
    body: "#FDFAF6",
    icons: "#F31559",
    title: "#213555",
    heading: "#F0F0F0",
    boxColor: "#9A3B3B",
    form: "#FDFAF6",
    formHeading: "#F31559",
    formText: "gray",
  },
});

export const vars = { ...root };
