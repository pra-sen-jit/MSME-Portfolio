import React from "react";
import TeamMember from "./TeamMember";

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
  ];

  return (
    <section
      className="overflow-hidden mt-5 bg-white max-md:max-w-full"
      aria-labelledby="team-heading"
    >
<<<<<<< HEAD
      <div className="flex overflow-hidden z-10 flex-col items-center px-20 pt-11 pb-24 -mt-5 bg-white max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1125px] max-md:max-w-full">
          <div className="max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-3/12 max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a361848dbb5029c887dfbe824cc4ade66fcc4e?placeholderIfAbsent=true"
                  alt="Team illustration"
                  className="object-contain overflow-hidden shrink-0 mt-16 max-w-full aspect-square w-[273px] max-md:mt-10"
                />
              </div>

              <div className="ml-5 w-9/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-start w-full max-md:mt-10 max-md:max-w-full">
                  <h2
                    id="team-heading"
                    className="z-10 text-4xl text-black max-md:max-w-full"
                  >
                    Meet The Development Team
                  </h2>

                  <div className="self-end mt-7 max-w-full w-[636px]">
                    <div className="flex gap-5 max-md:flex-col">
                      {teamMembers.slice(0, 2).map((member, index) => (
                        <div
                          key={member.id}
                          className={`${index > 0 ? "ml-5 " : ""}w-6/12 max-md:ml-0 max-md:w-full`}
                        >
                          <TeamMember
                            image={member.image}
                            name={member.name}
                            className={index === 0 ? "mt-6" : ""}
                          />
                        </div>
                      ))}
                    </div>
=======
      <div className="flex flex-col items-center px-20 pt-11 pb-24 bg-white max-md:px-5 max-md:max-w-full">
        <div className="w-full max-w-[1125px]">
          {/* Top Section: Heading + 2 Members */}
          <div className="flex gap-5 max-md:flex-col">
            {/* Left Illustration */}
            <div className="w-3/12 max-md:w-full">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/99a361848dbb5029c887dfbe824cc4ade66fcc4e?placeholderIfAbsent=true"
                alt="Team illustration"
                className="mt-16 aspect-square w-[273px] object-contain max-md:mt-10"
              />
            </div>

            {/* Right Content */}
            <div className="ml-5 w-9/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start max-md:mt-10">
                <h2 id="team-heading" className="text-4xl text-black">
                  Meet The Development Team
                </h2>

                <div className="self-end mt-7 w-full max-w-[636px]">
                  <div className="flex gap-5 max-md:flex-col">
                    {teamMembers.slice(0, 2).map((member, index) => (
                      <div
                        key={member.id}
                        className={`w-6/12 ${index > 0 ? "ml-5" : ""} max-md:ml-0 max-md:w-full`}
                      >
                        <TeamMember
                          image={member.image}
                          name={member.name}
                          className={index === 0 ? "mt-6" : ""}
                        />
                      </div>
                    ))}
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
                  </div>
                </div>
              </div>
            </div>
          </div>

<<<<<<< HEAD
          <div className="mt-16 ml-9 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-[33%] max-md:ml-0 max-md:w-full">
=======
          {/* Bottom Section: 1 Member + 2 Images */}
          <div className="mt-16 ml-9 max-md:mt-10 max-md:ml-0">
            <div className="flex gap-5 max-md:flex-col">
              <div className="w-1/3 max-md:w-full">
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
                <TeamMember
                  image={teamMembers[2].image}
                  name={teamMembers[2].name}
                />
              </div>

<<<<<<< HEAD
              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e74a2e0f8c5719968568504fceb5e17626c4822?placeholderIfAbsent=true"
                  alt="Team member"
                  className="object-contain overflow-hidden shrink-0 self-stretch my-auto ml-1.5 max-w-full aspect-square w-[282px] max-md:mt-10"
                />
              </div>

              <div className="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fafce07dbfaca2ddad847343fd3c44d56373477?placeholderIfAbsent=true"
                  alt="Team member"
                  className="object-contain overflow-hidden shrink-0 self-stretch my-auto max-w-full aspect-square w-[212px] max-md:mt-10"
=======
              <div className="ml-5 w-1/3 max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e74a2e0f8c5719968568504fceb5e17626c4822?placeholderIfAbsent=true"
                  alt="Team member"
                  className="my-auto ml-1.5 aspect-square w-[282px] object-contain max-md:mt-10"
                />
              </div>

              <div className="ml-5 w-1/3 max-md:ml-0 max-md:w-full">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fafce07dbfaca2ddad847343fd3c44d56373477?placeholderIfAbsent=true"
                  alt="Team member"
                  className="my-auto aspect-square w-[212px] object-contain max-md:mt-10"
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
