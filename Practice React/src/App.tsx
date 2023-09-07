
import { ThemeProvider } from '@emotion/react'
import './App.css'
import { Page } from './page'
import { useAppSelector } from './store/hook'
import { getTheme } from './theme'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

function App() {
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
