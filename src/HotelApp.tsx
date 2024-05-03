import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

export const HotelApp = () => {
    return (
        <RouterProvider router={router} />
    );
};
