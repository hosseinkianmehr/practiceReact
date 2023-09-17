import { TextField, Stack ,Button} from '@mui/material'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../store/hook'
import { login } from '../../store/auth'

export const LoginPage = () => {
  const { register, handleSubmit } = useForm()
  const dispatch = useAppDispatch()
  const handleclick = (data) => {
    //console.log(JSON.stringify(data))
    dispatch(login( data )) 
  }
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
        {...register('username',)}
          id="outlined-multiline-flexible"
          label="username"
          multiline
          maxRows={4}
        />
        <TextField
        {...register('password',)}
          id="outlined-multiline-flexible"
          label="password"
          multiline
          maxRows={4}
          />
        <Button onClick={handleSubmit(handleclick)}>login</Button>
          </Stack>

    </Stack>
  )
}
