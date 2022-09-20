import { Typography } from "@mui/material";
import classNames from "classnames";

import { useStyles } from "./useStyles";

interface IAssessSectionProps {
  title: string;
  children: any;
  titleAlignment?: string;
  className?: string;
}
const AssessSection = ({
  title,
  children,
  titleAlignment = "left",
  className = "",
}: IAssessSectionProps) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.main, className)}>
      <Typography
        variant="h2"
        color="grey1.main"
        //@ts-ignore
        textAlign={titleAlignment}
      >
        {title}
      </Typography>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default AssessSection;
