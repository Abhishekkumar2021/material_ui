import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material'
import { Send } from '@mui/icons-material'
function MuiTextfield() {
    const [value, setValue] = React.useState('');
  return (
    <Stack spacing={2} direction="row" padding={2}>
        <Stack spacing={2} direction="column">
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="filled-basic" label="Filled" variant="filled" />
            <TextField id="standard-basic" label="Standard" variant="standard" error={!value} value={value
            } onChange={(e)=> setValue(e.target.value)}/>
        </Stack>
        <Stack spacing={2} direction="column">
            <TextField id="seondary-outlined-basic" label="Outlined" variant="outlined" color="secondary" required />
            <TextField id="seondary-filled-basic" label="Filled" variant="filled" color="secondary" required />
            <TextField id="seondary-standard-basic" label="Standard" variant="standard" color="secondary" required helperText="Required" InputProps={{ readOnly: true }} />
        </Stack>
        <Stack spacing={2} direction="column">
            <TextField id="filled-basic"variant="filled" color="success" type='time' />
            <TextField id="filled-basic" variant="filled" color="success" type='date' />
            <TextField id="filled-basic"  variant="filled" color="success" type='datetime-local' />
        </Stack>
        <Stack spacing={2} direction="column">
            <TextField label="Weight" InputProps={{
                    startAdornment: <InputAdornment position="start">Kg</InputAdornment>
                }
            }
            />
            <TextField label="Amount" InputProps={{
                    endAdornment: <InputAdornment position="end">$</InputAdornment>
                }
            }
            />
            <TextField label="Amount" InputProps={{
                    endAdornment: <InputAdornment position="end"><Send/></InputAdornment>
                }
            }
            />
        </Stack>

    </Stack>
  )
}

export default MuiTextfield