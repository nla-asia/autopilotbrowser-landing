import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { config } from '@/config/api';

export async function GET(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await params;
    // Proxy request to backend /workflows/details?id={id}
    const backendResponse = await fetch(`${config.baseUrl}/workflows/details?id=${id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
    });
    const data = await backendResponse.json();
    if (!backendResponse.ok) {
      return NextResponse.json({ error: (typeof data === 'object' && data !== null && 'error' in data) ? (data as { error: string }).error : 'Failed to fetch workflow' }, { status: backendResponse.status });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}