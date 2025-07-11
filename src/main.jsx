import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import routes from './routes.jsx';

const router = createBrowserRouter(routes);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
