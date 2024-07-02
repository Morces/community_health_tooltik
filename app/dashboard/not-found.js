import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col space-y-6 justify-center items-center bg-gray-100 text-center px-4">
      <h2 className="text-4xl font-bold text-gray-800">404 - Not Found</h2>
      <p className="text-lg text-gray-600">
        We couldn't find the page you were looking for.
      </p>
      <Link href="/dashboard">
        <p className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Return Home
        </p>
      </Link>
    </div>
  );
}
