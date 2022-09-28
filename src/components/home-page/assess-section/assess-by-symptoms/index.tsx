import ROUTES from "src/routes";
import AssessSection from "..";
import AssessCard from "../assess-card";

import { useStyles } from "./useStyles";

const AssessBySymptoms = () => {
  const classes = useStyles();
  const assessBySymptomsData = [
    {
      title: "Irregular Menstrual Cycle",
      backgroundImage: "assess-by-irregular-menstrual-cycle.png",
      ctaRoute: ROUTES.SELF_ASSESSMENT,
    },
    {
      title: "Excessive Hair Growth",
      backgroundImage: "assess-by-excessive-hair-growth.png",
      backgroundColor: "#F4BDC7",
      ctaRoute: ROUTES.SELF_ASSESSMENT,
    },
    {
      title: "Anxiety & Depression",
      backgroundImage: "assess-by-depression-&-anxiety.png",
      backgroundColor: "#D5C8E9",
      ctaRoute: ROUTES.SELF_ASSESSMENT,
    },
  ];
  return (
    <>
      <AssessSection title="Assess by symptoms">
        {assessBySymptomsData.map((item) => {
          return (
            <AssessCard
              key={item.title}
              {...item}
              ctaText="Assess Me"
              styles={{
                backgroundColor: item.backgroundColor,
              }}
            />
          );
        })}
      </AssessSection>
    </>
  );
};

export default AssessBySymptoms;
