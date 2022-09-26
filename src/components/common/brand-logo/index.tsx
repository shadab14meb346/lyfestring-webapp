import { Typography, Box } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useStyles } from "./useStyles";
import classNames from "classnames";

interface IBrandLogoProps {
  className?: string;
}
const BrandLogo = ({ className }: IBrandLogoProps) => {
  const classes = useStyles();
  return (
    <Box className={classNames(classes.main, className)}>
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
