import { motion } from "framer-motion";
import Prem from "../assets/prem.png";
import Debu from "../assets/debangshu.png";
import Prasenjit from "../assets/prasenjit.png";
import Gourav from "../assets/gourav.png";
import Subho from "../assets/subhobrata.png";

function TeamSection() {
  const teamMembers = [
    { id: 1, image: Debu, name: "Debangshu Roy" },
    { id: 2, image: Prasenjit, name: "Prasenjit Datta" },
    { id: 4, image: Prem, name: "Prem Ghosh" },
    { id: 5, image: Gourav, name: "Gourav Majumder" },
    { id: 6, image: Subho, name: "Subhobrata Maity" },
  ];

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          id="team-heading"
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet The Development Team
        </motion.h2>

        {/* Mobile: Single column stack */}
        <div className="block sm:hidden space-y-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-32 h-32 rounded-full border-2 border-gray-200 shadow-lg overflow-hidden mb-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-gray-800 px-2 text-center">
                {member.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tablet: 2-3 column grid */}
        <div className="hidden sm:grid lg:hidden grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center max-w-xs"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-36 h-36 rounded-full border-2 border-gray-200 shadow-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base font-medium text-gray-800 text-center">
                {member.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Horizontal layout */}
        <div className="hidden lg:flex justify-center items-center gap-8 xl:gap-12 flex-wrap">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="flex flex-col items-center flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-40 h-40 xl:w-44 xl:h-44 rounded-full border-2 border-gray-200 shadow-lg overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-base xl:text-lg font-medium text-gray-800 text-center">
                {member.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
