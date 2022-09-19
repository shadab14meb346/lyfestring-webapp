import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
const fontFamily = ["Poppins", "sans-serif"].join(",");

const defaultTheme = createTheme();
const theme = createTheme({
  palette: {
    primary: {
      main: "#008DB9",
    },
    secondary: {
      main: "#9FC131",
      contrastText: "#469178",
    },
    error: {
      main: red.A400,
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
      // [defaultTheme.breakpoints.down("sm")]: {
      // 	fontSize: "24px",
      // 	lineHeight: "32px",
      // },
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "30px",
      // [defaultTheme.breakpoints.down("sm")]: {
      // 	fontSize: "18px",
      // 	lineHeight: "24px",
      // },
    },
    body2: {
      fontFamily: "Spoof-Regular",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "24px",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "16px",
        lineHeight: "21px",
      },
    },
    subtitle1: {
      fontFamily: "Spoof-Medium",
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "24px",
    },
    subtitle2: {
      fontFamily: "Spoof-Medium",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "15px",
      [defaultTheme.breakpoints.down("sm")]: {
        fontSize: "11px",
      },
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true,
        disableFocusRipple: true,
      },
    },
  },
});

export default theme;
