import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to TriState Cycle and Ski
          </h1>
          <p className="text-lg text-gray-700">
            Your one-stop shop for top-quality bike and ski services, products,
            and news.
          </p>
        </section>

        <section id="services" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-700">
            From bike tune-ups to ski waxing, our expert team has you covered.
          </p>
        </section>

        <section id="products" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
          <p className="text-gray-700">
            Explore our handpicked selection of bikes, skis, and accessories.
          </p>
        </section>

        <section id="blog" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Latest News</h2>
          <p className="text-gray-700">
            Stay updated with industry insights and tips from our experts.
          </p>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-700">
            Have questions? Reach out to us for all your bike and ski needs.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
