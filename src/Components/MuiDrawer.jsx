import React from 'react'
import { Box, Drawer, IconButton} from '@mui/material'
import { Menu } from '@mui/icons-material'

function MuiDrawer() {
    const [open, setOpen] = React.useState(false)

    return (
        <>
            <IconButton size='large' onClick={() => setOpen(true)} edge="start" color="inherit" aria-label="menu">
                <Menu />
            </IconButton>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <Box width={250} textAlign={'center'} role="presentation">
                    <h1>Drawer</h1>
                </Box>
            </Drawer>
        </>
    )
}

export default MuiDrawer