import React from "react";
import user from "../assets/user.jpg";

function GuideSection() {
  const teamMembers = [
    {
      id: 1,
      image: user,
      name: "Sanjay Chatterjee",
    },
    {
      id: 2,
      image: user,
      name: "Sayan Bandyopadhay",
    },
    {
      id: 3,
      image: user,
      name: "Niladri Roy",
    },
  ];

  return (
    <section className="bg-white py-10 px-6" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="team-heading" className="text-3xl font-bold text-black mb-6">
          Meet The Guide Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover rounded-full border border-gray-300 shadow-md"
              />
              <p className="mt-3 text-base font-medium">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GuideSection;
