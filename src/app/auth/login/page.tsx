import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import LoginForm from './LoginForm';

export default async function LoginPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');

  if (token) {
    redirect('/dashboard');
  }

  return <LoginForm />;
}
