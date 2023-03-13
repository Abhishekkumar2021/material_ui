import React from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

function MuiSelect() {
  const [value, setValue] = React.useState([]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Box width={250}>
         <TextField
    labelId="label-1"
    id="demo-simple-select"
    fullWidth
    value={value}
    SelectProps={
      {
        multiple: true,
      }
    }
    select
    onChange={handleChange}
    label="Age"
    helperText="Please select your age"
  >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
  </TextField> 
    </Box>
  )
}

export default MuiSelect