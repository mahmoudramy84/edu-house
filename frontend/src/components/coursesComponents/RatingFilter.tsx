import React from "react";
import { FaStar } from "react-icons/fa6";

const ratings = [1, 2, 3, 4, 5].reverse();

const RatingFilter = () => {
  return (
    <div className="flex flex-col space-y-4 ">
      {ratings.map((rating) => (
        <label key={rating} className="flex items-center gap-2">
          <input type="radio" value={rating} name="rating" />
          <div className="flex items-center gap-1">
            {Array.from({ length: rating }, (_, index) => (
              <FaStar key={index} className="text-yellow-500" />
            ))}
          </div>
          
        </label>
        
      ))}
    </div>
  );
};

export default RatingFilter;
