import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    backgroundColor: theme.palette.primary.contrastText,
  },
  overCardStyle: {
    width: 555,
    height: 481,
    [theme.breakpoints.down("sm")]: {
      width: "160px",
      height: "160px",
      flexShrink: 0,
    },
  },
});
