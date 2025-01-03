import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../components/ui/carousel";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-primary">
            Welcome to TriState Cycle and Ski
          </h1>
          <p className="text-lg">
            Your one-stop shop for top-quality bike and ski services, products,
            and news.
          </p>
          <Button className="mt-6 btn-primary">Explore Our Services</Button>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Customer Reviews
          </h2>
          <Carousel>
            <CarouselPrevious />
            <CarouselContent>
              <CarouselItem>
                <div className="p-6 bg-gray-100 rounded shadow-md text-center">
                  <h3 className="text-xl font-bold">"Exceptional Service!"</h3>
                  <p className="mt-2 text-gray-600">- Jane Doe</p>
                  <p className="mt-2">
                    "Garrett's expertise is unmatched. My bike rides like new!"
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 bg-gray-100 rounded shadow-md text-center">
                  <h3 className="text-xl font-bold">
                    "Friendly and Professional"
                  </h3>
                  <p className="mt-2 text-gray-600">- John Smith</p>
                  <p className="mt-2">
                    "Garrett took care of my skis perfectly. Highly recommend!"
                  </p>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="p-6 bg-gray-100 rounded shadow-md text-center">
                  <h3 className="text-xl font-bold">"Quick Turnaround!"</h3>
                  <p className="mt-2 text-gray-600">- Emily Davis</p>
                  <p className="mt-2">
                    "I needed my bike fixed urgently, and Garrett delivered."
                  </p>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
          </Carousel>
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
