import { Paper } from '@mui/material'
import React from 'react'

function MuiPaper() {
  return (
    <Paper sx={{ p: 2, margin: 2, width: 500, height: 500}}
    elevation={2}
    >
        <h1>Material UI Paper</h1>
    </Paper>
  )
}

export default MuiPaper