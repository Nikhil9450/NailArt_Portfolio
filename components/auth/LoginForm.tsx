"use client";

import { useState } from "react";
import { Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { login } from "@/lib/api/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (
        e: React.FormEvent
        ) => {
        e.preventDefault();

        try {
            setLoading(true);

            await login(email, password);

            router.push("/admin");
        } catch (error) {
            toast.error("Invalid credentials");
        } finally {
            setLoading(false);
        }
    };
  return (
    <div className="w-full max-w-md rounded-[var(--theme-radius)] bg-white p-10 shadow-xl">
      <h1 className="text-center text-3xl font-bold">
        Admin Login
      </h1>

      <p className="mt-2 text-center text-gray-500">
        Login to manage bookings
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 space-y-6"
      >
        <div>
          <label className="mb-2 block text-sm font-medium">
            Email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full rounded-xl border py-3 pl-11 pr-4 focus:border-pink-500 focus:outline-none"
              placeholder="admin@nailstudio.com"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full rounded-xl border py-3 pl-11 pr-4 focus:border-pink-500 focus:outline-none"
              placeholder="********"
            />
          </div>
        </div>

        <Button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl"
        >
        {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}