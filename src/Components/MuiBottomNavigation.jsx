import { Favorite, LocationOn, Restore } from '@mui/icons-material'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import React from 'react'

function MuiBottomNavigation() {
    const [value, setValue] = React.useState(0)

    return (
        <BottomNavigation sx={{width: '100%', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1000}} showLabels value={value} onChange={(event, newValue) => {setValue(newValue)}}>
            <BottomNavigationAction label="Recents" icon={<Restore />} />
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOn />} />
        </BottomNavigation>

    )
}

export default MuiBottomNavigation