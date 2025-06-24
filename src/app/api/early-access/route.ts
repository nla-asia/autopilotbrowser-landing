import { NextRequest, NextResponse } from 'next/server';
import { config } from '@/config/api';

interface EarlyAccessRequest {
  name: string;
  email: string;
  timezone: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: EarlyAccessRequest = await request.json();
    const { name, email, timezone } = body;

    // Validate required fields
    if (!name || !email || !timezone) {
      return NextResponse.json(
        { error: 'Name, email, and timezone are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );    }

    // Make request to your own API with authentication
    const response = await fetch(`${config.baseUrl}/auth/early_access`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${config.apiKey}`
      },
      body: JSON.stringify({
        name,
        email,
        timezone
      })    });

    // Check if response is HTML (server error page)
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('text/html')) {
      console.error('API server returned HTML error page');
      return NextResponse.json(
        { error: 'Our service is temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    if (!response.ok) {
      let errorMessage = 'Failed to submit early access request';
        try {
        const errorData = await response.json();
        errorMessage = (errorData as { error?: string })?.error || errorMessage;
      } catch (parseError) {
        // If we can't parse the error response, use a generic message
        console.error('Failed to parse error response:', parseError);
        if (response.status === 404) {
          errorMessage = 'Service temporarily unavailable. Please try again later.';
        } else if (response.status >= 500) {
          errorMessage = 'Server error. Please try again later.';
        }
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    return NextResponse.json(
      { message: 'Early access request submitted successfully', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Server error:', error);
    
    // Handle network errors more gracefully
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return NextResponse.json(
        { error: 'Unable to connect to our service. Please check your internet connection and try again.' },
        { status: 503 }
      );
    }
    
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
