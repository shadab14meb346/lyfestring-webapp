import { Button, Typography } from "@mui/material";
import classNames from "classnames";
import { CSSProperties } from "react";

import { useStyles } from "./useStyles";

interface IAssessCardProps {
  title: string;
  backgroundImage: string;
  styles?: CSSProperties;
  ctaText?: string;
  className?: string;
}
const AssessCard = ({
  title,
  backgroundImage,
  styles,
  ctaText = "Take Assessment",
  className = "",
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
      <Button variant="contained" className={classes.button}>
        {ctaText}
      </Button>
    </div>
  );
};

export default AssessCard;
