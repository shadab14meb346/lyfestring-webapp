import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(12.5),
    paddingLeft: theme.spacing(18.75),
    paddingRight: theme.spacing(18.75),
  },
  content: {
    marginTop: theme.spacing(5),
    display: "flex",
    justifyContent: "space-between",
  },
  item: {
    width: 360,
    height: 312,
    padding: theme.spacing(2.5),
    position: "relative",
    borderRadius: 10,
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
});
