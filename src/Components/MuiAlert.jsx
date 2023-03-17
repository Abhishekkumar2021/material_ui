import {  Error } from '@mui/icons-material'
import { Alert, AlertTitle, Box, Button } from '@mui/material'
import React from 'react'

function MuiAlert() {
    const [open, setOpen] = React.useState(true)
    const handleClose = () => {
        console.log('close')
        setOpen(false)
    }
  return (
    <Box sx={{ width: '100%' }} padding={2} margin={2}>
        <Alert 
            severity="error"
            icon={<Error/>}
            sx={{ width: '100%' }}
            action={
                <Button color="inherit" size="small" onClick={handleClose}>
                    UNDO
                </Button>
            }
        >
            <AlertTitle>Error</AlertTitle>
            This is an error alert — check it out!
        </Alert>
    </Box>
  )
}

export default MuiAlert