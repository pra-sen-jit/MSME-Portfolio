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

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotPasswordType, setForgotPasswordType] = useState('artisan');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [adminId, setAdminId] = useState('');
  const [email, setEmail] = useState('');
  const [artisanIdForForgot, setArtisanIdForForgot] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  // Add phone number validation function
  const validatePhoneNumber = (number) => {
    return number.replace(/\D/g, '').slice(0, 10);
  };

  const handlePhoneChange = (e) => {
    const validatedNumber = validatePhoneNumber(e.target.value);
    setPhone(validatedNumber);
  };

  const handleIdentifierChange = (e) => {
    if (loginType === 'artisan') {
      const validatedNumber = validatePhoneNumber(e.target.value);
      setIdentifier(validatedNumber);
    } else {
      setIdentifier(e.target.value);
    }
  };

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
        // Clear all potentially stale user-related data from localStorage BEFORE setting new ones
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("ArtisanId");
        localStorage.removeItem("role");
        localStorage.removeItem("phoneNumber");
        localStorage.removeItem("profileImage");

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", response.data.username);
        localStorage.setItem("ArtisanId", response.data.artisanId);
        localStorage.setItem("role", loginType);
        if (response.data.profileImage) {
          localStorage.setItem("profileImage", response.data.profileImage);
        } else {
          localStorage.removeItem("profileImage");
        }
        navigate("/");
        
        if(loginType === 'admin') {
          localStorage.setItem("adminId", response.data.adminId);
          navigate("/admin");
        } else {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("ArtisanId", response.data.artisanId);
          localStorage.setItem("phoneNumber", response.data.PhoneNumber);
          if (response.data.profileImage) {
            localStorage.setItem("profileImage", response.data.profileImage);
          } else {
            localStorage.removeItem("profileImage");
          }
          navigate("/");
        }
        alert("Login successful!");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed. Please check credentials.");
      console.error("Login error:", err);  // Add logging
    }
  };
   const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    setShowForgotPassword(true);
    setForgotPasswordType(loginType);
  };

  const handleArtisanForgotSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${backendUrl}/auth/forgot-password/artisan`, {
        artisanId: artisanIdForForgot,
        phoneNumber: phone
      });
      if (response.data.success) {
        setShowSuccessPopup(true);
        setSuccessMessage('Forget password request initiated. Admin will contact you shortly.');
        setShowForgotPassword(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Request failed');
    }
  };

  const handleAdminForgotSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSending(true);
    try {
      const response = await axios.post(`${backendUrl}/auth/forgot-password/admin`, {
        adminId,
        email
      });
      
      if (response.data.success) {
        setShowSuccessPopup(true);
        setSuccessMessage(response.data.message || 'Password reset instructions sent to your email');
        setShowForgotPassword(false);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Password reset failed. Please contact support.');
    } finally {
      setIsSending(false);
    }
  };


  return (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
    {/* Success Popup */}
    {showSuccessPopup && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg max-w-sm w-full mx-4 animate-scale-in">
          <p className="text-center mb-4">{successMessage}</p>
          <button
            onClick={() => {
              setShowSuccessPopup(false);
              setArtisanIdForForgot('');
              setEmail('');
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    )}

    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
      <div className="flex flex-col items-center mb-6">
        <div className="bg-black p-3 rounded-lg mb-4">
          <Lock className="text-white" size={24} />
        </div>
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={() => {
              setLoginType("artisan");
              setError('');
            }}
            className={`text-lg font-medium ${
              loginType === 'artisan' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            } transition-colors`}
          >
            Artisan Login
          </button>
          <button
            onClick={() => {
              setLoginType("admin");
              setError('');
            }}
            className={`text-lg font-medium ${
              loginType === 'admin' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            } transition-colors`}
          >
            Admin Login
          </button>
        </div>
      </div>

      {!showForgotPassword ? (
        <>
          <h1 className="text-2xl font-bold text-center mb-4">
            {loginType === 'admin' ? 'Admin Sign In' : 'Artisan Sign In'}
          </h1>

          {error && <p className="mb-4 text-center text-red-600 animate-fade-in">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                {loginType === 'admin' ? 'Admin ID' : 'Phone Number'}
              </label>
              <input
                type={loginType === 'admin' ? 'text' : 'tel'}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder={loginType === 'admin' ? 'Enter admin ID' : 'Enter 10-digit phone number'}
                value={identifier}
                onChange={handleIdentifierChange}
                maxLength={loginType === 'admin' ? undefined : 10}
                pattern={loginType === 'admin' ? undefined : "[0-9]{10}"}
                title={loginType === 'admin' ? undefined : "Please enter a 10-digit phone number"}
                required
              />
              {loginType === 'artisan' && identifier && identifier.length !== 10 && (
                <p className="text-red-500 text-sm mt-1">Phone number must be 10 digits</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
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
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded transition-colors"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label htmlFor="remember-me" className="ml-2 block text-gray-700">
                  Remember me
                </label>
              </div>
              <div>
                <button
                  onClick={handleForgotPasswordClick}
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
            >
              Sign In →
            </button>
          </form>

          {loginType === 'artisan' && (
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Register now
                </Link>
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="forgot-password-form">
          <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>
          {error && <p className="mb-4 text-center text-red-600 animate-fade-in">{error}</p>}
          
          {loginType === 'artisan' ? (
            <form onSubmit={handleArtisanForgotSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Artisan ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={artisanIdForForgot}
                  onChange={(e) => setArtisanIdForForgot(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={phone}
                  onChange={handlePhoneChange}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  title="Please enter a 10-digit phone number"
                  placeholder="Enter 10-digit phone number"
                  required
                />
                {phone && phone.length !== 10 && (
                  <p className="text-red-500 text-sm mt-1">Phone number must be 10 digits</p>
                )}
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-1/2 bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Notify Admin'
                  )}
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleAdminForgotSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Admin ID</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={artisanIdForForgot}
                  onChange={(e) => setArtisanIdForForgot(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  className="w-1/2 bg-gray-200 text-black py-2 rounded-md hover:bg-gray-300 transition-colors"
                  onClick={() => setShowForgotPassword(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2 transition-colors"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Password'
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  </div>
);
}
