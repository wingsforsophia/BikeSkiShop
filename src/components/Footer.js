import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} TriState Bike and Ski. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
