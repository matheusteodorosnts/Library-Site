import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Products from './Products.jsx'
import ElonMusk from './BookElonMusk.jsx'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/products",
    element: <Products />
  },
  {
    path: "/bookelonmusk",
    element: <ElonMusk />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
