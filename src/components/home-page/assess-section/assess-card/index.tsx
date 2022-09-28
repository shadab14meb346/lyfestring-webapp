import { Button, Typography } from "@mui/material";
import classNames from "classnames";
import { CSSProperties } from "react";
import ROUTES from "src/routes";

import { useStyles } from "./useStyles";

interface IAssessCardProps {
  title: string;
  backgroundImage: string;
  styles?: CSSProperties;
  ctaText?: string;
  className?: string;
  ctaRoute: string;
}
const AssessCard = ({
  title,
  backgroundImage,
  styles,
  ctaText = "Take Assessment",
  className = "",
  ctaRoute,
}: IAssessCardProps) => {
  const classes = useStyles();
  return (
    <div
      className={classNames(classes.main, className)}
      style={{
        backgroundImage: `url('/${backgroundImage}')`,
        ...styles,
      }}
    >
      <Typography variant="h3" className={classes.title} color="grey1.main">
        {title}
      </Typography>
      <Button variant="contained" className={classes.button} href={ctaRoute}>
        {ctaText}
      </Button>
    </div>
  );
};

export default AssessCard;
