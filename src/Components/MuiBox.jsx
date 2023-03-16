import { Box } from '@mui/material'
import React from 'react'

function MuiBox() {
  return (
    <Box sx={{ bgcolor: 'primary.main', 
        color: 'primary.contrastText', 
        p: 2,
        m: 2,
        borderRadius: 1,
        boxShadow: 1,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: 'primary.dark',
            color: 'primary.contrastText',
            boxShadow: 3,
        },
    }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, illum!
    </Box>
  )
}

export default MuiBox