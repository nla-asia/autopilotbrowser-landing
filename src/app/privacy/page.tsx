import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron tracking-wider uppercase">
            Privacy Policy
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] mx-auto"></div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed font-orbitron">              <p className="text-gray-400 text-sm mb-8">
                Effective Date: June 24, 2025 | Last Updated: June 24, 2025
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">1. Introduction</h2>
                  <p className="mb-4">Autopilot Labs (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Autopilot Browser mobile application (&quot;App&quot;).</p>
                  <p>By using our App, you consent to the data practices described in this Privacy Policy.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">2. Information We Collect</h2>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">2.1 Information You Provide Directly</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li><strong>Account Information:</strong> Name and email address when you create an account</li>
                    <li><strong>Communication Data:</strong> Information you provide when contacting us for support</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">2.2 Information Stored Locally on Your Device</h3>
                  <p className="mb-2">The following information is stored only on your device and is not transmitted to our servers:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li><strong>Credentials:</strong> Usernames and passwords for websites you choose to save</li>
                    <li><strong>Personal Preferences:</strong> Browsing preferences, settings, and user facts you configure</li>
                    <li><strong>Local Browsing Data:</strong> Standard browser data such as history, cookies, and cache (stored locally only)</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">2.3 Information We Collect Automatically</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li><strong>API Request Logs:</strong> When you use the AI Assistant, we log the requests and responses between your device and AI language model providers. These logs may contain browsing context and instructions but do not include your saved credentials or personal browsing history from manual use</li>
                    <li><strong>Device Information:</strong> Device type, operating system version, app version, and unique device identifiers (collected through Google Analytics)</li>
                    <li><strong>Usage Analytics:</strong> App usage patterns, feature interactions, session duration, and crash reports (collected through Google Analytics and crash reporting services)</li>
                    <li><strong>IP Address:</strong> Your IP address may be collected as part of analytics and server logs</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">2.4 Information from Third-Party Services</h3>
                  <p>When you use the AI Assistant, your requests are processed by third-party AI language model providers (Google, OpenAI, Anthropic, etc.). Please refer to their respective privacy policies for information about their data practices.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">3. How We Use Your Information</h2>
                  <p className="mb-4">We use the collected information for the following purposes:</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">3.1 Service Provision</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Provide and maintain the App&apos;s functionality</li>
                    <li>Process AI Assistant requests through third-party providers</li>
                    <li>Manage your account and subscription services</li>
                    <li>Provide customer support</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">3.2 Service Improvement</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Analyze usage patterns to improve App performance and features</li>
                    <li>Debug issues and fix crashes</li>
                    <li>Develop new features and functionality</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">3.3 Legal and Security</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Comply with legal obligations</li>
                    <li>Protect against fraud and abuse</li>
                    <li>Enforce our Terms and Conditions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">4. Information Sharing and Disclosure</h2>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">4.1 Third-Party Service Providers</h3>
                  <p className="mb-2">We share information with the following types of third parties:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li><strong>AI Language Model Providers:</strong> API requests and responses are shared with providers like Google, OpenAI, and Anthropic to deliver AI Assistant functionality</li>
                    <li><strong>Analytics Services:</strong> Usage data is shared with Google Analytics and crash reporting services to improve our App</li>
                    <li><strong>Payment Processors:</strong> Subscription payment information is processed by third-party payment services</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">4.2 Legal Requirements</h3>
                  <p className="mb-4">We may disclose your information if required by law, court order, or government request, or to protect our rights, property, or safety.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">4.3 Business Transfers</h3>
                  <p className="mb-4">In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">4.4 No Sale of Personal Information</h3>
                  <p>We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">5. Data Retention</h2>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Account Information:</strong> Retained until you delete your account or request deletion</li>
                    <li><strong>API Request Logs:</strong> Retained indefinitely to improve our services (this may be subject to change in the future)</li>
                    <li><strong>Analytics Data:</strong> Retained according to Google Analytics retention settings (typically 26 months)</li>
                    <li><strong>Local Device Data:</strong> Remains on your device until you delete it or uninstall the App</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">6. Data Security</h2>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">6.1 Security Measures</h3>
                  <p className="mb-2">We implement reasonable technical and organizational measures to protect your information, including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Encryption of data in transit</li>
                    <li>Secure server infrastructure</li>
                    <li>Access controls and authentication systems</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">6.2 Device Security</h3>
                  <p className="mb-2">Credentials and personal data stored on your device are your responsibility to secure. We recommend:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Using device lock screens and passwords</li>
                    <li>Keeping your device software updated</li>
                    <li>Being cautious about device access by others</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">6.3 Limitations</h3>
                  <p>No method of transmission or storage is completely secure. We cannot guarantee absolute security of your information.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">7. Your Privacy Rights</h2>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">7.1 General Rights</h3>
                  <p className="mb-2">You have the right to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Access the personal information we hold about you</li>
                    <li>Request correction of inaccurate information</li>
                    <li>Request deletion of your account and associated data</li>
                    <li>Withdraw consent where processing is based on consent</li>
                    <li>Object to processing of your personal information</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">7.2 GDPR Rights (EU Users)</h3>
                  <p className="mb-2">If you are located in the European Union, you have additional rights under the General Data Protection Regulation (GDPR):</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Right to data portability</li>
                    <li>Right to restrict processing</li>
                    <li>Right to lodge a complaint with supervisory authorities</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">7.3 CCPA Rights (California Users)</h3>
                  <p className="mb-2">If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Right to know what personal information is collected</li>
                    <li>Right to delete personal information</li>
                    <li>Right to opt-out of sale of personal information (we do not sell personal information)</li>
                    <li>Right to non-discrimination for exercising privacy rights</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">7.4 Exercising Your Rights</h3>
                  <p>To exercise your privacy rights, contact us at <a href="mailto:nika@autopilotbrowser.com" className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors">nika@autopilotbrowser.com</a>. We will respond to your request within the timeframes required by applicable law.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">8. Children&apos;s Privacy</h2>
                  <p>Our App is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">9. International Data Transfers</h2>
                  <p>Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in compliance with applicable privacy laws.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">10. Third-Party Websites and Services</h2>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">10.1 Website Interactions</h3>
                  <p className="mb-4">When you browse websites through our App, those websites may collect information about you according to their own privacy policies. We are not responsible for the privacy practices of third-party websites.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">10.2 Location Data</h3>
                  <p>While our App does not directly collect location data, websites you visit may request location information through standard browser APIs. Any such requests are handled by the websites directly, not by us.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">11. Changes to This Privacy Policy</h2>
                  <p className="mb-2">We may update this Privacy Policy from time to time. We will notify you of any material changes by:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Posting the updated policy in the App</li>
                    <li>Sending an email notification to your registered email address</li>
                    <li>Providing notice through other reasonable means</li>
                  </ul>
                  <p>Your continued use of the App after changes become effective constitutes acceptance of the updated Privacy Policy.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">12. Contact Information</h2>
                  <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us at:</p>
                  <p className="mb-4"><strong>Email:</strong> <a href="mailto:nika@autopilotbrowser.com" className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors">nika@autopilotbrowser.com</a></p>
                  <p className="mb-2">For GDPR-related inquiries, please include &quot;GDPR Request&quot; in your email subject line.</p>
                  <p>For CCPA-related inquiries, please include &quot;CCPA Request&quot; in your email subject line.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">13. Legal Basis for Processing (GDPR)</h2>
                  <p className="mb-2">For users in the European Union, our legal basis for processing personal information includes:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li><strong>Contract:</strong> Processing necessary to provide our services</li>
                    <li><strong>Legitimate Interest:</strong> Improving our services, security, and customer support</li>
                    <li><strong>Consent:</strong> Where you have provided explicit consent</li>
                    <li><strong>Legal Obligation:</strong> Complying with applicable laws and regulations</li>
                  </ul>
                </section>

                <div className="border-t border-gray-600 pt-8 mt-12">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <p className="text-sm font-semibold text-blue-300 mb-2">Last Updated: June 24, 2025</p>
                    <p className="text-sm text-gray-300">This Privacy Policy is effective as of the date listed above and applies to all users of Autopilot Browser.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link 
            href="/" 
            className="inline-flex items-center bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-orbitron"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
