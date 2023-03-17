import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

function MuiProgress() {
  return (
    <Stack spacing={2} sx={{ width: '100%' }} margin={2} padding={2}>
        <LinearProgress />
        <LinearProgress color="secondary" />
        <LinearProgress variant="determinate" value={50} />
        <LinearProgress variant="determinate" value={75} color="secondary" />
        <LinearProgress variant="indeterminate" />
        <LinearProgress variant="indeterminate" color="secondary" />
        <LinearProgress variant="buffer" value={50} valueBuffer={75} />
        <LinearProgress variant="buffer" value={50} valueBuffer={75} color="secondary" />
        <LinearProgress variant="query" />
        <LinearProgress variant="query" color="secondary" />
        <CircularProgress />
        <CircularProgress color="secondary" />
        <CircularProgress variant="determinate" value={50} />
        <CircularProgress variant="determinate" value={75} color="secondary" />
        <CircularProgress variant="indeterminate" />
        <CircularProgress variant="indeterminate" color="secondary" />
        <CircularProgress variant="static" value={50} />
        <CircularProgress variant="static" value={75} color="secondary" />
        
    </Stack>

  )
}

export default MuiProgress