import { Button, Typography } from "@mui/material";
import ROUTES from "src/routes";

import { useStyles } from "./useStyles";

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.lhs}>
        <div className={classes.clinicalValidatedTextSection}>
          <img src="/thumb-up-dynamic-color.png" className={classes.thumbsUp} />
          <div className={classes.textWrapper}>
            <Typography variant="h3" color="primary">
              Get free evidence-based clinical assessment
            </Typography>
          </div>
        </div>
        <div className={classes.heroTextSection}>
          <Typography variant="h1" color="CetaceanBlue.main">
            For conditions like irregular menstrual cycle, ache, excessive hair
            growth & hair loss
          </Typography>
        </div>
        <Button variant="contained" href={ROUTES.SELF_ASSESSMENT}>
          Assess Yourself
        </Button>
      </div>
      <div className={classes.rhs}>
        <img src="/hero-section-image.png" style={{ marginLeft: "100px" }} />
      </div>
    </div>
  );
};

export default HeroSection;
