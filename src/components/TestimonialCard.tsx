import React from "react";

interface TestimonialCardProps {
  title: string;
  author?: string; // Make author optional
  text: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ title, author, text }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-[80%] md:w-[60%] lg:w-[40%] max-w-[300px]">
      <div className="p-6 rounded-lg shadow-lg text-center h-full flex flex-col justify-between">
        <h3 className="text-xl font-bold">{`"${title}"`}</h3>
        {author && <p className="mt-2 text-gray-600">{`- ${author}`}</p>} {/* Display author only if provided */}
        <p className="mt-2">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
