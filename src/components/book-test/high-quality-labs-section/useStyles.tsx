import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    paddingTop: theme.spacing(12.5),
    paddingBottom: theme.spacing(12.5),
    paddingLeft: theme.spacing(18.75),
    paddingRight: theme.spacing(18.75),
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(6, 2),
    },
  },
  accredited: {
    display: "flex",
    border: "1px solid #E0E0E0",
    borderRadius: 10,
    alignItems: "center",
    marginTop: theme.spacing(4),
    maxWidth: 300,
    backgroundColor: "#fff",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
  },
  bold: {
    fontWeight: 600,
  },
  title: {
    display: "flex",
    marginBottom: 2,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      marginBottom: theme.spacing(2),
      "& img": {
        width: 34,
        height: "auto",
        marginBottom: theme.spacing(2),
      },
    },
  },
  img1: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  img2: {
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      height: "auto",
    },
  },
  secondLineOfLabImages: {
    display: "flex",
    gap: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      gap: theme.spacing(2),
      marginTop: theme.spacing(2),
      "& img": {
        maxWidth: 150,
        height: "auto",
      },
    },
  },
  img5: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
});
