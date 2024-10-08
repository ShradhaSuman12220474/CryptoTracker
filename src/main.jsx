import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { QueryClientProvider } from 'react-query'
import { QueryClient } from 'react-query'
import { BrowserRouter } from 'react-router-dom'


const queryClient = new QueryClient();


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <StrictMode>
      <App />
    </StrictMode>,
    </QueryClientProvider>
  </BrowserRouter>
)
