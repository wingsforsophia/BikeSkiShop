import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import { Button } from "../components/ui/button";

const HomePage: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center", // Align items to the center
    skipSnaps: false, // Ensure snaps happen as expected
    startIndex: 1, // Start with the second slide
  });

  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    // Check the prefers-reduced-motion setting
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setShouldReduceMotion(mediaQuery.matches);

    updateMotionPreference(); // Set initial value
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <div className="min-h-screen text-base-content">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Welcome to TriState Bike and Ski
          </h1>
          <p className="text-lg">
            {/* Add a brief description here */}
          </p>
          <Button className="mt-6 btn-primary">Explore Our Services</Button>
        </section>
        <About />
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Customer Testimonials
          </h2>
          <div
            ref={emblaRef}
            className={`overflow-hidden py-6 transition-all ${shouldReduceMotion ? "duration-0" : "duration-300"}`}
          >
            <div className="flex space-x-4">
              {[
                { title: "Exceptional Service!", author: "Jane Doe", text: "Garrett's expertise is unmatched. My bike rides like new!" },
                { title: "CHEEEEEP CHEEEP Service!", author: "Mayhem Bitcherson", text: "Garrett's real real good!" },
                { title: "Da Best Service!", author: "Havocles Beanus", text: "Garrett's expertise is unmatched. My bike rides like new!" },
                { title: "Friendly and Professional", author: "John Smith", text: "Garrett took care of my skis perfectly. Highly recommend!" },
                { title: "Quick Turnaround!", author: "Old Yowsie", text: "I needed my bike fixed urgently, and Garrett delivered." },
              ].map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-[300px]"
                >
                  <div className="p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
                    <h3 className="text-xl font-bold">{`"${review.title}"`}</h3>
                    <p className="mt-2 text-gray-600">{`- ${review.author}`}</p>
                    <p className="mt-2">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Previous
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Next
            </button>
          </div>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p>From bike tune-ups to ski waxing, our expert has you covered.</p>
        </section>

        <section id="products" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p>
            Explore our handpicked selection of bikes, skis, and accessories.
          </p>
        </section>

        <section id="blog" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Latest News</h2>
          <p>Stay updated with industry insights and tips from our expert.</p>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p>
            Have questions? Reach out to us for all your bike and ski needs.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
