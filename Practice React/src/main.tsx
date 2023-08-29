import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { store } from './store/index.ts'
import { Provider } from 'react-redux'
import { theme } from './theme/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme }>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
)
