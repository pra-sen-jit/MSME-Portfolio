import React from "react";
import FeedbackCard from "./FeedbackCard";

function CustomerFeedback() {
  const feedbacks = [
    {
      id: 1,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f9993ad42e8d6eeed9d29505d0d776d273f3c850?placeholderIfAbsent=true",
      time: "2 weeks ago",
      feedback: "They have wide variety of products.",
    },
    {
      id: 2,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a23c8aaaffba9c7923aabbf68e832aaa3241d1c3?placeholderIfAbsent=true",
      name: "Prasenjit",
      feedback: "I am very much satisfied with their product quality.",
    },
    {
      id: 3,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e539f14eceb7d6042e611d0f0fd3dabf23bf779?placeholderIfAbsent=true",
      time: "3 weeks ago",
      feedback: "All the products are in affordable price range. Great experience.",
    },
    {
      id: 4,
      time: "1 week ago",
      feedback: "One of the best silver products I purchased in recent days.",
    },
  ];

  return (
    <section
      className="w-full px-6 py-12 bg-white"
      aria-labelledby="feedback-heading"
    >
      <h2
        id="feedback-heading"
        className="text-4xl font-semibold text-center text-black mb-12"
      >
        Customer Feedback
      </h2>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="w-full sm:w-[48%] md:w-[30%] lg:w-[22%]"
            >
              <FeedbackCard
                avatar={feedback.avatar}
                name={feedback.name}
                time={feedback.time}
                feedback={feedback.feedback}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerFeedback;
