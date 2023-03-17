import { Snackbar, Button } from "@mui/material"
import { useState } from "react"

function MuiSnackbar() {
    const [open, setOpen] = useState(false)
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
  return (
    <>
        <Button variant="outlined" onClick={() => setOpen(true)}>
            Open success snackbar
        </Button>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            message="Note archived"
            onClose={handleClose}
            action={
                <Button color="inherit" size="small" onClick={() => setOpen(false)}>
                    UNDO
                </Button>
            }
        />

    </>
  )
}

export default MuiSnackbar