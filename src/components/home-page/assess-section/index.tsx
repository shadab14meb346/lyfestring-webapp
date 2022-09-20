import { Typography } from "@mui/material";

import { useStyles } from "./useStyles";

interface IAssessSectionProps {
  title: string;
  children: any;
}
const AssessSection = ({ title, children }: IAssessSectionProps) => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Typography variant="h2" color="grey1.main">
        {title}
      </Typography>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default AssessSection;
