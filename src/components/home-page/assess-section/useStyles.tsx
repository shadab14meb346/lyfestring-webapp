import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(12.5),
    paddingLeft: theme.spacing(18.75),
    paddingRight: theme.spacing(18.75),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 2),
    },
  },
  children: {
    marginTop: theme.spacing(5),
    display: "flex",
    gap: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(2),
    },
    width: "100%",
    overflow: "scroll",
  },
});
