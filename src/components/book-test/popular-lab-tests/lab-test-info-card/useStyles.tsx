import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    width: 360,
    maxHeight: 400,
    overflowY: "auto",
    backgroundColor: theme.palette.primary.contrastText,
    position: "relative",
    borderRadius: 10,
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(4),
  },
  curve: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  tag: {
    backgroundColor: "#F5EDB3",
    borderRadius: 8,
    padding: theme.spacing(1),
    color: "#000000",
    marginTop: theme.spacing(1),
    maxWidth: "max-content",
  },
  expandable: {
    color: theme.palette.primary.main,
  },
  bold: {
    fontWeight: 500,
  },
  listOfParams: {},
  priceAndBook: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing(2),
    position: "sticky",
    bottom: 0,
    right: 0,
    backgroundColor: theme.palette.primary.contrastText,
  },
});
