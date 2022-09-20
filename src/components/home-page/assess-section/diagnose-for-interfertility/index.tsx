import AssessSection from "..";
import AssessCard from "../assess-card";

import { useStyles } from "./useStyles";

const DiagnoseForInfertility = () => {
  const classes = useStyles();
  const diagnosticsTypes = [
    {
      title: "Male Infertility",
      image: "male-infertility.png",
    },
    {
      title: "Female Infertility",
      image: "female-infertility-image.png",
      // backgroundColor: "#F4BDC7",
    },
  ];
  return (
    <>
      <AssessSection
        title="Diagnostic test for infertility"
        titleAlignment="center"
        className={classes.main}
      >
        {diagnosticsTypes.map(({ title, image }) => {
          return (
            <AssessCard
              key={title}
              title={title}
              backgroundImage={image}
              ctaText="Book Test"
              className={classes.overCardStyle}
            />
          );
        })}
      </AssessSection>
    </>
  );
};

export default DiagnoseForInfertility;
