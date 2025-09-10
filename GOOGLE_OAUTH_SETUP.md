# Google OAuth Setup Guide

This guide will help you set up Google OAuth for your Autopilot Browser application.

## Prerequisites

1. A Google Cloud Console account
2. Your Next.js application deployed and accessible via HTTPS (required for OAuth)

## Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google+ API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google+ API" and enable it
4. Create OAuth 2.0 credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "OAuth 2.0 Client IDs"
   - Choose "Web application" as application type
   - Add authorized redirect URIs:
     - For development: `http://localhost:3000/auth/google`
     - For production: `https://yourdomain.com/auth/google`
   - Save the Client ID and Client Secret

## Step 2: Configure Environment Variables

1. Copy `.env.example` to `.env.local`
2. Fill in your Google OAuth credentials:

```bash
# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_actual_google_client_id
GOOGLE_CLIENT_SECRET=your_actual_google_client_secret

# Application URL
NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Public Google Client ID (same as GOOGLE_CLIENT_ID)
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_actual_google_client_id
```

## Step 3: Update Google OAuth Consent Screen

1. In Google Cloud Console, go to "APIs & Services" > "OAuth consent screen"
2. Configure the consent screen with:
   - App name: "Autopilot Browser"
   - User support email
   - Developer contact information
   - Scopes: email, profile
3. Add your domain to authorized domains

## Step 4: Test the Integration

1. Start your Next.js development server
2. Visit `http://localhost:3000/auth/google`
3. You should be redirected to Google OAuth
4. After authentication, you should be redirected back with auth data

## Step 5: Production Deployment

1. Update the authorized redirect URI in Google Cloud Console to your production domain
2. Update the `NEXT_PUBLIC_APP_URL` environment variable
3. Deploy your application
4. Test the OAuth flow in production

## Security Notes

- Never commit your `.env.local` file to version control
- Use HTTPS in production (required by Google OAuth)
- Regularly rotate your OAuth credentials
- Monitor your OAuth usage in Google Cloud Console

## Troubleshooting

### Common Issues:

1. **"redirect_uri_mismatch"**: Check that your redirect URI matches exactly what's configured in Google Cloud Console
2. **"invalid_client"**: Verify your Client ID and Secret are correct
3. **HTTPS Required**: Google OAuth requires HTTPS in production

### Debug Tips:

1. Check browser network tab for failed requests
2. Verify environment variables are loaded correctly
3. Check server logs for detailed error messages
4. Use Google's OAuth 2.0 Playground for testing: https://developers.google.com/oauthplayground/

## Next Steps

After setting up Google OAuth:
1. Implement user session management
2. Add user profile storage
3. Implement logout functionality
4. Add token refresh logic
5. Set up proper error handling and user feedback
