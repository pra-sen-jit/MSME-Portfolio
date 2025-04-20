import React from "react";

function FeedbackCard({ avatar, name, time, feedback, className = "" }) {
  return (
    <article
      className={`flex flex-col w-full text-xl font-extralight text-black max-md:mt-10 ${className}`}
    >
      {avatar && (
        <div className="flex gap-1.5 self-start">
          <img
            src={avatar}
            alt={name || "Customer"}
            className="object-contain overflow-hidden shrink-0 rounded-full aspect-square w-[52px]"
          />
          {time && <time className="self-end mt-6 basis-auto">{time}</time>}
          {name && !time && <div className="text-2xl">{name}</div>}
        </div>
      )}

      {!avatar && time && <time className="self-center">{time}</time>}

      <p className="mt-12 max-md:mt-10">{feedback}</p>
    </article>
  );
}

export default FeedbackCard;
