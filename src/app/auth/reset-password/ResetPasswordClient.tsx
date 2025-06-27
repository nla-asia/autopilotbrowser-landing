"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";

type ResetPasswordResponse = { message?: string; error?: string };

export default function ResetPasswordClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || "";
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    if (!token) {
      setError("Invalid or missing token.");
      return;
    }
    if (!newPassword || newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });
      const data: ResetPasswordResponse = await res.json();
      if (res.ok) {
        setMessage(data.message || "Your password has been reset. You can now log in.");
      } else {
        setError(data.error || "Failed to reset password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-lg bg-white/90 p-8 shadow-xl border border-blue-200"
      >
        <h2 className="mb-6 text-2xl font-bold text-center text-blue-800">Reset Password</h2>
        {message && <div className="mb-4 text-green-700 bg-green-100 border border-green-300 rounded px-3 py-2 text-center">{message}</div>}
        {error && <div className="mb-4 text-red-700 bg-red-100 border border-red-300 rounded px-3 py-2 text-center">{error}</div>}
        <div className="mb-4">
          <label className="block mb-1 font-medium text-blue-900">New Password</label>
          <input
            type="password"
            className="w-full rounded border border-blue-300 px-3 py-2 bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={newPassword}
            onChange={e => setNewPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-medium text-blue-900">Confirm Password</label>
          <input
            type="password"
            className="w-full rounded border border-blue-300 px-3 py-2 bg-blue-50 text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            minLength={6}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 font-semibold text-white hover:bg-blue-700 disabled:opacity-50 shadow flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
              </svg>
              Resetting...
            </>
          ) : (
            "Reset Password"
          )}
        </button>
      </form>
    </div>
  );
}
