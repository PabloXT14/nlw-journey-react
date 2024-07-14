import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateTripPage } from './pages/create-trip'

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />,
  },
  {
    path: '/test',
    element: <h1>Test</h1>,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
