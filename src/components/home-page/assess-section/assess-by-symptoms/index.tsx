import AssessSection from "..";
import AssessCard from "../assess-card";

import { useStyles } from "./useStyles";

const AssessBySymptoms = () => {
  const classes = useStyles();
  const assessBySymptomsData = [
    {
      title: "Irregular Menstrual Cycle",
      image: "assess-by-irregular-menstrual-cycle.png",
    },
    {
      title: "Excessive Hair Growth",
      image: "assess-by-excessive-hair-growth.png",
      backgroundColor: "#F4BDC7",
    },
    {
      title: "Anxiety & Depression",
      image: "assess-by-depression-&-anxiety.png",
      backgroundColor: "#D5C8E9",
    },
  ];
  return (
    <>
      <AssessSection title="Assess by symptoms">
        {assessBySymptomsData.map(({ title, image, backgroundColor }) => {
          return (
            <AssessCard
              key={title}
              title={title}
              backgroundImage={image}
              styles={{
                backgroundColor,
              }}
              ctaText="Assess me"
            />
          );
        })}
      </AssessSection>
    </>
  );
};

export default AssessBySymptoms;
