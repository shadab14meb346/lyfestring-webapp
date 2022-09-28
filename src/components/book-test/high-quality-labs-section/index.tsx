import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useStyles } from "./useStyles";

const HighQualityLabsSection = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container spacing={6}>
        <Grid
          item
          xs={12}
          lg={4}
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Box className={classes.title}>
            <img src="/shield-icon.svg" />
            <Typography variant="h2" color="grey1.main" textAlign="center">
              High Quality Labs
            </Typography>
          </Box>
          <Typography variant="subtitle1" color="grey1.main" textAlign="left">
            Our team of qualified pathologists and lab technicians ensure that
            your samples are processed with the highest safety protocols so that
            all reports are absolutely accurate{" "}
          </Typography>
          <div className={classes.accredited}>
            <img src="/nabl-logo.svg" />
            <Box>
              <Typography variant="subtitle1">
                <span className={classes.bold}>NABL</span> Accredited
              </Typography>
              <Typography variant="subtitle1">
                <span className={classes.bold}>ICMR</span> Approved
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Box display="flex" gap={4}>
            <img
              src="/high-quality-lab-section-image-1.png"
              className={classes.img1}
            />
            <img
              src="/high-quality-lab-section-image-2.png"
              className={classes.img2}
            />
          </Box>
          <Box className={classes.secondLineOfLabImages}>
            <img src="/high-quality-lab-section-image-3.png" />
            <img src="/high-quality-lab-section-image-4.png" />

            <img
              src="/high-quality-lab-section-image-5.png"
              className={classes.img5}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HighQualityLabsSection;
