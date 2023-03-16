import { Box, FormControlLabel, Switch } from "@mui/material";
import React from "react";

function MuiSwitch() {
  const [checked, setChecked] = React.useState(true);
  const handleChange = (event) => {
    console.log(event.target.checked);
    setChecked(event.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Switch"
        control={<Switch checked={checked} onChange={handleChange} />}
      />
    </Box>
  );
}

export default MuiSwitch;
