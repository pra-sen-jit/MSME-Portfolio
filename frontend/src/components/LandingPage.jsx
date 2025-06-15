"use client";
import AboutSection from "./AboutSection";
import ProductsSection from "./ProductsSection";
import ContactSection from "./ContactSection";
import TeamSection from "./TeamSection";
import AnimatedPage from "./AnimatedPage";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function LandingPage() {
  return (
    <AnimatedPage>
      <main className="flex flex-col overflow-x-hidden bg-white">
        {/* Hero Section */}
        <section
          className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 text-center bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://cdn.builder.io/api/v1/image/assets/TEMP/8b2cd4d8230ec436778f1c4599ca00505db2f958?placeholderIfAbsent=true')",
          }}
        >
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10 flex flex-col items-center space-y-4">
            <h1 className="text-4xl font-bold leading-tight max-w-3xl mx-auto text-white md:text-5xl lg:text-6xl">
              Embrace the Timeless Beauty of Silver
            </h1>
            <p className="text-xl font-light text-white md:text-2xl lg:text-3xl">
              Uncover Handcrafted Brilliance
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-black bg-yellow-400 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
            >
              Explore Now
            </Link>
          </div>
        </section>

        {/* Content Sections */}
        <div className="space-y-8 md:space-y-10">
          {/* About Section */}
          <section className="px-6 md:px-10 pt-8 md:pt-10">
            <AboutSection />
          </section>

          {/* Products Section */}
          <section className="px-6 md:px-10 bg-gray-50 py-8 md:py-10">
            <ProductsSection />
          </section>

          {/* Testimonials Section */}
          <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
              <p className="mt-2 text-xl text-blue-700">What our visitors are saying</p>

              <div className="mt-10 relative flex items-center justify-center">
                <button className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <div className="flex space-x-6 overflow-hidden">
                  {/* Testimonial Card 1 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Rajatava</h3>
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        A Very Fun Experience at the Best Water Park in Kolkata.
                        This Theme Park, Wet-O-Wild, has awesome rides, awesome music and an
                        awesome ambiance of fun.
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Card 2 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Prosenjit Saha</h3>
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        A day out in the water park is very much worthy. All the rides were awesome. It's a
                        peak time so rush is there. Pls note get a locker booked before entering to the wet
                        world.
                      </p>
                    </div>
                  </div>

                  {/* Testimonial Card 3 */}
                  <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-16 w-16 text-gray-700"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">Mowsumi Dutta</h3>
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        Nice but need more quick service. you need to stay in queue for 20-25 minutes
                        for a ride even on weekdays. On holiday, you cannot ride all, you have to wait for 1
                        hr too.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-200 focus:outline-none">
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>

              <Link
                to="/feedback"
                className="mt-10 inline-block px-8 py-3 text-lg font-semibold text-white bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
              >
                View More
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section className="px-6 md:px-10 pt-4 pb-8 md:pt-6 md:pb-10">
            <ContactSection />
          </section>

          {/* Team Section */}
          <section className="px-6 md:px-10 pt-6 pb-12 md:pt-8 md:pb-14">
            <TeamSection />
          </section>
        </div>
      </main>
    </AnimatedPage>
  );
}

export default LandingPage;
