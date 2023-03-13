import React from 'react';
import { Routes, Route} from 'react-router-dom';
import MuiTypography from './Components/MuiTypography';
import MuiButton from './Components/MuiButton';
import Home from './Components/Home';
import { Button, Stack } from '@mui/material';
import MuiTextfield from './Components/MuiTextfield';
import MuiSelect from './Components/MuiSelect';
import MuiRadiobutton from './Components/MuiRadiobutton';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="typography" element={<MuiTypography />} />
        <Route path="button" element={<MuiButton />} />
        <Route path="/textfield" element={<MuiTextfield/>} />
        <Route path="/select" element={<MuiSelect/>} />
        <Route path="/radio" element={<MuiRadiobutton/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      {/* Home will contains all the Links */}
      <Stack direction="row" spacing={2} >
        <Button variant="contained" color="primary" href="/">Home</Button>
        <Button variant="contained" color="primary" href="/typography">Typography</Button>
        <Button variant="contained" color="primary" href="/button">Button</Button>
        <Button variant="contained" color="primary" href="/textfield">Textfield</Button>
        <Button variant="contained" color="primary" href="/select">Select</Button>
        <Button variant="contained" color="primary" href="/radio">Radio</Button>
      </Stack>


    </div>
  );
}

export default App;
