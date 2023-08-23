import { createHashRouter, Navigate } from 'react-router-dom'
import Home from './page/Home'
import ErrorPage from './page/ErrorPage'
import About from './page/About'
import Projects from './page/Projects'

export const Router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: '/err',
    element: <ErrorPage />
  }
]
)
