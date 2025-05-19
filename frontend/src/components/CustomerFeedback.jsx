import { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import { FaSpinner, FaRegCommentDots } from "react-icons/fa";

function CustomerFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const feedbackUrl = `${backendUrl}/api/feedback`;

  const fetchFeedbacks = async () => {
    try {
      const response = await fetch(feedbackUrl);
      if (!response.ok) throw new Error("Failed to fetch feedbacks");
      const data = await response.json();
      setFeedbacks(data);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
    const interval = setInterval(fetchFeedbacks, 30000);
    return () => clearInterval(interval);
  }, []);

  // Loading state with elegant spinner
  if (isLoading) {
    return (
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-64 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="relative">
            <div className="absolute inset-0 w-16 h-16 border-4 border-gray-200 rounded-full opacity-25"></div>
            <FaSpinner className="animate-spin w-16 h-16 text-gray-500" />
          </div>
          <p className="text-gray-600 font-medium">
            Loading customer feedback...
          </p>
        </div>
      </section>
    );
  }

  // Error state with retry option
  if (error) {
    return (
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-64 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Oops! Something went wrong
            </h3>
            <p className="text-gray-600 mb-4">
              Error loading feedbacks: {error}
            </p>
            <button
              onClick={fetchFeedbacks}
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  // Empty state with call-to-action
  if (feedbacks.length === 0) {
    return (
      <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 min-h-64 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-md">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto">
            <FaRegCommentDots className="w-12 h-12 text-gray-500" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              No Feedback Yet
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Be the first to share your thoughts and help us improve our
              services!
            </p>
          </div>
        </div>
      </section>
    );
  }

  // Main feedback display
  return (
    <section className="py-12 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gray-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-gray-300 rounded-full blur-3xl"></div>
      </div>

      {/* Header section */}
      <div className="relative max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl max-md:text-3xl font-bold text-gray-800 mb-4 tracking-tight">
          Customer Feedback
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Discover what our valued customers have to say about their experiences
          with us
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
      </div>

      {/* Feedback cards carousel */}
      <div className="relative">
        {/* Gradient overlays for seamless infinite scroll effect */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-100 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling container */}
        <div className="overflow-hidden mask-gradient">
          <div className="flex space-x-8 animate-marquee hover:pause-animation">
            {[...feedbacks, ...feedbacks].map((feedback, idx) => (
              <div
                key={`${feedback.id}-${idx}`}
                className="flex-shrink-0 w-80 lg:w-96 transform transition-transform duration-300 hover:scale-105"
              >
                <FeedbackCard
                  name={feedback.name}
                  time={new Date(feedback.created_at).toLocaleDateString(
                    "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                  feedback={feedback.message}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .hover\\:pause-animation:hover {
          animation-play-state: paused;
        }

        .mask-gradient {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  );
}

export default CustomerFeedback;
