import React, { useEffect, useState, useRef } from "react";
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

  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollSpeed = 0.3;

  // Duplicate items for seamless looping
  const sliderItems = [...teamMembers, ...teamMembers];

  useEffect(() => {
    if (!sliderRef.current || sliderItems.length === 0) return;

    let animationFrameId;
    let lastTimestamp = performance.now();

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const delta = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isPaused) {
        setScrollPosition((prev) => {
          const newPosition = prev + (scrollSpeed * delta) / 16;
          const sliderWidth = sliderRef.current.scrollWidth / 2;
          
          if (newPosition >= sliderWidth) {
            return 0;
          }
          return newPosition;
        });
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, sliderItems.length]);

  return (
    <section 
      className="bg-white pt-0 pb-0  overflow-hidden relative" 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-1xl mx-auto text-center relative"> {/* Increased max-width */}
        <motion.h2
          id="team-heading"
          className="text-3xl font-bold text-black mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet The Development Team
        </motion.h2>

        <div className="relative pt-1 overflow-hidden h-72"> {/* Increased height */}
          <div
            ref={sliderRef}
            className="flex gap-40 w-max" // Increased gap between items (gap-20)
            style={{
              transform: `translateX(-${scrollPosition}px)`,
              transition: isPaused ? "transform 0.5s ease" : "none",
            }}
          >
            {sliderItems.map((member, index) => (
              <motion.div
                key={`${member.id}-${index}`}
                className="flex-shrink-0 w-40 flex flex-col items-center" // Increased width (w-40)
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-40 h-40 rounded-full border-2 border-gray-200 shadow-lg overflow-hidden mb-3"> {/* Increased size */}
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-base font-medium text-gray-800"> {/* Slightly larger text */}
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