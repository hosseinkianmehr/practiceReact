
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Page } from './page'
import {  useAppSelector } from './store/hook'
import { getTheme } from './theme'
function App() {
const select = useAppSelector(state => state.theme.dark)
const theme = getTheme(select)
  return (
<ThemeProvider theme={theme }>

    <Page/>
      <p>{select?'dark':'ligth'}.type</p>
    
</ThemeProvider>
  )
}

export default App
