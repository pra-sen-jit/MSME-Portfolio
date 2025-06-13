import React from "react";
import { motion } from "framer-motion";
import premImage from "../assets/prem.png";
import Debu from "../assets/debangshu.png";
import Prasenjit from "../assets/prasenjit.png";
import subhrajit from "../assets/subhrajit.png";
import gourav from "../assets/gourav.png";
import subho from "../assets/subhobrata.png";

function TeamSection() {
  const teamMembers = [
    { id: 1, image: Debu, name: "Debangshu Roy" },
    { id: 2, image: Prasenjit, name: "Prasenjit Datta" },
    { id: 4, image: premImage, name: "Prem Ghosh" },
    { id: 5, image: gourav, name: "Gourav Majumder" },
    { id: 6, image: subho, name: "Subhobrata Maity" },
  ];

  return (
    <section className="bg-white pt-0 pb-0 relative">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          id="team-heading"
          className="text-3xl font-bold text-black mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet The Development Team
        </motion.h2>

        <div className="relative h-72">
          <div className="flex justify-center gap-30 w-full">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-40 h-40 rounded-full border-2 border-gray-200 shadow-lg overflow-hidden mb-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base font-medium text-gray-800">
                  {member.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamSection;