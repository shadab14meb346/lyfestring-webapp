import "@mui/material/styles/createPalette";

declare module "@mui/material/styles" {
  interface Palette {
    grey1: Palette["primary"];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    grey1?: Palette["primary"];
  }
}
