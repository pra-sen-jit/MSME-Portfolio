import React from "react";

function FeedbackCard({ avatar, name, time, feedback }) {
  return (
    <div className="flex flex-col p-7 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 max-w-sm w-full">
      <div className="flex items-center gap-3 mb-2">
        <img
          src="https://img.freepik.com/premium-photo/happy-man-ai-generated-portrait-user-profile_1119669-1.jpg?w=2000"
          alt={name}
          className="w-10 h-10 rounded-full object-cover border border-gray-300"
        />
        <div>
          <p className="text-sm font-semibold text-gray-900">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 leading-snug">{feedback}</p>
    </div>
  );
}

export default FeedbackCard;