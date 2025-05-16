import { useState, useEffect } from "react";
import FeedbackCard from "./FeedbackCard";
import { FaSpinner } from "react-icons/fa";

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

    // Refresh every 30 seconds to get new feedbacks
    const interval = setInterval(fetchFeedbacks, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <FaSpinner className="animate-spin inline-block text-2xl text-blue-600" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-600">
        Error loading feedbacks: {error}
      </div>
    );
  }

  if (feedbacks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-600">
        No feedbacks available yet. Be the first to share your thoughts!
      </div>
    );
  }

  return (
    <section className="py-10 px-4 md:px-8 overflow-hidden bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12">
        Customer Feedback
      </h2>

      <div className="relative h-96 overflow-hidden">
        <div className="animate-marquee absolute top-0 left-0 flex w-full space-x-8">
          {[...feedbacks, ...feedbacks].map((feedback, idx) => (
            <div
              key={`${feedback.id}-${idx}`}
              className="flex-shrink-0 w-80 lg:w-96"
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
    </section>
  );
}

export default CustomerFeedback;
