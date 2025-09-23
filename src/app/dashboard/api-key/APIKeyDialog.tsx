"use client";
import { useState, useEffect } from "react";
import { useAPIKeys } from "../../../context/APIKeyContext";
import { APIKey } from "../../../context/APIKeyContext";

interface APIKeyDialogProps {
  isOpen: boolean;
  onClose: () => void;
  editKey?: APIKey | null;
}

export default function APIKeyDialog({ isOpen, onClose, editKey }: APIKeyDialogProps) {
  const { createAPIKey, updateAPIKey, error } = useAPIKeys();
  const [webhookUrl, setWebhookUrl] = useState("");
  const [webhookSecret, setWebhookSecret] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  const isEdit = !!editKey;

  useEffect(() => {
    if (isOpen) {
      if (editKey) {
        setWebhookUrl(editKey.webhook_url || "");
        setWebhookSecret(editKey.webhook_secret || "");
      } else {
        setWebhookUrl("");
        setWebhookSecret("");
      }
    }
  }, [isOpen, editKey]);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    if (isOpen) {
      if (editKey) {
        setWebhookUrl(editKey.webhook_url || "");
        setWebhookSecret(editKey.webhook_secret || "");
      } else {
        setWebhookUrl("");
        setWebhookSecret("");
      }
    }
  }, [isOpen, editKey]);

  const handleSubmit = async () => {
    setIsProcessing(true);
    try {
      if (isEdit && editKey) {
        await updateAPIKey(editKey.id, webhookUrl || null, webhookSecret || null);
      } else {
        await createAPIKey(webhookUrl || null, webhookSecret || null);
      }
      if (!error) {
        onClose();
      }
    } finally {
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-lg p-6 w-full max-w-md border border-slate-700">
        <h2 className="text-xl font-semibold text-white mb-4">
          {isEdit ? "Edit API Key" : "Create API Key"}
        </h2>
        {error && (
          <div className="mb-4 p-3 bg-red-900/50 border border-red-700 rounded text-red-400 text-sm">
            {error}
          </div>
        )}
        <div className="space-y-4">
          {isEdit && (
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">
                API Key
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={editKey.api_key}
                  readOnly
                  className="flex-1 px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none"
                />
                <button
                  onClick={() => handleCopy(editKey.api_key)}
                  className="text-slate-400 hover:text-slate-300 transition-colors p-2 rounded hover:bg-slate-700"
                  title="Copy API Key"
                >
                  {copied ? (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Webhook URL
            </label>
            <input
              type="url"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              placeholder="https://your-webhook-url.com"
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1">
              Webhook Signature
            </label>
            <input
              type="text"
              value={webhookSecret}
              onChange={(e) => setWebhookSecret(e.target.value)}
              placeholder="Your webhook signature"
              required={isEdit}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 text-slate-400 hover:text-white transition-colors"
            disabled={isProcessing}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={isProcessing}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {isProcessing ? (isEdit ? "Updating..." : "Creating...") : (isEdit ? "Update API Key" : "Create API Key")}
          </button>
        </div>
      </div>
    </div>
  );
}