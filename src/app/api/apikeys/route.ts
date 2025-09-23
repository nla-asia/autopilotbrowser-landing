import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { config } from '@/config/api';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  
    const backendResponse = await fetch(`${config.baseUrl}/api_keys`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await backendResponse.json();
    if (!backendResponse.ok) {
      return NextResponse.json({ error: (typeof data === 'object' && data !== null && 'error' in data) ? (data as Record<string, unknown>).error : 'Failed to fetch API keys' }, { status: backendResponse.status });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching API keys:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await request.json();
    // Proxy request to backend /apikeys
    const backendResponse = await fetch(`${config.baseUrl}/api_keys`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const data = await backendResponse.json();
    if (!backendResponse.ok) {
      return NextResponse.json({ error: (typeof data === 'object' && data !== null && 'error' in data) ? (data as Record<string, unknown>).error : 'Failed to create API key' }, { status: backendResponse.status });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error creating API key:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const body = await request.json() as { id: number; webhook_url: string | null; webhook_secret: string | null };
    const { id, ...updateData } = body;
    // Proxy request to backend /api_keys/{id}
    const backendResponse = await fetch(`${config.baseUrl}/api_keys/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData),
    });
    const data = await backendResponse.json();
    if (!backendResponse.ok) {
      return NextResponse.json({ error: (typeof data === 'object' && data !== null && 'error' in data) ? (data as Record<string, unknown>).error : 'Failed to update API key' }, { status: backendResponse.status });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error updating API key:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}