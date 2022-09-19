import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  main: {
    background: "#FFFFFF",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 18.75, 2, 18.75),
    boxShadow: "none",
    borderBottom: "1px solid #E0E0E0",
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1, 2, 1, 2),
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
  signIn: {
    marginLeft: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navbarItems: {
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuIcon: {
    color: theme.palette.primary.main,
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  activeNavbarItem: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
});
