import { AppBar, Typography, Box, Button } from "@mui/material";
import classNames from "classnames";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

import { useStyles } from "./useStyles";
import BrandLogo from "@components/common/brand-logo";
import Link from "@components/Link";
import ROUTES from "src/routes";

const NavBar = () => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <AppBar className={classes.main} position="static">
      <BrandLogo />
      <Box
        className={classNames(classes.alignItemsCenter, classes.navbarItems)}
      >
        <Link
          href={ROUTES.HOME}
          className={classNames(
            classes.navarItem,
            router?.asPath === ROUTES.HOME
              ? classes.activeNavbarItem
              : classes.inActiveNavbarItem
          )}
        >
          Home
        </Link>

        <Link
          href={ROUTES.SELF_ASSESSMENT}
          className={classNames(
            classes.navarItem,
            router?.asPath === ROUTES.SELF_ASSESSMENT
              ? classes.activeNavbarItem
              : classes.inActiveNavbarItem
          )}
        >
          Self Assessment
        </Link>
        <Link
          href={ROUTES.BOOK_A_LAB_TEST}
          className={classNames(
            classes.navarItem,
            router?.asPath === ROUTES.BOOK_A_LAB_TEST
              ? classes.activeNavbarItem
              : classes.inActiveNavbarItem
          )}
        >
          Book a Lab test
        </Link>
        <Link
          href={ROUTES.UPLOAD_REPORT}
          className={classNames(
            classes.navarItem,
            router?.asPath === ROUTES.UPLOAD_REPORT
              ? classes.activeNavbarItem
              : classes.inActiveNavbarItem
          )}
        >
          Upload Report
        </Link>
      </Box>

      <Box className={classes.alignItemsCenter}>
        <Typography variant="subtitle1" color="primary">
          Call 916989888
        </Typography>
        <Button
          variant="outlined"
          className={classes.signIn}
          href={ROUTES.SIGN_IN}
        >
          Sign In
        </Button>
      </Box>
      <MenuIcon className={classes.menuIcon} fontSize="large" />
    </AppBar>
  );
};

export default NavBar;
