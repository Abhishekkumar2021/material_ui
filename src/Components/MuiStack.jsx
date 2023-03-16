import { Box, Divider, Stack } from '@mui/material'
import React from 'react'

function MuiStack() {
  return (
    <Stack 
      spacing={2} 
      direction="row"
      margin={2}
      sx = {{
        width: '500px',
        height: '500px',
        border: '1px solid black',
      }}
      divider={<Divider orientation="vertical" flexItem />}

    >
      <Box sx={{ width: 100, height: 100, bgcolor: 'primary.main' }} />
      <Box sx={{ width: 100, height: 100, bgcolor: 'primary.light' }} />
    
    </Stack>
  )
}

export default MuiStack