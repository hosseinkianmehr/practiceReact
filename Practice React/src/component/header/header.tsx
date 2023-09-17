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
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { authActions } from '../../store/auth';

export const Header = () => {
  const userName = useAppSelector((state) => state.auth.user.user)
  const islogin = useAppSelector((state) => state.auth.islogin)
  const dispatch = useAppDispatch()
  const select = useAppSelector(state => state.theme.dark)
const handelDark =()=>{
  dispatch(themeStore.dark({dark:select?false:true}));}
  const handlelogout =()=>{
    dispatch(authActions.logout())
  }
  const navigate = useNavigate()
  const handlelogin =()=>{
    navigate('/login')
  }
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
          {islogin?<>
          <Typography>{userName}</Typography>
          <Button onClick={handlelogout} color="inherit">logout</Button>
          </>
          :
          <Button onClick={handlelogin} color="inherit">login</Button>}
          
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          
          </Typography>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Shop
          </Typography>
          <Link to={''}>
          <Button color="inherit">best shop</Button>
          </Link>
          <Link to={'/product'}>
          <Button color="inherit">product</Button>
          </Link>
          <Link to={'/'}>
          <Button color="inherit">home</Button>
          </Link>
      </Toolbar>
    </AppBar>
  )
}
