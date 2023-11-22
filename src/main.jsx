import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes'
import AuthProvider from './providers/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 mx-auto'>
    <QueryClientProvider client={queryClient}>
    <AuthProvider><RouterProvider router={MainRoutes}></RouterProvider></AuthProvider>
    </QueryClientProvider>
    </div>
  </React.StrictMode>,
)
