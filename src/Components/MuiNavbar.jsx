import { CatchingPokemon } from '@mui/icons-material'
import { AppBar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'

function MuiNavbar() {
  return (
    <AppBar position="static">
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
            >
                <CatchingPokemon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <Stack direction="row" spacing={2}>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Register</Button>
            </Stack>
        </Toolbar>
    </AppBar>
  )
}

export default MuiNavbar