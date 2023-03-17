import { Mail } from '@mui/icons-material'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function MuiList() {
  return (
    <Box sx={{ width: '100%' }} margin={2} padding={2}>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary="Inbox 1" secondary="Secondary text" />
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary="Inbox 1" />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <ListItemAvatar>
                        <Avatar>
                            <Mail />
                        </Avatar>
                    </ListItemAvatar>
                </ListItemIcon>
                <ListItemText primary="Inbox 1" />
            </ListItem>
            <Divider />
            <ListItem>
                <ListItemIcon>
                    <Mail />
                </ListItemIcon>
                <ListItemText primary="Inbox 1" />
            </ListItem>

        </List>
    </Box>
             

  )
}

export default MuiList