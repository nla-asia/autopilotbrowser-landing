import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { config } from '@/config/api';

export async function GET(request: NextRequest) {
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
			return NextResponse.json({ error: data.error || 'Failed to fetch browsers' }, { status: backendResponse.status });
		}
		return NextResponse.json(data);
	} catch (error) {
		return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
	}
}
