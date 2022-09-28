import { makeStyles } from "@mui/styles";
import theme from "src/style-system/theme";

export const useStyles = makeStyles({
  navarItem: {
    "&:hover": {
      fontWeight: 500,
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
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
  inActiveNavbarItem: {
    textDecoration: "none",
    color: theme.palette.grey1.main,
  },
});
