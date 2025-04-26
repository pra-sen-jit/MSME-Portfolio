import React from "react";

function TeamSection() {
  const teamMembers = [
    {
      id: 1,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/0d800c7e6998f61c5334a4b542868f60c71ab526?placeholderIfAbsent=true",
      name: "Debangshu Roy",
    },
    {
      id: 2,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dd97872d91818c3989fa6eb3ba1b3f2f27ea735c?placeholderIfAbsent=true",
      name: "Prasenjit Datta",
    },
    {
      id: 3,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ec510b4fc4b1a055857fd4084f2bc9990808829e?placeholderIfAbsent=true",
      name: "Subhrajit Ghosh",
    },
    {
      id: 4,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fb72e9710c0983c2045d1019e2769be396b89d19?placeholderIfAbsent=true",
      name: "Prem Ghosh",
    },
    {
      id: 5,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/edc42b7f8c3a8712d466f393b8505b43399915a0?placeholderIfAbsent=true",
      name: "Gourav Majumder",
    },
    {
      id: 6,
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/a09b62c2b9477a2b98b80098c56741034f8f1fc5?placeholderIfAbsent=true",
      name: "Subhobrata Maity",
    },
  ];

  return (
    <section className="bg-white py-20 px-6" aria-labelledby="team-heading">
      <div className="max-w-7xl mx-auto text-center">
        <h2 id="team-heading" className="text-4xl font-bold text-black mb-12">
          Meet The Development Team
        </h2>

        {/* Team members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover rounded-full aspect-square border border-gray-300 shadow-md"
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
