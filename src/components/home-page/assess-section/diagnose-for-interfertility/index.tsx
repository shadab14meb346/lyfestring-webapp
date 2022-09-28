import ROUTES from "src/routes";
import AssessSection from "..";
import AssessCard from "../assess-card";

import { useStyles } from "./useStyles";

const DiagnoseForInfertility = () => {
  const classes = useStyles();
  const diagnosticsTypes = [
    {
      title: "Male Infertility",
      image: "male-infertility.png",
      ctaRoute: ROUTES.BOOK_A_LAB_TEST,
    },
    {
      title: "Female Infertility",
      image: "female-infertility-image.png",
      // backgroundColor: "#F4BDC7",
      ctaRoute: ROUTES.BOOK_A_LAB_TEST,
    },
  ];
  return (
    <>
      <AssessSection
        title="Diagnostic test for infertility"
        titleAlignment="center"
        className={classes.main}
      >
        {diagnosticsTypes.map(({ title, image, ctaRoute }) => {
          return (
            <AssessCard
              key={title}
              title={title}
              backgroundImage={image}
              ctaText="Book Test"
              ctaRoute={ctaRoute}
              className={classes.overCardStyle}
            />
          );
        })}
      </AssessSection>
    </>
  );
};

export default DiagnoseForInfertility;
