import { createBrowserRouter, type RouteObject } from 'react-router-dom'
// VIEWS
import HomePage from './pages/home'
import ContactPage from './pages/contact'




const publicRoutes: RouteObject[] = [
    {
        path: '/',
        element: <HomePage />
    },
    {
        path: '/contact',
        element: <ContactPage />
    },
]

export const router = createBrowserRouter([...publicRoutes])