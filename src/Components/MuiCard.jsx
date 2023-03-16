import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function MuiCard() {
  return (
    <Box width={500} height={500} margin={2}>
        <Card elevation={2}>
            <CardMedia
                component="img"
                height="140"
                image="https://source.unsplash.com/random"
                alt="random image"
            />
            <CardContent>
                <Typography variant="h5" component="div"
                gutterBottom
                >
                    Material UI Card
                </Typography>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>

        </Card>
    </Box>
  )
}

export default MuiCard