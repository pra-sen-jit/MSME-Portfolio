import React from "react";

function TeamMember({ image, name, className = "" }) {
  return (
    <div
      className={`flex flex-col grow items-center text-2xl font-bold text-center text-black ${className}`}
    >
      <img
        src={image}
        alt={name}
        className="object-contain overflow-hidden self-stretch w-full rounded-full aspect-square"
      />
      <h3 className="z-10 mt-2">{name}</h3>
    </div>
  );
}

export default TeamMember;
