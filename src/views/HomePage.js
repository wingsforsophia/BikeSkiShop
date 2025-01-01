import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const HomePage = () => {
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
