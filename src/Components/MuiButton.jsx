import React from 'react'
import {Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

function MuiButton() {
  const [toggles, setToggles] = React.useState([])
  const handleToggle = (event, newToggles) => {
    console.log(newToggles)
    setToggles(newToggles)
  }
  return (
    <Stack spacing={4} margin={2} >
      <Stack spacing={1} direction="row">
        <Button variant="contained">Default</Button>
        <Button variant="outlined">Default</Button>
        <Button variant="text">Default</Button>
      </Stack>
      <Stack spacing={1} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
      </Stack>
      <Stack spacing={1} direction="row">
        <Button variant="contained" startIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation disableRipple>
          Send
        </Button>
        <IconButton aria-label="delete" color="primary">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Button Group */}
      <Stack spacing={1} direction="row">
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={1} direction="row">
        <ToggleButtonGroup size="small" value={toggles} exclusive onChange={handleToggle}>
          <ToggleButton value="left" aria-label="left aligned">
            <SendIcon />
          </ToggleButton>
          <ToggleButton value="center" aria-label="centered">
            <SendIcon />
          </ToggleButton>
          <ToggleButton value="right" aria-label="right aligned">
            <SendIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  )
}

export default MuiButton