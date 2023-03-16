import { Stack, Link } from '@mui/material'
import React from 'react'

function MuiLink() {
  return (
    <Stack spacing={2} margin={2}>
        <Link href="#" underline="hover">
            Link
        </Link>
        <Link href="#" color="inherit">
            {'color="inherit"'}
        </Link>
        <Link href="#" variant="body2">
            {'variant="body2"'}
        </Link>
    </Stack>
  )
}

export default MuiLink