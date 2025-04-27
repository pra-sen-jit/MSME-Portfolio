import { useState } from "react";
import { UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedPage from "../AnimatedPage";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    artisanId: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle sign up logic here
  };

  return (
    <AnimatedPage>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <div className="flex justify-center mb-6">
            <div className="bg-black p-3 rounded-lg">
              <UserPlus className="text-white" size={24} />
            </div>
          </div>

          <h1 className="text-2xl font-bold text-center mb-4">
            Create an account
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Enter your details to get started
          </p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-gray-700 mb-2">
                  First name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-gray-700 mb-2">
                  Last name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="artisanId" className="block text-gray-700 mb-2">
                Artisan id
              </label>
              <input
                id="artisanId"
                name="artisanId"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                value={formData.artisanId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                id="agreeToTerms"
                name="agreeToTerms"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={formData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label
                htmlFor="agreeToTerms"
                className="ml-2 block text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-black hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-black hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?
              <Link to="/login" className="text-black font-semibold ml-1">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
}
