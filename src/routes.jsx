import { createBrowserRouter } from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Contact from './Contact';

export const router = ([
    {
        path: '/manual-deploy',
        element: <Layout />,
        children: [
            {
                path: 'home',
                element: <Home />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);

export default router;

