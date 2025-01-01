import React, { useState } from "react";

import { cn } from "../utils/utils";

const TestComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="p-4">
      <button
        className={cn(
          "px-4 py-2 text-white rounded",
          isActive ? "bg-green-500" : "bg-red-500"
        )}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "Active" : "Inactive"}
      </button>
    </div>
  );
};

export default TestComponent;
