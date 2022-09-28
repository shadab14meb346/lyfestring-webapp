import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    width: "360px",
    height: "312px",
    borderRadius: 10,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "160px",
      height: "160px",
      flexShrink: 0,
      alignItems: "flex-start",
      padding: theme.spacing(1),
    },
  },
  title: {
    maxWidth: 162,
    [theme.breakpoints.down("sm")]: {
      maxWidth: 100,
    },
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
});
