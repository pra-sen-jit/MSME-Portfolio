import React from "react";

function AboutSection() {
  return (
    <section
<<<<<<< HEAD
      className="flex overflow-hidden flex-col px-12 pt-12 pb-24 w-full bg-zinc-100 max-md:px-5 max-md:max-w-full"
=======
      className="w-full bg-zinc-100 px-6 py-12"
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
      aria-labelledby="about-heading"
    >
      <h2
        id="about-heading"
<<<<<<< HEAD
        className="self-center text-4xl text-black max-md:max-w-full"
=======
        className="text-4xl font-semibold text-center text-black mb-12"
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
      >
        About Magrahat Silver Filigree
      </h2>

<<<<<<< HEAD
      <div className="mt-20 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[46%] max-md:ml-0 max-md:w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/48f7141c56b657fd9d1b9ce97586536c2a3f3fda?placeholderIfAbsent=true"
              alt="Silver filigree craftsmanship"
              className="object-contain overflow-hidden grow w-full aspect-square rounded-[29px] max-md:mt-10 max-md:max-w-full"
            />
          </div>

          <div className="ml-5 w-[54%] max-md:ml-0 max-md:w-full">
            <article className="text-xl text-black max-md:mt-10 max-md:max-w-full">
              <p className="mb-6">
                Magrahat Silver Filigree is more than just a craft—it is a
                living tradition that has been perfected over generations.
                Rooted in rich cultural heritage, this art form represents the
                fusion of delicate precision and enduring beauty. Each piece is
                meticulously handcrafted by skilled artisans who have inherited
                the secrets of their craft, turning raw silver into intricate
                designs that echo stories of the past and dreams of the future.
              </p>

              <p>
                Our artisans blend traditional techniques with a passion for
                innovation, ensuring that every creation not only honors
                time-honored methods but also resonates with modern aesthetics.
                This harmonious balance of legacy and creativity has established
                Magrahat as a symbol of exceptional quality and artistic
                excellence. As you explore our catalogue, you will discover the
                detailed workmanship and vibrant history behind each unique
                piece, reflecting a commitment to preserving cultural heritage
                while embracing contemporary artistry.
              </p>
            </article>
          </div>
=======
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
>>>>>>> b908e3add2acd3e74f375514f08365f7cc8548a0
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
