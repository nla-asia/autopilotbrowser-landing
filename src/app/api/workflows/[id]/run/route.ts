import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { config } from '@/config/api';

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('auth_token');
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
   // const { id } = params;
    const body = await request.json() as { workflowName: string; workflowInputs: unknown };
    const apiKey = request.headers.get('x-api-key');
    // Proxy to backend /wf/run
    const headers: Record<string, string> = {
      'Authorization': `Bearer ${token.value}`,
      'Content-Type': 'application/json',
    };
    if (apiKey) {
      headers['x-api-key'] = apiKey;
    }
    const backendResponse = await fetch(`${config.baseUrl}/wf/run`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        workflowName: body.workflowName,
        workflowInputs: body.workflowInputs,
      }),
    });
    const data = await backendResponse.json();
    if (!backendResponse.ok) {
      return NextResponse.json({ error: (typeof data === 'object' && data !== null && 'error' in data) ? (data as { error: string }).error : 'Failed to run workflow' }, { status: backendResponse.status });
    }
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}