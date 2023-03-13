import React from 'react'
import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from '@mui/material'

function MuiRadiobutton() {
    const [value, setValue] = React.useState('1-2');
    const handleChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value);
    };
  return (
    <Box width={450} padding={2}>
        <FormControl component="fieldset">
            <FormLabel id="form-label">
                Years of experience
            </FormLabel>
            <RadioGroup
                aria-label="years of experience"
                name="years of experience"
                value={value}
                onChange={handleChange}
                row
            >
                <FormControlLabel
                    value="1-2"
                    control={<Radio />}
                    label="1-2"
                />
                <FormControlLabel
                    value="3-5"
                    control={<Radio />}
                    label="3-5"
                />
                <FormControlLabel
                    value="6-10"
                    control={<Radio />}
                    label="6-10"
                />
                <FormControlLabel
                    value="10+"
                    control={<Radio />}
                    label="10+"
                />
            </RadioGroup>
        </FormControl>
    </Box>        
  )
}

export default MuiRadiobutton