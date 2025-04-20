import React from "react";
import FeedbackCard from "./FeedbackCard";

function CustomerFeedback() {
  const feedbacks = [
    {
      id: 1,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f9993ad42e8d6eeed9d29505d0d776d273f3c850?placeholderIfAbsent=true",
      time: "2 weeks ago",
      feedback: "They have wide vairiety of products.",
    },
    {
      id: 2,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a23c8aaaffba9c7923aabbf68e832aaa3241d1c3?placeholderIfAbsent=true",
      name: "Prasenjit",
      feedback: "I am very much satisfiedwith their product quality.",
    },
    {
      id: 3,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e539f14eceb7d6042e611d0f0fd3dabf23bf779?placeholderIfAbsent=true",
      time: "3 weeks ago",
      feedback:
        "All the products arein affordable price range.great experience.",
    },
    {
      id: 4,
      time: "1 weeks ago",
      feedback: "One of the best silver productsI purchased in recent days.",
    },
  ];

  return (
    <section
      className="flex overflow-hidden flex-col px-20 py-9 w-full bg-white max-md:px-5 max-md:max-w-full"
      aria-labelledby="feedback-heading"
    >
      <h2 id="feedback-heading" className="self-center text-4xl text-black">
        Customer Feedback
      </h2>

      <div className="self-start mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          {feedbacks.map((feedback, index) => (
            <div
              key={feedback.id}
              className={`${index > 0 ? "ml-5 " : ""}w-3/12 max-md:ml-0 max-md:w-full`}
            >
              <FeedbackCard
                avatar={feedback.avatar}
                name={feedback.name}
                time={feedback.time}
                feedback={feedback.feedback}
                className={index === 3 ? "self-stretch my-auto" : "mt-1.5"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerFeedback;
