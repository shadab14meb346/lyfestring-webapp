import BrandLogo from "@components/common/brand-logo";
import { Button, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import { useStyles } from "./useStyles";
import Link from "@components/Link";
import ROUTES from "src/routes";

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0} className={classes.main} component="footer">
      <Grid item xs={12} lg={3}>
        <BrandLogo />
        <Box mt={2}>
          <Typography variant="subtitle1" color="grey1">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography>
        </Box>
        <Box display="flex" marginTop={3}>
          <Box marginRight={3}>
            <TwitterIcon className={classes.twitter} />
          </Box>
          <Box marginRight={3}>
            <LinkedInIcon className={classes.linkedIn} />
          </Box>
          <Box marginRight={3}>
            <FacebookIcon className={classes.facebook} />
          </Box>
          <EmailIcon color="primary" />
        </Box>
        <Box marginTop={4}>
          <Typography>©2022 lyfestring.com</Typography>
        </Box>
      </Grid>
      <Grid item xs={3} lg={3} className={classes.navContainer}>
        <Box marginTop={5} display="flex" flexDirection="column">
          <Link href={ROUTES.HOME}>Home</Link>
          <Link href={ROUTES.BOOK_A_LAB_TEST}>Book a test</Link>
          <Link href={ROUTES.SELF_ASSESSMENT}>Self Assessment</Link>
        </Box>
      </Grid>
      <Grid item xs={3} lg={3}></Grid>
      <Grid item xs={3} lg={3}></Grid>
    </Grid>
  );
};

export default Footer;
