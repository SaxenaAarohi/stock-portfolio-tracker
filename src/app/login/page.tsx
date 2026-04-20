"use client";
import { useUser } from "@/Context/Usercontext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AuthPage() {
  const { setUser } = useUser();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = isLogin ? "/api/login" : "/api/signup";

      const payload = isLogin
        ? { email, password }
        : { name, email, password };

      const res = await fetch(url, {
        method: "POST",
          headers: {
      "Content-Type": "application/json"
    },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        toast(data.message);
        setUser(data.user);
        router.push("/");
        if (!isLogin) {
          setName("");
          setEmail("");
          setPassword("");
        }
      }
    } catch (err: unknown) {
      alert(err);
    }
  };

  const handleGuestLogin = () => {
    document.cookie = "guest=true; path=/";
      document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = '/';
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-gray-900/70 shadow-2xl rounded-2xl p-8 w-100">
        <h2 className="text-3xl font-extrabold text-blue-400 text-center mb-8">
          {isLogin ? "Welcome Back " : "Create Account "}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="relative">
              <input
                type="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Name"
              />
              <label
                htmlFor="name"
                className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400"
              >
                Name
              </label>
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Email"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400"
            >
              Email
            </label>
          </div>

          <div className="relative">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="peer w-full px-4 pt-5 pb-2 rounded-lg bg-gray-800 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Password"
            />
            <label
              htmlFor="password"
              className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-400"
            >
              Password
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold py-3 rounded-xl transition duration-200 shadow-md"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-400">
          {isLogin ? "Don’t have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-400 font-medium hover:underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

    
      </div>
    </div>
  );
}
