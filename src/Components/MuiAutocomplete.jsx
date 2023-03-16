import { Autocomplete, Box, TextField } from '@mui/material'
import React from 'react'

function MuiAutocomplete() {
    const options = ['one', 'two', 'three']
    const [value, setValue] = React.useState(options[0])
    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue)
    }
  return (
    <Box padding={2}>
        <Autocomplete 
            options={options} 
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />} 
            value={value}
            onChange={handleChange}
            freeSolo
        />
    </Box>
  )
}

export default MuiAutocomplete