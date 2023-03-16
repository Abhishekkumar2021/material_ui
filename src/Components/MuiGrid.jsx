import { Box, Grid } from '@mui/material'
import React from 'react'

function MuiGrid() {
  return (
    <Grid container spacing={2} margin={2}>
        <Grid item xs={3} >
            <Box padding={2} bgcolor="primary.main" >Box</Box>
        </Grid>
        <Grid item xs={9} >
            <Box padding={2} bgcolor="secondary.main" >Box</Box>
        </Grid>
        <Grid item xs={9} >
            <Box padding={2} bgcolor="success.main" >Box</Box>
        </Grid>
        <Grid item xs={3} >
            <Box padding={2} bgcolor="error.main" >Box</Box>
        </Grid>

        {/* Equally distribution */}
    </Grid>
    
  )
}

export default MuiGrid