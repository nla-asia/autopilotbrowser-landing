import { config } from '../config/api';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export async function validateRequestBody(body: unknown, requiredFields: string[]): Promise<{ valid: boolean; error?: string }> {
  if (typeof body !== 'object' || body === null) {
    return { valid: false, error: 'Invalid request body' };
  }
  for (const field of requiredFields) {
    if (!(field in body)) {
      return { valid: false, error: `${field} is required` };
    }
  }
  return { valid: true };
}

export async function callBackendAuth(endpoint: string, payload: object): Promise<Response> {
  return fetch(`${config.baseUrl}${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set('auth_token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  });
}

export async function handleAuthResponse(backendResponse: Response): Promise<NextResponse> {
  const data: unknown = await backendResponse.json();
  if (!backendResponse.ok) {
    const errorMsg = typeof data === 'object' && data !== null && 'error' in data ? (data as { error: string }).error : 'Authentication failed';
    return NextResponse.json(
      { error: errorMsg },
      { status: backendResponse.status }
    );
  }
  const authData = data as AuthResponse;
  await setAuthCookie(authData.token);
  return NextResponse.json(authData);
}

export const callGoogleAuthAPIRoute = async function (code: string, redirectUri: string): Promise<AuthResponse | { error: string }> {
      try {
            const res = await fetch(`${config.siteUrl}/api/auth/google`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, redirectUri }),
            cache: "no-store"
            });
            const data = (await res.json()) as AuthResponse | { error: string };
            console.log('Authentication result:', data);
            if (res.ok) {
            return data as AuthResponse;
            } else {
            const errorData = data as { error: string };
            return { error: errorData.error || 'Failed to get authenticated!'};
            }
      } catch(e) {
        console.log(e);
        return { error: "Something went wrong. Please try again." };
      }
}