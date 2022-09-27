import { Typography } from "@mui/material";
import Item from "./Item";

import { useStyles } from "./useStyles";

const HowItWorks = () => {
  const classes = useStyles();
  const stepsContent = [
    {
      title: "Book your tests",
      description:
        "Just fill out your details on our easy-to-use order form and choose the time slot that works for you",
      step: 1,
      backgroundColor: "#FFF5DB",
    },
    {
      title: "Collection in 60 minutes",
      description:
        "Our professional eMedic will collect your sample with proper uniform & pre-sealed kits",
      step: 2,
      backgroundColor: "#E4F5F6",
    },
    {
      title: "Instant reports",
      description:
        "Your reports will be dispatched in record time  to your number. (Blood - 6 hours, Covid - 9 hours)",
      step: 3,
      backgroundColor: "#F0F2FF",
    },
  ];
  return (
    <div className={classes.main}>
      <Typography variant="h2" color="grey1.main" textAlign="center">
        How it works
      </Typography>
      <div className={classes.content}>
        {stepsContent.map((step) => (
          <Item {...step} key={step.title} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
