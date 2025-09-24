"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Workflow {
  id: number;
  name: string;
  website: string;
  description?: string | null;
  last_run_at: string | null;
  inputs?: Record<string, unknown>;
  outputs?: Record<string, unknown>;
  created_at: string;
}

interface WorkflowsContextType {
  workflows: Workflow[];
  isLoading: boolean;
  error: string | null;
  fetchWorkflows: () => Promise<void>;
}

const WorkflowsContext = createContext<WorkflowsContextType | undefined>(undefined);

export const WorkflowsProvider = ({ children }: { children: ReactNode }) => {
  const [workflows, setWorkflows] = useState<Workflow[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWorkflows = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/workflows");
      const data = await res.json();
      if (!res.ok || (data as { error?: string }).error) {
        setError((data as { error?: string }).error || "Failed to fetch workflows");
        setWorkflows([]);
      } else {
        setWorkflows((data as { workflows?: Workflow[] }).workflows || []);
      }
    } catch (_err) { // eslint-disable-line @typescript-eslint/no-unused-vars
      setError("Failed to fetch workflows");
      setWorkflows([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchWorkflows();
  }, []);

  return (
    <WorkflowsContext.Provider value={{ workflows, isLoading, error, fetchWorkflows }}>
      {children}
    </WorkflowsContext.Provider>
  );
};

export const useWorkflows = () => {
  const context = useContext(WorkflowsContext);
  if (!context) {
    throw new Error("useWorkflows must be used within a WorkflowsProvider");
  }
  return context;
};
