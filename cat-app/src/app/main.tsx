import Header from '../widgets/header'
import CatsPage from '../pages/CatsPage/CatsPage'
import FavoriteCatsPage from '../pages/FavoriteCatsPage/FavoriteCatsPage'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import './main.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    children: [
      {
        path: '/',
        element: <CatsPage />
      },
      {
        path: '/favorite-cats',
        element: <FavoriteCatsPage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
