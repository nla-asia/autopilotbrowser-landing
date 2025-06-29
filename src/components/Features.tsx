export default function Features() {
  const features = [
    {
      id: 1,
      title: "Task Assistant",
      description: "Your intelligent browsing companion that understands your needs and takes action automatically. From research to booking, let AI handle the time-consuming tasks.",
      mockup: (
        <div className="bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl" style={{width: '280px', height: '560px'}}>
          <div className="bg-white rounded-[2rem] overflow-hidden h-full">
            {/* Status Bar */}
            <div className="bg-gray-100 h-8 flex items-center justify-between px-4 text-xs text-gray-600 font-orbitron">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-emerald-500 rounded-sm"></div>
              </div>
            </div>
            {/* AI Assistant Interface */}
            <div className="p-4 h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-[#1D4ED8] rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-white text-sm font-bold font-orbitron">Task Assistant</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-[#1D4ED8]/20 rounded-xl p-3 border border-[#1D4ED8]/30">
                  <div className="text-xs text-[#60A5FA] mb-1 font-orbitron">Task Complete</div>
                  <div className="text-xs text-white font-orbitron">Found 5 flight options to Tokyo. Shall I book the cheapest?</div>
                </div>
                <div className="bg-gray-800/80 rounded-xl p-3">
                  <div className="text-xs text-gray-400 mb-1 font-orbitron">Your Response</div>
                  <div className="text-xs text-white font-orbitron">Yes, book the 3:30 PM flight</div>
                </div>
                <div className="bg-green-600/20 rounded-xl p-3 border border-green-600/30">
                  <div className="text-xs text-green-400 mb-1 font-orbitron">Booking Confirmed</div>
                  <div className="text-xs text-white font-orbitron">Flight booked! Confirmation sent to email.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      emoji: "🤖"
    },
    {
      id: 2,
      title: "Page Assistant",
      description: "Summon instant help with a simple shake of your phone. Effortlessly assign tasks like form submissions or data entry on current web page.",
      mockup: (
        <div className="bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl" style={{width: '280px', height: '560px'}}>
          <div className="bg-white rounded-[2rem] overflow-hidden h-full">
            {/* Status Bar */}
            <div className="bg-gray-100 h-8 flex items-center justify-between px-4 text-xs text-gray-600 font-orbitron">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-emerald-500 rounded-sm"></div>
              </div>
            </div>
            {/* Page Assistant Interface */}
            <div className="p-4 h-full bg-gradient-to-br from-blue-50 via-sky-100 to-white">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-[#38BDF8] rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="text-sky-700 text-sm font-bold font-orbitron">Page Assistant</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-[#38BDF8]/20 rounded-xl p-3 border border-[#38BDF8]/30">
                  <div className="text-xs text-[#38BDF8] mb-1">Assistant Activated</div>
                  <div className="text-xs text-sky-900">Shake detected! How can I help you on this page?</div>
                </div>
                <div className="bg-gray-800/80 rounded-xl p-3">
                  <div className="text-xs text-gray-400 mb-1">Your Task</div>
                  <div className="text-xs text-white">Fill out and submit the contact form</div>
                </div>
                <div className="bg-green-600/20 rounded-xl p-3 border border-green-600/30">
                  <div className="text-xs text-green-400 mb-1">Task Completed</div>
                  <div className="text-xs text-white">Form submitted successfully!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      emoji: "🪄"
    },
    {
      id: 3,
      title: "Personalized Experiences",
      description: "Advanced memory system that learns your preferences, habits, and context. The AI assistant remembers your choices and acts better on your behalf over time.",
      mockup: (
        <div className="bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl" style={{width: '280px', height: '560px'}}>
          <div className="bg-white rounded-[2rem] overflow-hidden h-full">
            {/* Status Bar */}
            <div className="bg-gray-100 h-8 flex items-center justify-between px-4 text-xs text-gray-600 font-orbitron">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-emerald-500 rounded-sm"></div>
              </div>
            </div>
            {/* Personalized Memories Interface */}
            <div className="p-4 h-full bg-gradient-to-br from-purple-50 via-blue-50 to-gray-50">
              <div className="text-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-gray-900 text-sm font-bold font-orbitron">Your Memories</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-white rounded-xl p-3 shadow-sm border border-purple-100">
                  <div className="text-xs text-purple-600 mb-1">Preference</div>
                  <div className="text-xs text-gray-800">Prefers aisle seats on flights</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-blue-100">
                  <div className="text-xs text-blue-600 mb-1">Habit</div>
                  <div className="text-xs text-gray-800">Usually books hotels with gym access</div>
                </div>
                <div className="bg-white rounded-xl p-3 shadow-sm border border-green-100">
                  <div className="text-xs text-green-600 mb-1">Context</div>
                  <div className="text-xs text-gray-800">Works remotely, travels frequently</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      emoji: "🧠"
    },
    {
      id: 4,
      title: "Minimalist Browser",
      description: "A simple, clutter-free browser focused on everyday use. No confusing advanced features or overwhelming menus—just pure browsing.",
      mockup: (
        <div className="bg-gray-900 rounded-[2.5rem] p-4 shadow-2xl" style={{width: '280px', height: '560px'}}>
          <div className="bg-white rounded-[2rem] overflow-hidden h-full">
            {/* Status Bar */}
            <div className="bg-gray-100 h-8 flex items-center justify-between px-4 text-xs text-gray-600 font-orbitron">
              <span className="font-semibold">9:41</span>
              <div className="flex gap-1">
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-3 h-1.5 bg-gray-400 rounded-sm"></div>
                <div className="w-4 h-1.5 bg-emerald-500 rounded-sm"></div>
              </div>
            </div>
            {/* Minimalist Browser Interface */}
            <div className="p-4 h-full bg-white">
              <div className="bg-gray-100 rounded-full px-4 py-2 mb-4 text-center">
                <div className="text-xs text-gray-600">autopilotbrowser.com</div>
              </div>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-2">Clean Reading</div>
                  <div className="text-xs text-gray-600 leading-relaxed">
                    Articles displayed in clean, readable format without distractions.
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <div className="w-full h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-3/4 h-2 bg-gray-200 rounded mb-2"></div>
                  <div className="w-5/6 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500">No ads • No pop-ups • Pure content</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      emoji: "✨"
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/40 border border-gray-700/50 rounded-full text-[#60A5FA] font-medium text-sm mb-6 backdrop-blur-sm font-orbitron">
            ✨ Core Features
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 tracking-tight font-orbitron">
            Smart Browsing,{' '}
            <span className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] bg-clip-text text-transparent">
              Redefined
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of web browsing with AI-powered automation, 
            minimalist design, and intelligent personalization.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={feature.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} text-center lg:text-left relative`}>
                
                {/* Floating Emoji */}
                <div className="absolute -top-8 -left-8 text-6xl animate-bounce hidden lg:block">
                  {feature.emoji}
                </div>
                
                <h3 className="text-4xl font-bold text-white mb-6 font-orbitron tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed  max-w-lg">
                  {feature.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1D4ED8]/5 rounded-full blur-3xl"></div>
                
                {/* Additional Floating Emoji for variety */}
                {feature.id === 1 && (
                  <div className="absolute -bottom-12 -right-8 text-4xl animate-pulse hidden lg:block">⚡</div>
                )}
                {feature.id === 2 && (
                  <div className="absolute -top-4 -right-12 text-4xl animate-bounce hidden lg:block">🎯</div>
                )}
                {feature.id === 3 && (
                  <div className="absolute -bottom-8 -left-12 text-4xl animate-pulse hidden lg:block">💡</div>
                )}
              </div>

              {/* Phone Mockup */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} flex justify-center lg:justify-${index % 2 === 1 ? 'start' : 'end'} relative`}>
                {feature.mockup}
                
                {/* Background decoration dots */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-ping hidden lg:block"></div>
                <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-yellow-400 rounded-full animate-pulse hidden lg:block"></div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
