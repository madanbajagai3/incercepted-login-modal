import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-2xl font-medium mb-8">Oops! Page not found.</p>
        <p className="text-lg mb-8">The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
        <Link
          className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
          href="/"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
