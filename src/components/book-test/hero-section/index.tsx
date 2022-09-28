import { Button, Typography } from "@mui/material";

import { useStyles } from "./useStyles";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.lhs}>
        <div>
          <div className={classes.heroTextSection}>
            <div>
              <Typography variant="h1" color="CetaceanBlue.main">
                Get tested
              </Typography>
              <Typography variant="h1" color="CetaceanBlue.main">
                at home
              </Typography>
              <Typography variant="h1" color="CetaceanBlue.main">
                IN 60 MINUTES
              </Typography>
            </div>
            <div className={classes.watchLogo}>
              <img src="/watch-logo.png" />
            </div>
          </div>
          <Button variant="contained" className={classes.cta}>
            Book A Lab Test
          </Button>
        </div>
      </div>
      <div className={classes.rhs}>
        <img
          src="/indian-doctor-with-test-tube.png"
          style={{ marginLeft: "100px" }}
        />
      </div>
    </div>
  );
};

export default HeroSection;
