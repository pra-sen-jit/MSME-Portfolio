import React from "react";
import FeedbackCard from "./FeedbackCard";

function CustomerFeedback() {
  const feedbacks = [
    {
      id: 1,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f9993ad42e8d6eeed9d29505d0d776d273f3c850?placeholderIfAbsent=true",
      name: "a",
      time: "2 weeks ago",
      feedback: "They have a wide variety of products.",
    },
    {
      id: 2,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a23c8aaaffba9c7923aabbf68e832aaa3241d1c3?placeholderIfAbsent=true",
      name: "b",
      time: "2 weeks ago",
      feedback: "I am very much satisfied with their product quality.",
    },
    {
      id: 3,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e539f14eceb7d6042e611d0f0fd3dabf23bf779?placeholderIfAbsent=true",
      name: "c",
      time: "3 weeks ago",
      feedback:
        "All the products are in affordable price range. Great experience.",
    },
    {
      id: 4,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a23c8aaaffba9c7923aabbf68e832aaa3241d1c3?placeholderIfAbsent=true",
      name: "d",
      time: "1 week ago",
      feedback: "One of the best silver products I purchased in recent days.",
    },
  ];

  return (
    <section
      className="flex overflow-hidden flex-col px-20 py-9 w-full bg-white max-md:px-5 max-md:max-w-full"
      aria-labelledby="feedback-heading"
    >
      <h2 id="feedback-heading" className="self-center text-4xl font-semibold text-black">
        Customer Feedback
      </h2>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-md:mt-10">
        {feedbacks.map((feedback) => (
          <FeedbackCard
            key={feedback.id}
            avatar={feedback.avatar}
            name={feedback.name}
            time={feedback.time}
            feedback={feedback.feedback}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomerFeedback;
