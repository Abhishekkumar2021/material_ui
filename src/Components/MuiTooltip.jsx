import { Add } from '@mui/icons-material'
import { Box, Fab, Tooltip } from '@mui/material'
import React from 'react'

function MuiTooltip() {
  return (
    <Box sx={{ width: 500 }}>
        <Tooltip title="Add">
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>
        <Tooltip title="Add" arrow enterDelay={500} leaveDelay={200}>
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>
        <Tooltip title="Add" arrow placement="top">
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>
        <Tooltip title="Add" arrow placement="right">
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>
        <Tooltip title="Add" arrow placement="bottom">
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>
        <Tooltip title="Add" arrow placement="left">
            <Fab color="primary" aria-label="add">
                <Add />
            </Fab>
        </Tooltip>

        </Box>
  )
}

export default MuiTooltip