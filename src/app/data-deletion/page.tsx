import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Data Deletion Request - Autopilot Browser",
  description: "Request deletion of your personal data from Autopilot Browser. Learn about what data can be deleted and how to submit your request.",
};

export default function DataDeletion() {
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron tracking-wider uppercase">
            Data Deletion Request
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] mx-auto"></div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed font-orbitron">
              <p className="text-gray-400 text-sm mb-8">
                Last Updated: June 24, 2025
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Request Data Deletion</h2>                  <p className="mb-4">
                    If you would like to request the deletion of your personal data from Autopilot Browser, 
                    we&apos;re here to help. This page explains what data can be deleted and how to submit your request.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">What Data Can Be Deleted</h2>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">Server-Side Data</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li><strong>Account Information:</strong> Your email address and account details</li>
                    <li><strong>API Request Logs:</strong> Logs of your interactions with our AI Assistant</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">Local Device Data</h3>
                  <p className="mb-2">The following data is stored locally on your device and can be deleted by you:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li><strong>Saved Credentials:</strong> Uninstall the app or clear app data</li>                    <li><strong>Browsing History:</strong> Clear through the app&apos;s settings</li>
                    <li><strong>Personal Preferences:</strong> Reset through the app or uninstall</li>
                    <li><strong>Cache and Cookies:</strong> Clear through the app&apos;s settings</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">How to Request Data Deletion</h2>
                    <div className="bg-gray-700/30 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">Email Request</h3>
                    <p className="mb-4">Send an email to:</p>
                    <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-600">
                      <p className="text-[#60A5FA] font-mono text-lg">nika@autopilotbrowser.com</p>
                    </div>                    
                    <p className="mt-4 text-sm text-gray-400">
                      Please include &quot;Data Deletion Request&quot; in the subject line and provide the email address 
                      associated with your account.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">What to Expect</h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gray-700/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#60A5FA] mb-3 font-orbitron">Response Time</h3>
                      <p className="text-sm">
                        We will acknowledge your request within <strong> 7 days</strong> and complete 
                        the deletion within <strong>30 days</strong> of verification.
                      </p>
                    </div>
                    
                    <div className="bg-gray-700/20 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-[#60A5FA] mb-3 font-orbitron">Verification</h3>                      
                      <p className="text-sm">
                        We may need to verify your identity to ensure we&apos;re deleting the correct data. 
                        This protects your privacy and security.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">Important Notes</h2>
                  
                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-400 mb-3 font-orbitron">⚠️ Before You Delete</h3>
                    <ul className="list-disc list-inside ml-4 space-y-2 text-sm">
                      <li>Data deletion is <strong>permanent</strong> and cannot be undone</li>
                      <li>You will lose access to your account and all associated data</li>
                      <li>Some data may be retained for legal compliance (e.g., transaction records for tax purposes)</li>
                      <li>Anonymized analytics data may be retained in aggregated form</li>
                    </ul>
                  </div>
                </section>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
