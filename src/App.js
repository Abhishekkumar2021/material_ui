import React from "react";
import { Routes, Route } from "react-router-dom";
import MuiTypography from "./Components/MuiTypography";
import MuiButton from "./Components/MuiButton";
import Home from "./Components/Home";
import { Button, Stack } from "@mui/material";
import MuiTextfield from "./Components/MuiTextfield";
import MuiSelect from "./Components/MuiSelect";
import MuiRadiobutton from "./Components/MuiRadiobutton";
import MuiCheckbox from "./Components/MuiCheckbox";
import MuiSwitch from "./Components/MuiSwitch";
import MuiRating from "./Components/MuiRating";
import MuiAutocomplete from "./Components/MuiAutocomplete";
import MuiBox from "./Components/MuiBox";
import MuiStack from "./Components/MuiStack";
import MuiGrid from "./Components/MuiGrid";
import MuiPaper from "./Components/MuiPaper";
import MuiCard from "./Components/MuiCard";
import MuiAccordion from "./Components/MuiAccordion";
import MuiImageList from "./Components/MuiImageList";
import MuiNavbar from "./Components/MuiNavbar";
import MuiMenu from "./Components/MuiMenu";
import MuiLink from "./Components/MuiLink";
import MuiBreadCrumbs from "./Components/MuiBreadCrumbs";
import MuiDrawer from "./Components/MuiDrawer";
import MuiSpeedDial from "./Components/MuiSpeedDial";
import MuiBottomNavigation from "./Components/MuiBottomNavigation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="typography" element={<MuiTypography />} />
        <Route path="button" element={<MuiButton />} />
        <Route path="/textfield" element={<MuiTextfield />} />
        <Route path="/select" element={<MuiSelect />} />
        <Route path="/radio" element={<MuiRadiobutton />} />
        <Route path="/checkbox" element={<MuiCheckbox />} />
        <Route path="/switch" element={<MuiSwitch />} />
        <Route path="/rating" element={<MuiRating />} />
        <Route path="/autocomplete" element={<MuiAutocomplete />} />
        <Route path="/box" element={<MuiBox />} />
        <Route path="/stack" element={<MuiStack />} />
        <Route path="/grid" element={<MuiGrid />} />
        <Route path="/paper" element={<MuiPaper />} />
        <Route path="/card" element={<MuiCard />} />
        <Route path="/accordion" element={<MuiAccordion />} />
        <Route path="/imagelist" element={<MuiImageList />} />
        <Route path="/navbar" element={<MuiNavbar />} />
        <Route path="/menu" element={<MuiMenu />} />
        <Route path="/link" element={<MuiLink />} />
        <Route path="/breadcrumbs" element={<MuiBreadCrumbs />} />
        <Route path="/drawer" element={<MuiDrawer />} />
        <Route path="/speeddial" element={<MuiSpeedDial />} />
        <Route path="/bottomnavigation" element={<MuiBottomNavigation />} />

        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>

      {/* Home will contains all the Links */}
      <Stack direction="row" spacing={2} flexWrap="wrap" gap={1}>
        <Button variant="contained" color="primary" href="/">
          Home
        </Button>
        <Button variant="contained" color="primary" href="/typography">
          Typography
        </Button>
        <Button variant="contained" color="primary" href="/button">
          Button
        </Button>
        <Button variant="contained" color="primary" href="/textfield">
          Textfield
        </Button>
        <Button variant="contained" color="primary" href="/select">
          Select
        </Button>
        <Button variant="contained" color="primary" href="/radio">
          Radio
        </Button>
        <Button variant="contained" color="primary" href="/checkbox">
          Checkbox
        </Button>
        <Button variant="contained" color="primary" href="/switch">
          Switch
        </Button>
        <Button variant="contained" color="primary" href="/rating">
          Rating
        </Button>
        <Button variant="contained" color="primary" href="/autocomplete">
          Autocomplete
        </Button>
        <Button variant="contained" color="primary" href="/box">
          Box
        </Button>
        <Button variant="contained" color="primary" href="/stack">
          Stack
        </Button>
        <Button variant="contained" color="primary" href="/grid">
          Grid
        </Button>
        <Button variant="contained" color="primary" href="/paper">
          Paper
        </Button>
        <Button variant="contained" color="primary" href="/card">
          Card
        </Button>
        <Button variant="contained" color="primary" href="/accordion">
          Accordion
        </Button>
        <Button variant="contained" color="primary" href="/imagelist">
          ImageList
        </Button>
        <Button variant="contained" color="primary" href="/navbar">
          Navbar
        </Button>
        <Button variant="contained" color="primary" href="/menu">
          Menu
        </Button>
        <Button variant="contained" color="primary" href="/link">
          Link
        </Button>
        <Button variant="contained" color="primary" href="/breadcrumbs">
          Breadcrumbs
        </Button>
        <Button variant="contained" color="primary" href="/drawer">
          Drawer
        </Button>
        <Button variant="contained" color="primary" href="/speeddial">
          SpeedDial
        </Button>
        <Button variant="contained" color="primary" href="/bottomnavigation">
          BottomNavigation
        </Button>
      </Stack>
    </div>
  );
}

export default App;
