import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-4 text-center">About Me</h2>
      <div className="p-6 rounded-lg shadow-lg text-center">
        <p className="text-lg mb-4">
          Thanks for stopping by, I'm Garrett, and I’ve been passionate about bicycles for as long as I can remember. With over 15 years of experience in the bicycle industry, I’ve had the privilege of working on everything from daily commuters to high-performance race bikes.
        </p>
        <p className="text-lg mb-4">
          What truly excites me is helping clients bring their dream bikes to life. Whether it’s a fully custom build or fine-tuning a beloved ride, I’m dedicated to delivering quality craftsmanship and a personalized touch to every project.
        </p>
        <p className="text-lg mb-4">
          My goal is to ensure your bike fits your lifestyle, your needs, and your dreams. Whether you’re looking to get back on the road or elevate your cycling experience, I’m here to help you ride your best.
        </p>
        <p className="text-lg font-bold">
          Let’s build something amazing together!
        </p>
      </div>
    </section>
  );
};

export default About;
