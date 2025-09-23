import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { config } from '@/config/api';

export async function GET(_request: NextRequest) { // eslint-disable-line @typescript-eslint/no-unused-vars
	try {
		const cookieStore = await cookies();
		const token = cookieStore.get('auth_token');
		if (!token) {
			return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
		}
		// Proxy request to backend /auth/devices
		const backendResponse = await fetch(`${config.baseUrl}/auth/devices`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${token.value}`,
				'Content-Type': 'application/json',
			},
		});
		const data = await backendResponse.json();
		if (!backendResponse.ok) {
			return NextResponse.json({ error: (data as { error?: string }).error || 'Failed to fetch browsers' }, { status: backendResponse.status });
		}
		return NextResponse.json(data);
	} catch (_error) { // eslint-disable-line @typescript-eslint/no-unused-vars
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
		const body = await request.json();
		// Proxy request to backend /auth/register_device
		const backendResponse = await fetch(`${config.baseUrl}/auth/register_device`, {
			method: 'POST',
			headers: {
				'Authorization': `Bearer ${token.value}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		const data = await backendResponse.json();
		if (!backendResponse.ok) {
			return NextResponse.json({ error: (data as { error?: string }).error || 'Failed to update browser' }, { status: backendResponse.status });
		}
		return NextResponse.json(data);
	} catch (_error) { // eslint-disable-line @typescript-eslint/no-unused-vars
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
