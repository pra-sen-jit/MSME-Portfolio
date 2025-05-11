import React from "react";
import Swal from "sweetalert2";

function App() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const email_key = "import.meta.env.VITE_EMAIL_KEY";

    const formData = new FormData(event.target);
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
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 mb-10 p-4 border rounded shadow"> {/* Add mb-20 for spacing from footer */}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            required
            placeholder="Enter your message"
            className="w-full px-3 py-2 border rounded h-32" // Increased height here
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit Form
        </button>
      </form>
    </div>
  );
}

export default App;
