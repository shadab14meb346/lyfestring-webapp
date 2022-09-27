import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useStyles } from "./useStyles";

interface ILabTestInfoCard {
  title: string;
  label: string;
  description: string;
  panelType: string;
  reportDeliveryTime: string;
  nameAndNumberOfParams: {
    number: number;
    names: string[];
  };
  price: number;
}
const LabTestInfoCard = ({
  title,
  description,
  label,
  nameAndNumberOfParams,
  panelType,
  price,
  reportDeliveryTime,
}: ILabTestInfoCard) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <img src="/curve.svg" className={classes.curve} />
      <Typography variant="h4" color="grey1.main">
        {title}
      </Typography>
      <div className={classes.tag}>
        <Typography variant="subtitle2">{label}</Typography>
      </div>
      <Box marginTop={1}>
        <Typography variant="subtitle2" color="grey1.main">
          {description}
          <span className={classes.expandable}>+Know More </span>
        </Typography>
      </Box>
      <Box marginTop={1}>
        <Typography variant="subtitle2" color="grey1.main">
          Panel type :<span className={classes.bold}> {panelType}</span>
        </Typography>
      </Box>
      <Box marginTop={1}>
        <Typography variant="subtitle2" color="grey1.main">
          Report delivery time :
          <span className={classes.bold}> {reportDeliveryTime}</span>
        </Typography>
      </Box>
      <Box marginTop={1}>
        <Typography variant="subtitle2" color="grey1.main">
          Name & no. of parameters:
          <span className={classes.bold}>
            {nameAndNumberOfParams?.number} Parameters
          </span>
        </Typography>
        <ul>
          {nameAndNumberOfParams?.names.map((name) => (
            <li key={name}>
              <Typography variant="subtitle2" color="grey1.main">
                Semen volume
              </Typography>
            </li>
          ))}
        </ul>
        <Box marginTop={1}>
          <Typography variant="subtitle2" color="primary.main">
            View All Parameters
          </Typography>
        </Box>
      </Box>
      <div className={classes.priceAndBook}>
        <Typography variant="h4" color="grey1.main">
          <span
            style={{
              fontWeight: 500,
              fontSize: "14px",
              lineHeight: "18px",
            }}
          >
            Rs.
          </span>
          {price}
        </Typography>
        <Button variant="contained">Book Test</Button>
      </div>
    </div>
  );
};

export default LabTestInfoCard;
