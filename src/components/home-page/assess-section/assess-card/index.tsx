import { Button, Typography } from "@mui/material";
import { CSSProperties } from "react";

import { useStyles } from "./useStyles";

interface IAssessCardProps {
  title: string;
  backgroundImage: string;
  styles?: CSSProperties;
}
const AssessCard = ({ title, backgroundImage, styles }: IAssessCardProps) => {
  const classes = useStyles();
  return (
    <div
      className={classes.main}
      style={{
        backgroundImage: `url('/${backgroundImage}')`,
        ...styles,
      }}
    >
      <Typography variant="h3" className={classes.title} color="grey1.main">
        {title}
      </Typography>
      <Button variant="contained" className={classes.button}>
        Take Assessment
      </Button>
    </div>
  );
};

export default AssessCard;
