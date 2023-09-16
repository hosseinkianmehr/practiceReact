import { Box, TextField, Stack ,Button} from '@mui/material'
import React from 'react'

export const LoginPage = () => {
  return (
    <Stack
    height={'100vh'}
    direction="column"
  justifyContent="center"
  alignItems="center"
  spacing={3}>
    
     
          <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}>
        <TextField
          id="outlined-multiline-flexible"
          label="username"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="password"
          multiline
          maxRows={4}
          />
        <Button>login</Button>
          </Stack>

    </Stack>
  )
}
