import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    background: "#FFFFFF",
    height: "600px",
    backgroundColor: theme.palette.primary.contrastText,
    backgroundImage: "url('/hero-section-background.png')",
    paddingLeft: theme.spacing(24),
    paddingRight: theme.spacing(24),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      flexDirection: "column",
      height: "250px",
    },
  },
  lhs: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "flex-start",
    },
  },
  rhs: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  heroTextSection: {
    // maxWidth: 342,
    margin: theme.spacing(4, 0, 4, 0),
    display: "flex",
    position: "relative",
  },
  cta: {
    paddingRight: theme.spacing(6),
    paddingLeft: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  watchLogo: {
    width: 82,
    height: 82,
    position: "absolute",
    bottom: 0,
    right: -80,
  },
});
