import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CreateTripPage } from './pages/create-trip'
import { TripDetailsPage } from './pages/trip-details'
import { setDefaultOptions } from 'date-fns/setDefaultOptions'
import { ptBR } from 'date-fns/locale'

setDefaultOptions({ locale: ptBR })

const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateTripPage />,
  },
  {
    path: '/trips/:tripId',
    element: <TripDetailsPage />,
  },
])

export function App() {
  return <RouterProvider router={router} />
}
