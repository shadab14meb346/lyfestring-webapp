import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(12.5),
    paddingLeft: theme.spacing(18.75),
    paddingRight: theme.spacing(18.75),
    backgroundColor: theme.palette.primary.contrastText,
  },
  accredited: {
    display: "flex",
    border: "1px solid #E0E0E0",
    borderRadius: 10,
    alignItems: "center",
    marginTop: theme.spacing(4),
    maxWidth: 300,
    backgroundColor: "#fff",
  },
  bold: {
    fontWeight: 600,
  },
});
