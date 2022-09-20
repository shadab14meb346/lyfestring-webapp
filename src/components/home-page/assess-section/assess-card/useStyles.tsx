import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    width: "360px",
    height: "312px",
    borderRadius: 10,
    position: "relative",
  },
  title: {
    maxWidth: 162,
    padding: theme.spacing(4),
  },
  button: {
    marginLeft: theme.spacing(4),
    position: "absolute",
    bottom: theme.spacing(4),
  },
});
