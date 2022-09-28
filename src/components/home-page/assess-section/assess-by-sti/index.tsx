import ROUTES from "src/routes";
import AssessSection from "..";
import AssessCard from "../assess-card";

import { useStyles } from "./useStyles";

const AssessBySTIs = () => {
  const classes = useStyles();
  const assessBySymptomsData = [
    {
      title: "HIV",
      image: "hiv.png",
      backgroundColor: "#EAEBE6",
      ctaRoute: ROUTES.BOOK_A_LAB_TEST,
    },
    {
      title: "HPV",
      image: "hpv.png",
      backgroundColor: "#ECEBE9",
      ctaRoute: ROUTES.BOOK_A_LAB_TEST,
    },
    {
      title: "Gnorrohea",
      image: "gnorrohea.png",
      backgroundColor: "#E7E1D7",
      ctaRoute: ROUTES.BOOK_A_LAB_TEST,
    },
  ];
  return (
    <>
      <AssessSection title="Assess by STIs">
        {assessBySymptomsData.map(
          ({ title, image, backgroundColor, ctaRoute }) => {
            return (
              <AssessCard
                key={title}
                title={title}
                ctaText="Book Test"
                backgroundImage={image}
                styles={{
                  backgroundColor,
                }}
                ctaRoute={ctaRoute}
              />
            );
          }
        )}
      </AssessSection>
    </>
  );
};

export default AssessBySTIs;
