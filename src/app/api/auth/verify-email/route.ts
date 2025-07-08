import { NextRequest, NextResponse } from "next/server";
import { config } from "@/config/api";

interface VerifyEmailPayload {
  token?: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: VerifyEmailPayload = await req.json();
    const token = body?.token;
    if (!token) {
      return NextResponse.json({ error: "Verification token is missing." }, { status: 400 });
    }
    const res = await fetch(`${config.baseUrl}/auth/verify_email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
      cache: "no-store"
    });
    const data = (await res.json()) as { message?: string; error?: string };
    if (res.ok) {
      return NextResponse.json({ message: data.message || "Your email has been verified successfully." });
    } else {
      return NextResponse.json({ error: data.error || "Failed to verify email." }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
