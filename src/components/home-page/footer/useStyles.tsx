import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    backgroundColor: theme.palette.primary.contrastText,
    paddingLeft: theme.spacing(18.75),
    paddingRight: theme.spacing(18.75),
    padding: theme.spacing(10, 18.75),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(3),
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
    // width: "50%",
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
  twitter: {
    color: "#1DA1F2",
  },
  linkedIn: {
    color: "#0077B7",
  },
  facebook: {
    color: "#475993",
  },
  navContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
