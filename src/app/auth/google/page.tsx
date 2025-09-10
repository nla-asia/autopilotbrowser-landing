// app/auth/google/page.tsx
import { config } from '@/config/api';
import { redirect } from 'next/navigation';
import AuthSuccess from './AuthSuccess';
import AuthError from './AuthError';

async function getAuthentication(code: string, redirectUri: string) {
      try {
            const res = await fetch(`${config.baseUrl}/auth/google_login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code, redirectUri, platform: 'web' }),
            cache: "no-store"
            });
            const data = (await res.json()) as { message?: string; error?: string; token?: string; user?: object };
            console.log('Authentication result:', data);
            if (res.ok) {
            return data;
            } else {
            return { error: data.error || 'Failed to get authenticated!'};
            }
      } catch {
        return { error: "Something went wrong. Please try again." };
      }
}

export default async function GoogleAuthPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const params = await searchParams;
  const code = typeof params.code === 'string' ? params.code : null;
  const error = typeof params.error === 'string' ? params.error : null;

  // Get client ID
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  if (!clientId) {
    return <AuthError error="OAuth not configured" />;
  }

  // Build redirect URI
  const baseUrl = process.env.NEXTAUTH_URL || 'http://localhost:3000';
  const redirectUri = `${baseUrl}/auth/google`;

  // Handle OAuth callback (when Google redirects back with code)
  if (code) {
    console.log('Received auth code:', code);
    const authResult = await getAuthentication(code, redirectUri);
    if(!authResult.token){
     return <AuthError error={authResult.error || 'Failed to get authenticated!'} />;
    }

    // Return success component instead of redirecting immediately
    return <AuthSuccess token={authResult.token} />;
  }

  // Handle OAuth errors
  if (error) {
    console.error('OAuth error:', error);
    return <AuthError error={error} />;
  }

  // Build Google OAuth URL (using the correct endpoint)
  const googleAuthUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  googleAuthUrl.searchParams.set('client_id', clientId);
  googleAuthUrl.searchParams.set('response_type', 'code');
  googleAuthUrl.searchParams.set('redirect_uri', redirectUri);
  googleAuthUrl.searchParams.set('scope', 'openid email profile');
  googleAuthUrl.searchParams.set('access_type', 'offline');
  googleAuthUrl.searchParams.set('prompt', 'select_account');

  // Redirect to Google OAuth
  redirect(googleAuthUrl.toString());
}