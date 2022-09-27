import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(12.5),
    paddingLeft: theme.spacing(18.75),
    paddingRight: theme.spacing(18.75),
  },
  cards: {
    marginTop: theme.spacing(5),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
