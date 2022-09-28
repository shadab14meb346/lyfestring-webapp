import { AppBar, Typography, Box, Button } from "@mui/material";
import classNames from "classnames";
import { useRouter } from "next/router";

import { useStyles } from "./useStyles";
import BrandLogo from "@components/common/brand-logo";
import Link from "@components/Link";
import ROUTES from "src/routes";
import DrawerMenu from "./drawer-menu";

const NavBar = () => {
  const classes = useStyles();
  const router = useRouter();
  //TODO: we can use the same logic in the drawer
  const isNavBarItemActive = (href: ROUTES) => {
    switch (href) {
      case ROUTES.HOME:
        return router?.asPath === ROUTES.HOME;
      case ROUTES.SELF_ASSESSMENT:
        return router?.asPath === ROUTES.SELF_ASSESSMENT;
      case ROUTES.BOOK_A_LAB_TEST:
        return router?.asPath === ROUTES.BOOK_A_LAB_TEST;
      case ROUTES.UPLOAD_REPORT:
        return router?.asPath === ROUTES.UPLOAD_REPORT;
    }
  };

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
            isNavBarItemActive(ROUTES.HOME)
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
            isNavBarItemActive(ROUTES.SELF_ASSESSMENT)
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
            isNavBarItemActive(ROUTES.BOOK_A_LAB_TEST)
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
            isNavBarItemActive(ROUTES.UPLOAD_REPORT)
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
      <DrawerMenu />
    </AppBar>
  );
};

export default NavBar;
