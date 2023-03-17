import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'
import React from 'react'

function MuiDialog() {
    const [open, setOpen] = React.useState(false);
  return (
    <>
    <Button variant="outlined" onClick={() => setOpen(true)}>
        Open Dialog
    </Button>
    <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>
            Dialog Title
        </DialogTitle>
        <DialogContent>
            <DialogContentText>
                Dialog Content
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={() => setOpen(false)}>
                Cancel
            </Button>
            <Button autoFocus>
                Ok
            </Button>
        </DialogActions>
    </Dialog>
        
    </>
  )
}

export default MuiDialog