import { Typography } from "@mui/material";
import LabTestInfoCard from "./lab-test-info-card";

import { useStyles } from "./useStyles";

const PopularLabTests = () => {
  const classes = useStyles();
  const oneTestData = {
    title: "Male Fertility Test",
    label: "Fasting not required",
    description:
      " There are many reasons that cause infertility. Low sperm production and poor sperm function are major c...",
    panelType: "Basic",
    reportDeliveryTime: "72 hours/ 3 days",
    nameAndNumberOfParams: {
      number: 8,
      names: [
        "Semen volume",
        "Total Sperm Number",
        "Sperm Concentration",
        "Vitality",
      ],
    },
    price: 650,
  };
  return (
    <div className={classes.main}>
      <Typography variant="h2" color="grey1.main">
        Popular Lab Tests
      </Typography>
      <div className={classes.cards}>
        <LabTestInfoCard {...oneTestData} />
        <LabTestInfoCard {...oneTestData} />
        <LabTestInfoCard {...oneTestData} />
        <LabTestInfoCard {...oneTestData} />
        <LabTestInfoCard {...oneTestData} />
        <LabTestInfoCard {...oneTestData} />
      </div>
    </div>
  );
};

export default PopularLabTests;
