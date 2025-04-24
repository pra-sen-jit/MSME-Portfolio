import React from "react";
import FeedbackCard from "./FeedbackCard";

function CustomerFeedback() {
  const feedbacks = [
    {
      id: 1,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/f9993ad42e8d6eeed9d29505d0d776d273f3c850?placeholderIfAbsent=true",
      time: "2 weeks ago",
<<<<<<< HEAD
      feedback: "They have wide vairiety of products.",
=======
      feedback: "They have wide variety of products.",
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
    },
    {
      id: 2,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a23c8aaaffba9c7923aabbf68e832aaa3241d1c3?placeholderIfAbsent=true",
      name: "Prasenjit",
<<<<<<< HEAD
      feedback: "I am very much satisfiedwith their product quality.",
=======
      feedback: "I am very much satisfied with their product quality.",
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
    },
    {
      id: 3,
      avatar:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2e539f14eceb7d6042e611d0f0fd3dabf23bf779?placeholderIfAbsent=true",
      time: "3 weeks ago",
<<<<<<< HEAD
      feedback:
        "All the products arein affordable price range.great experience.",
    },
    {
      id: 4,
      time: "1 weeks ago",
      feedback: "One of the best silver productsI purchased in recent days.",
=======
      feedback: "All the products are in affordable price range. Great experience.",
    },
    {
      id: 4,
      time: "1 week ago",
      feedback: "One of the best silver products I purchased in recent days.",
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
    },
  ];

  return (
    <section
<<<<<<< HEAD
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
=======
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
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
            >
              <FeedbackCard
                avatar={feedback.avatar}
                name={feedback.name}
                time={feedback.time}
                feedback={feedback.feedback}
<<<<<<< HEAD
                className={index === 3 ? "self-stretch my-auto" : "mt-1.5"}
=======
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerFeedback;
