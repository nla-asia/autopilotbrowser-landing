import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron tracking-wider uppercase">
            Terms of Service
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] mx-auto"></div>
        </div>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 md:p-12">
          <div className="prose prose-lg prose-invert max-w-none">
            <div className="text-gray-300 leading-relaxed font-orbitron">              
                <p className="text-gray-400 text-sm mb-8">
                Effective Date: June 24, 2025 | Last Updated: June 24, 2025
              </p>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">1. Acceptance of Terms</h2>                  <p className="mb-4">By downloading, installing, accessing, or using the Autopilot Browser mobile application (&quot;App&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, do not use the App.</p>
                  <p>These Terms constitute a legally binding agreement between you (&quot;User,&quot; &quot;you,&quot; or &quot;your&quot;) and Autopilot Labs (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">2. Description of Service</h2>
                  <p className="mb-4">Autopilot Browser is a mobile web browser application that includes:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Standard web browsing functionality</li>
                    <li>AI Assistant feature that can browse and interact with websites on your behalf</li>
                    <li>Credential storage capabilities (stored locally on your device)</li>
                    <li>Premium subscription services</li>
                    <li>Integration with third-party AI language model providers</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">3. User Accounts and Subscriptions</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">3.1 Account Creation</h3>
                  <p className="mb-4">To access certain features, you may need to create an account by providing accurate information including your name and email address.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">3.2 Premium Subscriptions</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>AI Assistant features require either a premium subscription (monthly or yearly) or your own API key from supported providers</li>
                    <li>Subscription fees are charged in advance and are non-refundable except as required by law</li>
                    <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                    <li>We reserve the right to modify subscription pricing with reasonable notice</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">3.3 API Key Usage</h3>
                  <p>Users may use their own API keys from supported LLM providers (Google, OpenAI, Anthropic, etc.) to access AI Assistant features without a premium subscription. You are responsible for all costs and compliance with the respective provider&apos;s terms of service.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">4. Acceptable Use Policy</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">4.1 Permitted Use</h3>
                  <p className="mb-4">You may use the App for lawful purposes in accordance with these Terms and all applicable laws and regulations.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">4.2 Prohibited Activities</h3>
                  <p className="mb-2">You agree NOT to use the App or AI Assistant to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Engage in web scraping or automated data extraction where prohibited by website owners</li>                    <li>Violate any website&apos;s terms of service, robots.txt, or other usage policies</li>
                    <li>Engage in illegal activities or activities that violate third-party rights</li>
                    <li>Access websites or perform actions that the website owner has explicitly prohibited</li>
                    <li>Transmit malware, viruses, or other harmful code</li>
                    <li>Impersonate others or provide false information</li>
                    <li>Interfere with or disrupt the App&apos;s functionality or servers</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">4.3 Website Compliance</h3>
                  <p>You must respect and comply with the terms of service, privacy policies, and usage restrictions of all websites you visit or interact with through the App. If a website prohibits the use of AI assistants or automated tools, you must not use our AI Assistant on that website.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">5. AI Assistant and Automated Actions</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">5.1 AI Assistant Functionality</h3>
                  <p className="mb-4">The AI Assistant can perform various tasks on your behalf, including but not limited to browsing websites, filling forms, and interacting with web content based on your instructions.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">5.2 User Responsibility</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>You are solely responsible for all actions taken by the AI Assistant on your behalf</li>
                    <li>You acknowledge that AI systems can make errors and may not always perform tasks as expected</li>
                    <li>You must review and verify all AI Assistant actions, especially those involving sensitive information or transactions</li>
                    <li>You assume full responsibility for any consequences resulting from AI Assistant actions</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">5.3 No Guarantees</h3>
                  <p>We do not guarantee the accuracy, completeness, or reliability of AI Assistant responses or actions. The AI Assistant is provided &quot;as is&quot; and may occasionally fail or produce unexpected results.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">6. Data Privacy and Security</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">6.1 Local Data Storage</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Credentials (usernames, passwords) and personal preferences are stored locally on your device only</li>
                    <li>We do not have access to credentials stored on your device</li>
                    <li>You are responsible for securing your device and the data stored on it</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">6.2 Cloud Data Storage</h3>
                  <p className="mb-2">We store the following data on our servers:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>Basic account information (name, email)</li>
                    <li>API request logs between your device and LLM providers (which may contain browsing context but not personal credentials)</li>
                    <li>Analytics data through Google Analytics and crash reporting services</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">6.3 Data Security</h3>
                  <p>While we implement reasonable security measures, we cannot guarantee absolute security of data stored on your device. You acknowledge that local storage of sensitive information carries inherent risks.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">7. Third-Party Services</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">7.1 LLM Providers</h3>
                  <p className="mb-4">The App integrates with third-party AI language model providers. Your use of these services through the App is subject to their respective terms of service and privacy policies.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">7.2 Analytics</h3>
                  <p className="mb-4">We use Google Analytics and crash analytics services to improve the App. These services may collect usage data in accordance with their privacy policies.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">7.3 Websites and Content</h3>
                  <p>We are not responsible for the content, policies, or practices of third-party websites accessed through the App.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">8. Intellectual Property</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">8.1 App Ownership</h3>
                  <p className="mb-4">The App and its original content, features, and functionality are owned by Autopilot Labs and are protected by intellectual property laws.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">8.2 User Content</h3>
                  <p>You retain ownership of any content you create or submit through the App, but grant us a license to use such content as necessary to provide the service.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">9. Disclaimers and Limitation of Liability</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">9.1 Disclaimers</h3>
                  <ul className="list-disc list-inside ml-4 space-y-2 mb-4">
                    <li>The App is provided &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; without warranties of any kind</li>
                    <li>We disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement</li>
                    <li>We do not warrant that the App will be error-free, secure, or continuously available</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">9.2 Limitation of Liability</h3>
                  <p className="mb-2 font-bold">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Our total liability to you shall not exceed the amount you paid for premium subscriptions in the 12 months preceding the claim</li>
                    <li>We shall not be liable for indirect, incidental, special, consequential, or punitive damages</li>
                    <li>We are not liable for damages resulting from AI Assistant errors, data loss, security breaches of device-stored data, or third-party actions</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">10. Support and Maintenance</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">10.1 Support Scope</h3>
                  <p className="mb-4">We will provide reasonable support for significant AI Assistant failures that affect core functionality. We do not guarantee support for minor errors or occasional AI mistakes.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">10.2 Maintenance</h3>
                  <p>We may perform maintenance, updates, or modifications to the App at any time, which may temporarily affect availability.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">11. Termination</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">11.1 Termination by User</h3>
                  <p className="mb-4">You may terminate your account and stop using the App at any time.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">11.2 Termination by Company</h3>
                  <p className="mb-4">We may terminate or suspend your access to the App immediately if you violate these Terms or engage in prohibited activities.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">11.3 Effect of Termination</h3>
                  <p>Upon termination, your right to use the App ceases immediately. Data stored locally on your device will remain until you delete it.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">12. Changes to Terms</h2>
                  <p>We reserve the right to modify these Terms at any time. We will notify users of material changes through the App or email. Continued use after changes constitutes acceptance of the new Terms.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">13. Governing Law and Disputes</h2>
                  <p>These Terms shall be governed by the laws of the State of Delaware, United States, without regard to conflict of law principles. Any disputes shall be resolved through binding arbitration in Delaware, except for claims that may be brought in small claims court.</p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">14. Miscellaneous</h2>
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">14.1 Severability</h3>
                  <p className="mb-4">If any provision of these Terms is found unenforceable, the remaining provisions will remain in full effect.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">14.2 Entire Agreement</h3>
                  <p className="mb-4">These Terms constitute the entire agreement between you and Autopilot Labs regarding the App.</p>
                  
                  <h3 className="text-xl font-semibold text-[#60A5FA] mb-3 font-orbitron">14.3 Contact Information</h3>
                  <p className="mb-4">For questions about these Terms, contact us at:</p>
                  <p>Email: <a href="mailto:nika@autopilotbrowser.com" className="text-[#60A5FA] hover:text-[#3B82F6] transition-colors">nika@autopilotbrowser.com</a></p>
                </section>

                <div className="border-t border-gray-600 pt-8 mt-12">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
                    <p className="text-sm font-semibold text-blue-300 mb-2">Important Notice:</p>
                    <p className="text-sm text-gray-300">These Terms and Conditions are a legal document. Please read them carefully before using Autopilot Browser. By using the App, you acknowledge that you have read, understood, and agree to be bound by these Terms.</p>
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
