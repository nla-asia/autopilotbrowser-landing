"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface APIKey {
  id: number;
  user_id: number;
  api_key: string;
  webhook_url: string | null;
  webhook_secret: string | null;
  is_active: number;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
}

interface APIKeyContextType {
  apiKeys: APIKey[];
  isLoading: boolean;
  error: string | null;
  fetchAPIKeys: () => Promise<void>;
  createAPIKey: (webhookUrl: string | null, webhookSecret: string | null) => Promise<void>;
  updateAPIKey: (id: number, webhookUrl: string | null, webhookSecret: string | null) => Promise<void>;
}

const APIKeyContext = createContext<APIKeyContextType | undefined>(undefined);

export const APIKeyProvider = ({ children }: { children: ReactNode }) => {
  const [apiKeys, setApiKeys] = useState<APIKey[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAPIKeys = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/apikeys");
      const data = await res.json();
      if (!res.ok || (data as Record<string, unknown>).error) {
        setError((data as Record<string, unknown>).error as string || "Failed to fetch API keys");
        setApiKeys([]);
      } else {
        setApiKeys((data as Record<string, unknown>).api_keys as APIKey[] || []);
      }
    } catch (err) {
      console.error("Failed to fetch API keys:", err);
      setError("Failed to fetch API keys");
      setApiKeys([]);
    } finally {
      setIsLoading(false);
    }
  };

  const createAPIKey = async (webhookUrl: string | null, webhookSecret: string | null) => {
    setError(null);
    try {
      const res = await fetch("/api/apikeys", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          webhook_url: webhookUrl,
          webhook_secret: webhookSecret,
        }),
      });
      const data = await res.json();
      if (!res.ok || (data as Record<string, unknown>).error) {
        setError((data as Record<string, unknown>).error as string || "Failed to create API key");
      } else {
        // Add the new API key to the list
        setApiKeys((prev) => [...prev, (data as Record<string, unknown>).api_key as APIKey]);
      }
    } catch (err) {
      console.error("Failed to create API key:", err);
      setError("Failed to create API key");
    }
  };

  const updateAPIKey = async (id: number, webhookUrl: string | null, webhookSecret: string | null) => {
    setError(null);
    try {
      const res = await fetch("/api/apikeys", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          webhook_url: webhookUrl,
          webhook_secret: webhookSecret,
        }),
      });
      const data = await res.json();
      if (!res.ok || (data as Record<string, unknown>).error) {
        setError((data as Record<string, unknown>).error as string || "Failed to update API key");
      } else {
        // Update the API key in the list
        setApiKeys((prev) => prev.map(key => 
          key.id === id 
            ? { ...key, webhook_url: webhookUrl, webhook_secret: webhookSecret, updated_at: new Date().toISOString() }
            : key
        ));
      }
    } catch (err) {
      console.error("Failed to update API key:", err);
      setError("Failed to update API key");
    }
  };

  useEffect(() => {
    fetchAPIKeys();
  }, []);

  return (
    <APIKeyContext.Provider value={{ apiKeys, isLoading, error, fetchAPIKeys, createAPIKey, updateAPIKey }}>
      {children}
    </APIKeyContext.Provider>
  );
};

export const useAPIKeys = () => {
  const context = useContext(APIKeyContext);
  if (!context) {
    throw new Error("useAPIKeys must be used within an APIKeyProvider");
  }
  return context;
};