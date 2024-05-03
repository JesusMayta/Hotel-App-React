import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { FaBarsStaggered, FaClosedCaptioning } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const navigation = [
    { name: 'Servicios', href: '#services' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
];
export const Header = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const pathName = window.location.pathname.split('/')[1];
    // console.log({ pathName });

    return (
        <header className="absolute inset-x-0 top-0 z-30">
            <nav className="fixed w-full flex items-center justify-between py-3 px-10 lg:px-8 bg-blue-800 sm:bg-transparent ">

                <Link to="/" className="flex flex-row items-baseline hover:scale-105 duration-300">
                    <img src="https://demo.themesberg.com/windster/images/logo.svg" className="h-6 mr-3" alt="Hotel Logo" />
                    <p className="text-xl font-bold text-yellow-600">Palacio Real</p>
                </Link>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <FaBarsStaggered className="h-6 w-6" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-bold leading-6 text-black hover:scale-105 duration-500">
                            {item.name}
                        </a>
                    ))}
                </div>

                {(pathName === '') && (
                    <Link to="/authentication" className="hidden lg:inline-block font-bold leading-6 py-2 px-4 text-fontColor hover:text-white rounded-2xl hover:bg-primary hover:shadow-lg hover:shadow-blue-900 duration-300">
                        Iniciar Sesión &rarr;
                    </Link>
                )}

            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-8 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <FaClosedCaptioning className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};
