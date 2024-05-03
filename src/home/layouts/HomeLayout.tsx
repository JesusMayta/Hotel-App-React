import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components';

export const HomeLayout = () => {
    return (
        <div className="relative overflow-x-hidden overflow-y-auto h-screen w-screen">
            <Header />

            <Outlet />

            <div className="w-full">
                <Footer />
            </div>
        </div>
    )
}
