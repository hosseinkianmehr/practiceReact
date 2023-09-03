import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Switch from '@mui/material/Switch';
import { FormControlLabel } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { themeStore } from '../../store/theme';
import ThemeToggleButton from './swichDark';

export const Header = () => {
  const dispatch = useAppDispatch()
  const select = useAppSelector(state => state.theme.dark)
const handelDark =()=>{
  dispatch(themeStore.dark({dark:select?false:true}));}
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
       
      <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <FormControlLabel onChange={handelDark} control={<Switch defaultChecked />} label="Label" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
          <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}
