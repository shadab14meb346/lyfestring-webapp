import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
const fontFamily = ["Poppins", "sans-serif"].join(",");

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#008DB9",
      contrastText: "#F5FCFD",
    },
    secondary: {
      main: "#9FC131",
      contrastText: "#469178",
    },
    error: {
      main: red.A400,
    },
    grey1: {
      main: "#333333",
      light: "",
      dark: "",
      contrastText: "",
    },
    CetaceanBlue: {
      main: "#090236",
      light: "",
      dark: "",
      contrastText: "",
    },
  },
  typography: {
    fontFamily: fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "48px",
      lineHeight: "58px",
      // [defaultTheme.breakpoints.down("sm")]: {
      // 	fontSize: "34px",
      // 	lineHeight: "39px",
      // },
    },
    h2: {
      fontWeight: 600,
      fontSize: "32px",
      lineHeight: "42px",
      // [defaultTheme.breakpoints.down("sm")]: {
      // 	fontSize: "28px",
      // 	lineHeight: "32px",
      // },
    },
    h3: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "26px",
      },
    },
    h4: {
      fontWeight: 600,
      fontSize: "18px",
      lineHeight: "26px",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "20px",
        lineHeight: "26px",
      },
    },
    h5: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "18px",
    },
    body2: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
    },
    subtitle1: {
      fontSize: "14px",
      lineHeight: "18px",
      weight: 500,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "28px",
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
