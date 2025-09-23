import { NextRequest } from 'next/server';
import { validateRequestBody, callBackendAuth, handleAuthResponse } from '@/services/auth_service';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { code: string; redirectUri: string };
    const validation = await validateRequestBody(body, ['code', 'redirectUri']);
    if (!validation.valid) {
      return Response.json({ error: validation.error }, { status: 400 });
    }
    const backendResponse = await callBackendAuth('/auth/google_login', {
      code: body.code,
      redirectUri: body.redirectUri,
      platform: 'web',
    });
    return await handleAuthResponse(backendResponse);
  } catch (error) {
    console.error('Google auth API error:', error);
    return Response.json({ error: 'Authentication failed' }, { status: 500 });
  }
}