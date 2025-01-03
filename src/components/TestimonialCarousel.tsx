import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import TestimonialCard from "./TestimonialCard"; // Import TestimonialCard

interface Testimonial {
  title: string;
  author?: string;
  text: string;
}

const TestimonialCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    skipSnaps: false,
    startIndex: 1,
  });

  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setShouldReduceMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  const testimonials: Testimonial[] = [
    { title: "Absolutely Great Service!", text: "Absolutely great service from Garrett here. I’d been having an ongoing issue that another shop wasn’t able to identify or fix. It took Garrett minutes to figure it out and the bike is 100% again. Highly recommend." },
    { title: "Great Service and Support", text: "Great service and support. Very quick resolving my issue and a great price. Thank you!"
 },
    { title: "Da Best Service!", text: "My indoor cycling shoes broke, contacted Garrett hoping that he could fix them. In less than 5 mins, Garrett fixed my shoes! Very great experience!"
 },
    { title: "Friendly and Professional", text: "Garrett is a true professional and fun to work with."  
 },
    { title: "Attentive Service", text: "I had a bike accident a few months prior and Garrett was extremely attentive and talked through every aspect of the bike with me to ease all of my concerns about safety and explained how the bike was adjusted."
 },
 { title: "Haiku", text: "We wrote a haiku to express our appreciation. Garrett with two T’s/ He fixed my bike on Sunday/ I rate him 5 stars."

 },
 { title: "Tri-ready fast", text: "Garrett was a great help in getting set up with a new Tri bike in a very short amount of time due to an overseas assignment."

 },
 { title: "Best Customer Service", text: "Garrett couldn't have been nicer. Best customer service I've ever had with a bike store."
 },
  ];

  return (
    <div
      ref={emblaRef}
      className={`overflow-hidden py-6 transition-all ${shouldReduceMotion ? "duration-0" : "duration-300"}`}
    >
      <div className="flex space-x-4">
        {testimonials.map((review, index) => (
          <TestimonialCard
            key={index}
            title={review.title}
            author={review.author}
            text={review.text}
          />
        ))}
      </div>
      <div className="flex justify-center mt-4 gap-4">
        <button onClick={() => emblaApi?.scrollPrev()} className="px-4 py-2 bg-primary text-white rounded">
          Previous
        </button>
        <button onClick={() => emblaApi?.scrollNext()} className="px-4 py-2 bg-primary text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
