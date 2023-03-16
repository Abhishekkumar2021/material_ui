import React, { useState } from 'react'
import { ExpandMore } from '@mui/icons-material'
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'

function MuiAccordion() {
  const [expanded, setExapnded] = useState(0);

  const handleChange = (isExpanded, panel) => {
    setExapnded(isExpanded ? panel : 0);
  }

  return (
    <Box width={500} height={500} margin={2}>
        <Accordion expanded = {expanded === 1} onChange={(event, isExpanded) => handleChange(isExpanded, 1)} >
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" component="div"
                gutterBottom
                >
                    Material UI Accordion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded = {expanded === 2} onChange={(event, isExpanded) => handleChange(isExpanded, 2)}>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" component="div"
                gutterBottom
                >
                    Material UI Accordion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </Typography>
            </AccordionDetails>
        </Accordion>
        <Accordion expanded = {expanded === 3} onChange={(event, isExpanded) => handleChange(isExpanded, 3)}>
            <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h5" component="div"
                gutterBottom
                >
                    Material UI Accordion
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
  )
}

export default MuiAccordion