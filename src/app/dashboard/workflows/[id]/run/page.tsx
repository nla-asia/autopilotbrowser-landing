import { cookies } from 'next/headers';
import { config } from '@/config/api';
import WorkflowRunClient from './WorkflowRunClient';

interface Workflow {
  id: number;
  name: string;
  website: string;
  last_run_at: string | null;
  inputs?: Record<string, unknown>;
  outputs?: Record<string, unknown>;
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get('auth_token');
  if (!token) {
    return <div>Unauthorized</div>;
  }
  try {
    const res = await fetch(`${config.baseUrl}/workflows/details?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${token.value}`,
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      return <div>Failed to load workflow</div>;
    }
    const workflow: Workflow = await res.json();
    return <WorkflowRunClient workflow={workflow} />;
  } catch {
    return <div>Error loading workflow</div>;
  }
}