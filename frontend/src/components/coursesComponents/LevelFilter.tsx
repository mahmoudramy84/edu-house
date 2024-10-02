import React from "react";

const levels = ["All", "Beginner", "Intermediate", "Expert"];
const LevelFilter = () => {
  return (
    <div className="space-y-3">
      {levels.map((level) => (
        <div className="flex items-center justify-between" key={level}>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="category"
              value={level}
              id={level}
              className="h-5 w-5 min-w-5 min-h-5 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />{" "}
            <label
              htmlFor={level}
              className="text-lg font-normal dark:text-gray-400"
            >
              {level}
            </label>
          </div>
          <div>(12)</div>
        </div>
      ))}
    </div>
  );
};

export default LevelFilter;
