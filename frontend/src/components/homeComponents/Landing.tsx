import WavyBottom from "./WavyBottom";
import States from "./States";

const Landing = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-blue-900 dark:from-gray-800 dark:to-gray-900 text-white text-center py-16 dark:border-t dark:border-t-gray-700">
      {" "}
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to E-Learning Platform
        </h1>
        <p className="mb-6 text-lg">
          Discover courses taught by industry experts and elevate your skills
          with us.
        </p>
        <div className="flex justify-center space-x-4 mb-8 relative z-10">
          <button className="bg-transparent  hover:bg-purple-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition-all">
            Join Us
          </button>
          <button className="bg-purple-800 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg">
            Find Course
          </button>
        </div>
      </div>
      <States />
      <WavyBottom />
    </section>
  );
};

export default Landing;
