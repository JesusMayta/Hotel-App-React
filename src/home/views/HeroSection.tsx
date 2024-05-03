import { Link } from "react-router-dom";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen w-full bg-fondoHome bg-cover bg-no-repeat bg-center">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/30 to-gray-300 z-10"></div>

            <div className="absolute inset-0 z-20">
                <div className="flex flex-col justify-center items-center h-full w-full">
                    <div className="max-w-2xl text-center px-6">
                        <h1 className="text-4xl font-bold tracking-tight text-fontColor sm:text-7xl">Vive una experiencia única y relajante en el
                            <span className="ms-3 bg-gradient-to-r from-fontColor via-yellow-600 to-yellow-600 text-transparent bg-clip-text">
                                Palacio Real
                            </span>
                        </h1>

                        <p className="mt-10 text-md font-semibold leading-7 text-gra-800">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.</p>

                        <div className="mt-12 flex items-center justify-center gap-x-10">
                            <Link to="authentication" className="bg-primary px-8 py-2 rounded-xl text-white shadow-lg shadow-gray-700 hover:scale-105 duration-300 font-semibold hover:ring-1 hover:ring-gray-300">
                                Reservar
                            </Link>
                            <a href="#about" className="font-semibold leading-6 text-white bg-yellow-600 py-2 px-5 rounded-xl shadow-lg shadow-gray-700 hover:scale-105 hover:ring-1 hover:ring-gray-300 duration-300">
                                Ver más →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
