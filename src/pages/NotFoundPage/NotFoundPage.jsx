import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-8xl md:text-9xl font-extrabold text-purple-500">
          404
        </h1>

        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-3 max-w-md mx-auto text-gray-500">
          Sorry, the page you are looking for doesn't exist or may have been
          moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-7 px-6 py-3 rounded-lg bg-purple-500 text-white font-semibold hover:bg-purple-700 transition duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
