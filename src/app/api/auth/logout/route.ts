import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST() {
  try {
    // Clear the HTTP-only auth token cookie
    const cookieStore = await cookies();
    cookieStore.delete('auth_token');

    // You could also call the backend API to invalidate the session on the server side
    // const backendResponse = await fetch(`${config.baseUrl}/auth/logout`, {
    //   method: 'POST',
    //   headers: {
    //     'Cookie': request.headers.get('cookie') || '',
    //   },
    // });

    return NextResponse.json({
      success: true,
      message: 'Logged out successfully'
    });
  } catch (error) {
    console.error('Logout API error:', error);
    return NextResponse.json(
      { error: 'Logout failed' },
      { status: 500 }
    );
  }
}