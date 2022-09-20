import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    marginTop: theme.spacing(12.5),
    marginBottom: theme.spacing(12.5),
    paddingLeft: theme.spacing(18.75),
    paddingRight: theme.spacing(18.75),
  },
  children: {
    marginTop: theme.spacing(5),
    display: "flex",
    gap: theme.spacing(6),
  },
});
