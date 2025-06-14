import { useState } from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const [showDetails, setShowDetails] = useState(false);

  // If you threw a Response in a loader/action, you can inspect status/text
  const status = isRouteErrorResponse(error) ? error.status : null;
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : error.message || "Unknown error";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-3xl font-extrabold text-red-600 mb-2">Oops!</h1>
        {status && (
          <p className="text-xl font-semibold text-gray-800 mb-4">
            {status} — {message}
          </p>
        )}
        {!status && <p className="text-gray-700 mb-4">{message}</p>}

        <button
          onClick={() => setShowDetails((s) => !s)}
          className="mb-4 px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 rounded"
        >
          {showDetails ? "Hide details" : "Show details"}
        </button>

        {showDetails && (
          <pre className="overflow-auto text-xs bg-gray-100 p-3 rounded h-40 mb-4">
            {error.stack || JSON.stringify(error, null, 2)}
          </pre>
        )}

        <a
          href="/"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Back Home
        </a>
      </div>
    </div>
  );
}
