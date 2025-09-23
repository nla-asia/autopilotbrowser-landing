"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface Browser {
  id: string;
  name: string;
  status: string;
  // Add other fields as needed
}

interface BrowsersContextType {
  browsers: Browser[];
  isLoading: boolean;
  error: string | null;
  fetchBrowsers: () => Promise<void>;
}

const BrowsersContext = createContext<BrowsersContextType | undefined>(undefined);

export const BrowsersProvider = ({ children }: { children: ReactNode }) => {
  const [browsers, setBrowsers] = useState<Browser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchBrowsers = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/browsers");
      const data = await res.json();
      if (!res.ok || data.error) {
        setError(data.error || "Failed to fetch browsers");
        setBrowsers([]);
      } else {
        setBrowsers(data.devices || []);
      }
    } catch (err) {
      setError("Failed to fetch browsers");
      setBrowsers([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchBrowsers();
  }, []);

  return (
    <BrowsersContext.Provider value={{ browsers, isLoading, error, fetchBrowsers }}>
      {children}
    </BrowsersContext.Provider>
  );
};

export const useBrowsers = () => {
  const context = useContext(BrowsersContext);
  if (!context) {
    throw new Error("useBrowsers must be used within a BrowsersProvider");
  }
  return context;
};
