import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import classNames from "classnames";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";

import { useStyles } from "./useStyles";
import ROUTES from "src/routes";
import { useState } from "react";

const DrawerMenu = () => {
  const classes = useStyles();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };
  //TODO: we can use the same logic in the navar index file
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
      case ROUTES.SIGN_IN:
        return router?.asPath === ROUTES.SIGN_IN;
    }
  };
  const allMenuItems = [
    { name: "Home", route: ROUTES.HOME },
    { name: "Self Assessment", route: ROUTES.SELF_ASSESSMENT },
    { name: "Book A Lab Test", route: ROUTES.BOOK_A_LAB_TEST },
    { name: "Upload Report", route: ROUTES.UPLOAD_REPORT },
    { name: "Sign In", route: ROUTES.SIGN_IN },
  ];

  return (
    <>
      <MenuIcon
        className={classes.menuIcon}
        fontSize="large"
        onClick={toggleDrawer}
      />

      <Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            {allMenuItems.map((item, index) => (
              <>
                <ListItem key={item.name} disablePadding>
                  <ListItemButton href={item.route}>
                    <ListItemText
                      primary={item.name}
                      className={classNames(
                        classes.navarItem,
                        isNavBarItemActive(item.route)
                          ? classes.activeNavbarItem
                          : classes.inActiveNavbarItem
                      )}
                    />
                  </ListItemButton>
                </ListItem>
                {allMenuItems.length - 1 !== index && <Divider />}
              </>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
