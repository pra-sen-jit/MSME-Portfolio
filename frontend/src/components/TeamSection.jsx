import React from "react";
import premImage from "../assets/prem.png";
import Debu from "../assets/debangshu.png";// ✅ update this path if needed
import Prasenjit from "../assets/prasenjit.png";
import subhrajit from "../assets/subhrajit.png";
import gourav from "../assets/gourav.png";
import subho from "../assets/subhobrata.png";



function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      image:
        Debu,
      name: "Debangshu Roy",
    },
    {
      id: 2,
      image:
        Prasenjit,
      name: "Prasenjit Datta",
    },
    {
      id: 3,
      image:
        subhrajit,
      name: "Subhrajit Ghosh",
    },
    {
      id: 4,
      image: premImage,
      name: "Prem Ghosh",
    },
    {
      id: 5,
      image:
        gourav,
      name: "Gourav Majumder",
    },
    {
      id: 6,
      image:
       subho,
      name: "Subhobrata Maity",
    },
  ];

  return (
    <section className="bg-white py-20 px-6" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="team-heading" className="text-4xl font-bold text-black mb-12">
          Meet The Development Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full border border-gray-300 shadow-md"
              />
              <p className="mt-4 text-lg font-medium">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
