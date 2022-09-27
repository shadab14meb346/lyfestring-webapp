import { Typography } from "@mui/material";

import { useStyles } from "./useStyles";

interface IItemProp {
  title: string;
  step: 1 | 2 | 3 | number;
  description: string;
  backgroundColor: string;
}
const Item = ({ title, step, description, backgroundColor }: IItemProp) => {
  const classes = useStyles();
  return (
    <div className={classes.item} style={{ backgroundColor }}>
      <img src={`${step}.png`} className={classes.stepImg} />
      <div className={classes.inner}>
        <img
          src={`/step-${step}-icon.png`}
          style={{
            width: 100,
            height: 100,
          }}
        />
        <div className={classes.stepContent}>
          <Typography variant="h3">{title}</Typography>
          <Typography
            variant="subtitle1"
            textAlign="center"
            className={classes.mt2}
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className={classes.box} />
    </div>
  );
};

export default Item;
