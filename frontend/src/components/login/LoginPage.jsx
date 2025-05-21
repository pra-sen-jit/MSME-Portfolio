import { useState } from "react";
import axios from "axios";
import { Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [loginType, setLoginType] = useState("artisan");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
 // Correct endpoint URL construction
  const loginUrl = loginType === 'admin' 
    ? `${backendUrl}/auth/admin/login`
    : `${backendUrl}/auth/login`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const payload = loginType === 'admin' ? 
        { adminId: identifier, adminPassword: password } :
        { PhoneNumber: identifier, password };

      const response = await axios.post(loginUrl, payload);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("ArtisanId", response.data.artisanId);
        localStorage.setItem("role", loginType);
        navigate("/");
        
        if(loginType === 'admin') {
          localStorage.setItem("adminId", response.data.adminId);
          navigate("/admin");
        } else {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("ArtisanId", response.data.artisanId);
          navigate("/");
        }
        alert("Login successful!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check credentials.");
      console.error("Login error:", err);  // Add logging
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center mb-6">
          <div className="bg-black p-3 rounded-lg mb-4">
            <Lock className="text-white" size={24} />
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <button
              onClick={() => setLoginType("artisan")}
              className={`text-lg font-medium ${
                loginType === 'artisan' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Artisan Login
            </button>
            <button
              onClick={() => setLoginType("admin")}
              className={`text-lg font-medium ${
                loginType === 'admin' 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Admin Login
            </button>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-center mb-4">
          {loginType === 'admin' ? 'Admin Sign In' : 'Artisan Sign In'}
        </h1>

        {error && <p className="mb-4 text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              {loginType === 'admin' ? 'Admin ID' : 'Phone Number'}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={loginType === 'admin' ? 'Enter admin ID' : 'Enter phone number'}
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-blue-600 hover:text-blue-800">
                Forgot password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Sign In →
          </button>
        </form>

        {loginType === 'artisan' && (
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-600 font-semibold hover:text-blue-800">
                Register now
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}