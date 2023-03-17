import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import React from 'react'

function MuiLoadingButton() {
  return (
    <Stack spacing={2} width={250} margin={2} padding={2}>
        <LoadingButton variant="contained" loading>
            Loading
        </LoadingButton>
        <LoadingButton variant="contained" loading loadingPosition="start">
            Loading
        </LoadingButton>
    </Stack>
  )
}

export default MuiLoadingButton