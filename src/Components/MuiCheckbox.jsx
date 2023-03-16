import React from 'react'
import { Box, Checkbox, FormControlLabel } from '@mui/material'
import { BookmarkAddRounded } from '@mui/icons-material'
import { BookmarkBorderOutlined } from '@mui/icons-material'

function MuiCheckbox() {
    const [checked, setChecked] = React.useState(true)
    const handleChecked = (event) => {
        console.log(event.target.checked)
        setChecked(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel
            control={<Checkbox name="checkedA" onChange={handleChecked} checked={checked} />}
            label="Uncontrolled"
        />
        <FormControlLabel
            control={<Checkbox checked name="checkedB" />}
            label="Controlled"
        />
        <FormControlLabel
            control={<Checkbox indeterminate name="checkedC" />}
            label="Indeterminate"
        />
        <FormControlLabel
            control={<Checkbox disabled name="checkedD" />}
            label="Disabled"
        />
        <FormControlLabel
            control={<Checkbox disabled checked name="checkedE" />}
            label="Disabled"
        />
        <FormControlLabel
            control={<Checkbox defaultChecked indeterminate name="checkedF" />}
            label="Indeterminate"
        />
        <FormControlLabel
            control={<Checkbox defaultChecked name="checkedG" />}
            label="Uncontrolled"
        />
        <FormControlLabel
            control={<Checkbox color="default" name="checkedH" />}
            label="Custom color"
        />
        <FormControlLabel
            control={<Checkbox defaultChecked size="small" name="checkedI" />}
            label="Small"
        />
        <FormControlLabel
            control={<Checkbox icon={<BookmarkBorderOutlined />} checkedIcon={<BookmarkAddRounded />} name="checkedJ" />}
            label="Custom icon"
        />     
    </Box>
  )
}

export default MuiCheckbox