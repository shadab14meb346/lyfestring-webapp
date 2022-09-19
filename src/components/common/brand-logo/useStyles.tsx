import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {},
  logoText: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  alignItemsCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  navarItem: {
    marginRight: theme.spacing(4),
  },
});
