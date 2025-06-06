import { Link } from "react-router-dom"; // If using react-router

function NotFound() {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen flex-col items-center justify-center gap-2">
        <h1 className="text-5xl font-semibold sm:text-7xl">404</h1>
        <p className="text-center text-sm tracking-tight text-white/30 sm:px-0 sm:text-base">
          Oops! The page you are looking for does not exist.
        </p>
        <button className="mt-6 rounded-lg border border-amber-500 bg-amber-700 p-2 hover:bg-amber-900">
          <Link
            to="/"
            className="text-sm tracking-tighter text-white sm:text-base"
          >
            Go back to home
          </Link>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
