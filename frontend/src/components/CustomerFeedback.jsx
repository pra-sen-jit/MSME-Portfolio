import { useState, useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import FeedbackCard from "./FeedbackCard";

function CustomerFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch("/api/feedback");
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setFeedbacks(data);
      } catch (error) {
        console.error("Error fetching feedbacks:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-12">
        <FaSpinner className="animate-spin inline-block text-2xl" />
      </div>
    );
  }

  return (
    <section className="py-20 px-6 md:px-16 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-12">
        Customer Feedback
      </h2>
      <div className="relative h-96 overflow-hidden">
        <div className="animate-marquee absolute top-0 left-0 flex w-full space-x-8">
          {[...feedbacks, ...feedbacks].map(
            (
              feedback,
              idx // Double for seamless loop
            ) => (
              <div key={`${feedback.id}-${idx}`} className="flex-shrink-0 w-80">
                <FeedbackCard
                  name={feedback.name}
                  time={new Date(feedback.created_at).toLocaleDateString()}
                  feedback={feedback.message}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomerFeedback;
