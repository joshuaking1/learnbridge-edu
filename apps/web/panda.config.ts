import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The directory where the artifacts will be generated
  outdir: "src/styled-system",

  // Enable JSX components
  jsxFramework: "react",

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          brand: {
            primary: { value: "#fd6a3e" }, // Our vibrant orange
            secondary: { value: "#022e7d" }, // Our deep blue
            light: { value: "#f0f4ff" }, // A light accent blue
          },
          text: {
            primary: { value: "#1A202C" },
            secondary: { value: "#4A5568" },
          },
        },
        fonts: {
          body: { value: "system-ui, sans-serif" },
          heading: { value: "Georgia, serif" },
        },
      },
    },
  },
});
