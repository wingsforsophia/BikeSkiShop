import React from "react";

const Header = () => {
  return (
    <header className="bg-primary text-primary-content py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold">TriState Bike and Ski</h1>
        <nav className="space-x-4">
          <a href="#services" className="hover:underline">
            Services
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
          <a href="#blog" className="hover:underline">
            Blog
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
