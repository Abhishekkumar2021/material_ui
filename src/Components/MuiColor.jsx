import React from 'react'
import { MuiColorInput } from 'mui-color-input'

const MuiColor = () => {
  const [color, setColor] = React.useState('#ffffff')

  const handleChange = (color) => {
    setColor(color)
  }

  return (
    <MuiColorInput value={color} onChange={handleChange} variant="outlined" margin="normal" />
  )
}

export default MuiColor