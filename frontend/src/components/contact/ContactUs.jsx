import { useState } from "react";
import Swal from "sweetalert2";
import { FaSpinner } from "react-icons/fa";

function ContactUs() {
  const [isContactSubmitting, setIsContactSubmitting] = useState(false);
  const [isFeedbackSubmitting, setIsFeedbackSubmitting] = useState(false);

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setIsContactSubmitting(true);

    const formData = new FormData(event.target);

    // Trim and validate fields manually
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    if (!name || !email || !message) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please fill out all fields properly.",
      });
      return;
    }

    // Replace this with your actual key, NOT in quotes as a string
    const email_key = import.meta.env.VITE_EMAIL_KEY;

    formData.append("access_key", email_key);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Good job!",
          text: "Message sent successfully!",
          icon: "success",
        });
        event.target.reset();
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again.",
      });
    } finally {
      setIsContactSubmitting(false);
    }
  };

  const handleFeedbackSubmit = async (event) => {
    event.preventDefault();
    setIsFeedbackSubmitting(true);

    const formData = new FormData(event.target);
    const name = formData.get("feedbackName")?.trim();
    const message = formData.get("feedbackMessage")?.trim();

    if (!name || !message) {
      Swal.fire({
        icon: "warning",
        title: "Validation Error",
        text: "Please fill out both fields",
      });
      return;
    }

    // TODO: Add your feedback submission logic here
    // This could be similar to the contact form submission
    // but pointing to your Node.js backend API

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // TODO: Replace with actual API call
      // await fetch('/api/feedback', { method: 'POST', body: ... });

      Swal.fire({
        title: "Thank You!",
        text: "Feedback submitted successfully!",
        icon: "success",
      });
      event.target.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Failed to submit feedback. Please try again.",
      });
    } finally {
      setIsFeedbackSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Contact Section */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Contact Us
            </h2>
            <p className="text-gray-600">We'd love to hear from you!</p>
          </div>
          <form onSubmit={handleContactSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your message..."
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-40"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isContactSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isContactSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </section>

        {/* Feedback Section */}
        <section className="bg-purple-50 rounded-2xl shadow-lg p-8">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Share Your Feedback
            </h2>
            <p className="text-gray-600">We value your opinions</p>
          </div>
          <form onSubmit={handleFeedbackSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="feedbackName"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Feedback
              </label>
              <textarea
                name="feedbackMessage"
                placeholder="Your feedback..."
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent h-32"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isFeedbackSubmitting}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isFeedbackSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Feedback"
              )}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default ContactUs;
