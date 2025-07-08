"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

interface VerifyEmailResponse {
  message?: string;
  error?: string;
}

export default function VerifyEmailClient() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") || undefined;
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Verification token is missing.");
      return;
    }
    setLoading(true);
    fetch("/api/auth/verify-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token })
    })
      .then(async (res) => {
        const data = (await res.json()) as VerifyEmailResponse;
        if (res.ok) {
          setMessage(data.message || "Your email has been verified successfully.");
        } else {
          setError(data.error || "Failed to verify email.");
        }
      })
      .catch(() => {
        setError("Something went wrong. Please try again.");
      })
      .finally(() => setLoading(false));
  }, [token]);

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #eee", borderRadius: 8, textAlign: "center" }}>
      <h2>Email Verification</h2>
      {loading && <div style={{ margin: "16px 0" }}>Verifying...</div>}
      {message && <div style={{ color: "green", margin: "16px 0" }}>{message}</div>}
      {error && <div style={{ color: "red", margin: "16px 0" }}>{error}</div>}
    </div>
  );
}
