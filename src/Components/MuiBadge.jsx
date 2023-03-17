import { Avatar, Badge, Stack } from '@mui/material'
import React from 'react'

function MuiBadge() {
  return (
    <Stack direction="row" spacing={2} padding={2} marg
    in={2}>
        <Badge badgeContent={4} color="primary">
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </Badge>
        <Badge badgeContent={4} color="primary">
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </Badge>
        <Badge badgeContent={4} color="primary">
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </Badge>
        <Badge badgeContent={4} color="primary">
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
        </Badge>

    </Stack>
  )
}

export default MuiBadge