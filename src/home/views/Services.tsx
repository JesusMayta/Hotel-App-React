
const contentText = 'Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.';

const serviceContent = [
    {
        img: 'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/65045f093c166fdddb4a94a5_x-65045f0266217.webp', text: contentText, type: 'Simples'
    }, {
        img: 'https://image-tc.galaxy.tf/wijpeg-7rgnfsntskc4u9fsygs551gz/hero-presidential-suite_wide.jpg?crop=89%2C0%2C1422%2C800&width=800', text: contentText, type: 'Dobles'
    }, {
        img: 'https://img2.10bestmedia.com/Images/Photos/378649/Park-Hyatt-New-York-Manhattan-Sky-Suite-Master-Bedroom-low-res_55_660x440.jpg', text: contentText, type: 'Matrimoniales'
    }
];

export const Services = () => {

    return (
        <section id="services" className="min-h-screen w-full bg-fondoSections bg-cover bg-no-repeat bg-center">
            <div className=" h-full w-full flex justify-center items-center " >
                <div className="container px-5 py-24 mx-auto z-20">
                    <div className="flex flex-col">
                        <div className="h-1 bg-primary mb-12 rounded overflow-hidden"></div>
                        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                            <h2 className="sm:w-2/5 font-bold text-4xl mb-2 sm:mb-0 text-yellow-600">Nuestros servicios</h2>
                            <p className="sm:w-3/5 font-medium leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                        {serviceContent.map(service => (
                            <div key={service.img} className="p-4 md:w-1/3 sm:mb-0 mb-6">
                                <div className="rounded-lg h-64 overflow-hidden hover:ring-4 hover:ring-primary">
                                    <img alt="content" className="object-cover object-center h-full w-full" src={service.img} />
                                </div>
                                <h2 className="text-xl text-center font-bold text-fontColor mt-5">{service.type}</h2>
                                <p className="text-base text-justify leading-relaxed mt-2">{service.text}</p>
                                <a className="text-indigo-400 inline-flex items-center mt-3">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
