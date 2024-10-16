const instructors = ["All", "Ahmed", "Mohamed", "Mostafa"];
const InstructorsFilter = () => {
  return (
    <div className="space-y-3">
      {instructors.map((instructor) => (
        <div className="flex items-center justify-between" key={instructor}>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="category"
              value={instructor}
              id={instructor}
              className="h-5 w-5 min-w-5 min-h-5 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
            />{" "}
            <label
              htmlFor={instructor}
              className="text-lg font-normal dark:text-gray-400"
            >
              {instructor}
            </label>
          </div>
          <div>(12)</div>
        </div>
      ))}
    </div>
  );
};

export default InstructorsFilter;
