import { Rating, Stack } from '@mui/material'
import React from 'react'
import { Favorite } from '@mui/icons-material'

function MuiRating() {
    const [value, setValue] = React.useState(2)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    return (
        <Stack spacing={2} padding={2}>
            <Rating name="read-only" value={value} onChange={handleChange} precision={0.5} size="large" icon={<Favorite fontSize="inherit"  color='secondary'/>} emptyIcon={<Favorite fontSize="inherit" />} highlightSelectedOnly />

        </Stack>
    )
}

export default MuiRating