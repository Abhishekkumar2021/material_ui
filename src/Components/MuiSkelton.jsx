import { Skeleton, Stack } from '@mui/material'
import React from 'react'

function MuiSkelton() {
  return (
    <Stack spacing={2} width={250} margin={2} padding={2}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} animation="wave" />
    </Stack>
  )
}

export default MuiSkelton