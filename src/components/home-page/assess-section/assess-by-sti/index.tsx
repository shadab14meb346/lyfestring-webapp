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
    },
    {
      title: "HPV",
      image: "hpv.png",
      backgroundColor: "#ECEBE9",
    },
    {
      title: "Gnorrohea",
      image: "gnorrohea.png",
      backgroundColor: "#E7E1D7",
    },
  ];
  return (
    <>
      <AssessSection title="Assess by STIs">
        {assessBySymptomsData.map(({ title, image, backgroundColor }) => {
          return (
            <AssessCard
              key={title}
              title={title}
              ctaText="Book Test"
              backgroundImage={image}
              styles={{
                backgroundColor,
              }}
            />
          );
        })}
      </AssessSection>
    </>
  );
};

export default AssessBySTIs;
