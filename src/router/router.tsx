import { createBrowserRouter } from 'react-router-dom';
import { HomeLayout, HomePage, LoginPage } from '../home';
import { ErrorPage } from '../error/ErrorPage';






export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <HomePage />,
            },
            {
                path: 'authentication',
                element: <LoginPage />,
            }
        ]
        // errorElement: <ErrorPage />
    }, {
        path: '/auth',
        element: <LoginPage />
    }
]);