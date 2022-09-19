import { AppBar, Typography, Box, Button } from "@mui/material";
import classNames from "classnames";
import MenuIcon from "@mui/icons-material/Menu";

import { useStyles } from "./useStyles";
import BrandLogo from "@components/common/brand-logo";

const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.main}>
      <BrandLogo />
      <Box
        className={classNames(classes.alignItemsCenter, classes.navbarItems)}
      >
        <Typography
          variant="subtitle1"
          color="primary"
          className={classNames(classes.navarItem, classes.activeNavbarItem)}
        >
          Home
        </Typography>
        <Typography
          variant="subtitle1"
          color="grey1.main"
          className={classes.navarItem}
        >
          Self Assessment
        </Typography>
        <Typography
          variant="subtitle1"
          color="grey1.main"
          className={classes.navarItem}
        >
          Book a Lab test
        </Typography>
        <Typography
          variant="subtitle1"
          color="grey1.main"
          className={classes.navarItem}
        >
          Upload Report
        </Typography>
      </Box>

      <Box className={classes.alignItemsCenter}>
        <Typography variant="subtitle1" color="primary">
          Call 916989888
        </Typography>
        <Button variant="outlined" className={classes.signIn}>
          Sign In
        </Button>
      </Box>
      <MenuIcon className={classes.menuIcon} fontSize="large" />
    </AppBar>
  );
};

export default NavBar;
