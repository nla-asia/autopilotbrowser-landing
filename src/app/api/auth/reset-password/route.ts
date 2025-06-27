import { config } from "@/config/api";
import { NextRequest, NextResponse } from "next/server";

interface ResetPasswordResponse {
  message?: string;
  error?: string;
}

export async function POST(req: NextRequest) {
  try {
    const { token, newPassword }: { token?: string; newPassword?: string } = await req.json();
    if (!token || !newPassword) {
      return NextResponse.json({ error: "Token and new password are required." }, { status: 400 });
    }
    const apiRes = await fetch(`${config.baseUrl}/auth/reset_password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, newPassword }),
    });
    const data: ResetPasswordResponse = await apiRes.json();
    if (!apiRes.ok) {
      return NextResponse.json({ error: data.error || "Failed to reset password." }, { status: apiRes.status });
    }
    return NextResponse.json({ message: data.message || "Password reset successful." });
  } catch(error) {
    console.error("Reset password error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
