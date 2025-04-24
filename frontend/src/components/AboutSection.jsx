import React from "react";

function AboutSection() {
  return (
    <section
      className="w-full bg-zinc-100 px-6 py-12"
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
        className="text-4xl font-semibold text-center text-black mb-12"
      >
        About Magrahat Silver Filigree
      </h2>

      <div className="max-w-7xl mx-auto flex flex-wrap md:flex-nowrap gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/48f7141c56b657fd9d1b9ce97586536c2a3f3fda?placeholderIfAbsent=true"
            alt="Silver filigree craftsmanship"
            className="w-full h-auto max-w-[600px] rounded-3xl object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2">
          <article className="text-lg text-black space-y-6">
            <p>
              Magrahat Silver Filigree is more than just a craft—it is a living
              tradition that has been perfected over generations. Rooted in rich
              cultural heritage, this art form represents the fusion of delicate
              precision and enduring beauty. Each piece is meticulously
              handcrafted by skilled artisans who have inherited the secrets of
              their craft, turning raw silver into intricate designs that echo
              stories of the past and dreams of the future.
            </p>
            <p>
              Our artisans blend traditional techniques with a passion for
              innovation, ensuring that every creation not only honors
              time-honored methods but also resonates with modern aesthetics.
              This harmonious balance of legacy and creativity has established
              Magrahat as a symbol of exceptional quality and artistic
              excellence. As you explore our catalogue, you will discover the
              detailed workmanship and vibrant history behind each unique piece,
              reflecting a commitment to preserving cultural heritage while
              embracing contemporary artistry.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
