import React from "react";

function FeedbackCard({ avatar, name, time, feedback }) {
  return (
    <div className="flex flex-col items-start p-4 border rounded-lg shadow-sm bg-white">
      <div className="flex items-center gap-4 mb-2">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover border"
        />
        <div>
          <p className="font-semibold text-black">{name}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <p className="text-sm text-gray-700">{feedback}</p>
    </div>
  );
}

export default FeedbackCard;