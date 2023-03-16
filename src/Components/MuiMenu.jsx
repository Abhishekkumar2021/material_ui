import { ArrowDropDown } from '@mui/icons-material'
import { Box, Button, Menu, MenuItem } from '@mui/material'
import React from 'react'

function MuiMenu() {

    const [anchorEl, setAnchorEl] = React.useState(null)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const open = Boolean(anchorEl)

  return (
    <>
    <Box>
        <Button 
            id="basic-button" 
            aria-controls="basic-menu" 
            aria-haspopup="true" 
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            color='secondary'
            endIcon={<ArrowDropDown />}
            >
            Open Menu
        </Button>
    </Box>
    <Box sx={{ width: 300 }}>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
    </Box>
    </>


  )
}

export default MuiMenu