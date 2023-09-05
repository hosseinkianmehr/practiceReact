import { Box, TextField } from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Box
    sx={{backgroundColor:'red', width:'100vh',height:'1000vh'}}>
      <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Multiline"
          multiline
          maxRows={4}
        />
      <div>LoginPage</div>
    </Box>
  )
}
