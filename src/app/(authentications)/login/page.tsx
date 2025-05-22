"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // For navigation after login
import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import { AiOutlineLoading } from "react-icons/ai"; // Import loading spinner icon
import swal from "sweetalert";
import { IoFingerPrint } from "react-icons/io5";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [loading, setLoading] = useState(false); // State to track loading
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // Start loading

    try {
      const response = await axios.post("/pages/api/login", {
        email,
        password,
      });
      setLoading(false);
      if (response?.data?.success) {
        // Show SweetAlert success message
        swal({
          title: response?.data?.message,
          icon: "success",
        });
        if (response?.data?.role === "admin") {
          router.push("/admin/dashboard");
        } else {
          router.push("/dashboard");
        }
      } else {
        swal({
          title: response?.data?.message,
          icon: "warning",
        });
      }
    } catch (err: any) {
      setLoading(false);
      setError("An error occurred while logging in");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100/50">
      <div className=" border border-slate-300 shadow-2xl bg-white w-[480px] px-12 py-14 rounded-lg  ">
        <div className=" flex items-center justify-center text-center">
          <div className=" space-y-2">
            <div className=" flex items-center justify-center">
              <IoFingerPrint size={85} className=" text-blue-500/90" />
            </div>
            <h1 className=" text-red-500 font-semibold tracking-[1px] text-[22px]">
              Welcome
            </h1>
            <h1 className=" text-green-700 text-[18px]">
              ইমেইল এবং পাসওয়ার্ড দিয়ে লগ ইন করুন
            </h1>
          </div>
        </div>
        {error && (
          <div className="text-red-600 text-sm text-center mb-4">{error}</div>
        )}

        <form onSubmit={handleLogin} className=" mt-5 space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="w-full bg-blue-600/90 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none disabled:bg-gray-400"
              disabled={loading} // Disable the button while loading
            >
              {loading ? (
                <AiOutlineLoading className="animate-spin mr-2 inline" />
              ) : (
                "Login"
              )}
              {loading && "Logging in..."} {/* Show loading text */}
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-blue-600 hover:text-blue-800"
              >
                Register here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
