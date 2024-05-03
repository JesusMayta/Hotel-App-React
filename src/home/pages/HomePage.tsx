import { HeroSection, Services, TestimonialsSection } from '../views';

export const HomePage = () => {
    return (
        <main className="relative">

            {/* Hero - Principal view */}
            <HeroSection />

            {/* View Services */}
            <Services />

            <section id="testimonials" className="relative min-h-screen w-full bg-fondoSections bg-cover bg-no-repeat bg-center">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-transparent via-primary/40 to-primary"></div>
                <div className="absolute z-20 w-full">
                    <TestimonialsSection />
                </div>
            </section>

        </main>
    );
};
