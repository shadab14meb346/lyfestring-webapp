import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    background: "#FFFFFF",
    height: "600px",
    backgroundColor: theme.palette.primary.contrastText,
    backgroundImage: "url('/hero-section-background.png')",
    paddingLeft: theme.spacing(24),
    paddingRight: theme.spacing(12),
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  },
  textWrapper: {
    border: `3px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(3),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
  lhs: {},
  rhs: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  thumbsUp: {
    position: "absolute",
    left: -55,
    bottom: -30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  clinicalValidatedTextSection: {
    position: "relative",
    marginTop: theme.spacing(8),
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
    },
  },
  heroTextSection: {
    maxWidth: 681,
    margin: theme.spacing(4, 0, 4, 0),
  },
});
