
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Page } from './page'
import { useAppDispatch, useAppSelector } from './store/hook'
import { getTheme } from './theme'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { authActions } from './store/auth'
import { useJwt } from 'react-jwt';

function App() {
  const token = localStorage.getItem("token");
  console.log(token,'tppppp')
  const dispatch = useAppDispatch()
 console.log(token !== null ,'token !== null')
  if (token !== null) {
    const { isExpired , decodedToken } = useJwt(token)
    console.log(isExpired , decodedToken,'isExpired , decodedToken')
    console.log("0")
    if (isExpired) {
      dispatch(authActions.login(decodedToken))
      console.log("1")
    }
  }
  

  const select = useAppSelector(state => state.theme.dark)
  const theme = getTheme(select)
  const queryClient = new QueryClient()
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
      <Page />
      <p>{select ? 'dark' : 'ligth'}.type</p>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
