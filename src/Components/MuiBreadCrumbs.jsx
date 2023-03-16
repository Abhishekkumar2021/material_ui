import { NavigateNext } from '@mui/icons-material'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function MuiBreadCrumbs() {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
        <Breadcrumbs 
            aria-label="breadcrumb"
            separator={<NavigateNext fontSize="small" />}
            sx={{ mt: 2, mb: 2 }}
            maxItems={2}
            itemsAfterCollapse={1}
            itemsBeforeCollapse={1}
            expandText="Show path"
        >
            <Link underline="hover" color="inherit" href="/">
                Material-UI
            </Link>
            <Link
                underline="hover"
                color="inherit"
                href="/getting-started/installation/"
            >
                Core
            </Link>
            <Typography color="text.primary">Breadcrumb</Typography>
        </Breadcrumbs>
    </Box>

  )
}

export default MuiBreadCrumbs