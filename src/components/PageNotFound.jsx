import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-9xl font-extrabold text-blue-600 font-montserrat">
        404
      </h1>
      <p className="text-2xl font-semibold mt-4 text-primary-text bg-gradient-to-r from-yellow-300 via-pink-500 to-purple-500 text-transparent bg-clip-text font-montserrat">
        Oops! Page not found.
      </p>
      <p className="text-secondary-text mt-2  font-montserrat text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-lg rounded-lg shadow-lg hover:bg-accent-hover transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
