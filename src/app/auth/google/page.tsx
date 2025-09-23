// app/auth/google/page.tsx
import { redirect } from 'next/navigation';
import AuthSuccess from './GoogleAuthSuccess';
import AuthError from './AuthError';
import { config } from '@/config/api';

export default async function GoogleAuthPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
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
  const redirectUri = `${config.siteUrl}/auth/google`;

  // Handle OAuth callback (when Google redirects back with code)
  if (code) {
    // Pass code and redirectUri to AuthSuccess for client-side API call
    return <AuthSuccess code={code} redirectUri={redirectUri} />;
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