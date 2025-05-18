import { useState } from "react";
import axios from "axios";
import { UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    PhoneNumber: "",
    artisanId: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  const [error, setError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const signupurl = `${backendUrl}/auth/signup`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name === "PhoneNumber") {
      // Only allow numbers and limit to 10 digits
      const numericValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
      
      // Clear phone error when user is typing
      if (phoneError) setPhoneError("");
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }

    // Validate password as user types
    if (name === "password") {
      validatePassword(value);
    }
  };

  const validatePhoneNumber = () => {
    if (formData.PhoneNumber.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return false;
    }
    return true;
  };

  const validatePassword = (password) => {
    const errors = [];
    
    if (password.length < 6) {
      errors.push("Password must be at least 6 characters");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }
    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one digit");
    }

    setPasswordError(errors.join(". "));
    return errors.length === 0;
  };

  const validateForm = () => {
    const isPhoneValid = validatePhoneNumber();
    const isPasswordValid = validatePassword(formData.password);
    
    // Also check if passwords match
    if (formData.password !== formData.confirmPassword) {
      setPasswordError(prev => prev ? `${prev}. Passwords do not match` : "Passwords do not match");
      return false;
    }

    return isPhoneValid && isPasswordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    // Validate form before submission
    if (!validateForm()) return;
    
    try {
      const response = await axios.post(signupurl, formData);
      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("ArtisanId", response.data.artisanId);
        alert("Signup successful !!!");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
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

        {error && <p className="mb-4 text-center text-red-600">{error}</p>}

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
            <label htmlFor="PhoneNumber" className="block text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              id="PhoneNumber"
              name="PhoneNumber"
              type="tel"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter 10-digit phone number"
              value={formData.PhoneNumber}
              onChange={handleChange}
              onBlur={validatePhoneNumber}
              required
            />
            {phoneError && <p className="mt-1 text-sm text-red-600">{phoneError}</p>}
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
              placeholder="Enter your Artisan id"
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
            {passwordError && (
              <p className="mt-1 text-sm text-red-600">
                {passwordError}
              </p>
            )}
            <div className="mt-1 text-xs text-gray-500">
              Password must contain:
              <ul className="list-disc pl-5">
                <li className={formData.password.length >= 6 ? "text-green-500" : ""}>
                  At least 6 characters
                </li>
                <li className={/[A-Z]/.test(formData.password) ? "text-green-500" : ""}>
                  At least one uppercase letter
                </li>
                <li className={/[a-z]/.test(formData.password) ? "text-green-500" : ""}>
                  At least one lowercase letter
                </li>
                <li className={/\d/.test(formData.password) ? "text-green-500" : ""}>
                  At least one digit
                </li>
              </ul>
            </div>
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
            <label htmlFor="agreeToTerms" className="ml-2 block text-gray-700">
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
  );
}