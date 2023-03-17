import { Avatar,  AvatarGroup,  Stack } from '@mui/material'
import React from 'react'

function MuiAvatar() {
  return (
    <Stack direction="row" spacing={2} >
        <AvatarGroup max={4}>
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
            <Avatar alt="Remy Sharp" src="https://source.unsplash.com/random" />
            <Avatar alt="Remy Sharp" src="https://randomuser.me/api/portraits/women/79.jpg" />
            <Avatar
                sx={{ bgcolor: 'primary.light' }}
            >AK</Avatar>
        </AvatarGroup>
    </Stack>
  )
}

export default MuiAvatar