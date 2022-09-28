import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    padding: theme.spacing(12.5, 18.75),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 2),
    },
  },
  content: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  item: {
    width: 360,
    height: 312,
    padding: theme.spacing(2.5),
    position: "relative",
    borderRadius: 10,
    [theme.breakpoints.down("sm")]: {
      width: 330,
      marginBottom: theme.spacing(2.5),
    },
  },
  inner: {
    width: "100%",
    height: "100%",
    border: "1px solid #4F4F4F",
    padding: theme.spacing(1),
    paddingTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  stepImg: {
    position: "absolute",
    top: -10,
    left: -20,
    zIndex: 1,
    [theme.breakpoints.down("sm")]: {
      // width: 330,
      maxWidth: 30,
      height: "auto",
      left: 0,
    },
  },
  step1Img: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: 20,
      height: "auto",
    },
  },
  box: {
    height: "100px",
    width: "60px",
    backgroundColor: "inherit",
    position: "absolute",
    top: 0,
    left: 0,
  },
  stepContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  mt2: {
    marginTop: theme.spacing(2),
  },
  stepIcon: {
    width: 100,
    height: "auto",
  },
});
