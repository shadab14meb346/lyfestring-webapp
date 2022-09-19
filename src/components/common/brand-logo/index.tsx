import { Typography, Box } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useStyles } from "./useStyles";

const BrandLogo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Typography variant="h3" color="primary">
        <Box display="flex" alignItems="center">
          <BusinessCenterIcon fontSize="large" />{" "}
          <div className={classes.logoText}>Logo</div>
        </Box>
      </Typography>
    </Box>
  );
};

export default BrandLogo;
