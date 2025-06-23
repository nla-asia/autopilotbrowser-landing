import DownloadButtons from './DownloadButtons';

export default function Hero() {
  // Control which buttons to show
  const showStoreButtons = false; // Set to true when app is uploaded to stores

  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}          
          <div className="text-center lg:text-left">                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-wider font-orbitron uppercase">
              Surf on{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#9333EA] to-[#FF0080] bg-clip-text text-transparent">
                Autopilot
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-xl font-orbitron">
              A browser with a smart assistant that surfs the web on your behalf — from research to booking flights, with full privacy.
            </p>
                  
            {/* CTA Buttons */}
            <div className="mt-10">
              <DownloadButtons 
                showStoreButtons={showStoreButtons}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              />
            </div>
          </div>

          {/* Right Column - App Preview */}
          <div className="flex justify-center lg:justify-end">            
            <div className="relative">
              {/* Phone Mockup */}
              <div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl transition-transform duration-700">
                <div className="bg-white rounded-[2.5rem] overflow-hidden" style={{width: '300px', height: '600px'}}>
                  {/* Status Bar */}
                  <div className="bg-gray-100 h-10 flex items-center justify-between px-6 text-sm text-gray-600 font-orbitron">
                    <span className="font-semibold">9:41</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-6 h-2 bg-emerald-500 rounded-sm"></div>
                    </div>
                  </div>                  

                  {/* App Content Preview */}
                  <div className="p-6 h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                    <div className="text-center">                      
                      <div className="w-20 h-20 bg-[#1D4ED8] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
                        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h3 className="font-bold text-white mb-2 text-lg font-orbitron">Autopilot Browser</h3>
                      <p className="text-sm text-gray-400 mb-6 font-orbitron">Your AI browsing assistant</p>
                      
                      {/* Sample Interface Elements */}
                      <div className="space-y-4">
                        <div className="bg-gray-800/80 rounded-2xl p-4 shadow-sm border border-gray-700/50">
                          <div className="text-xs text-gray-400 mb-2 text-left font-orbitron">Current Task</div>
                          <div className="text-sm text-white text-left font-orbitron">Searching for flights to Tokyo...</div>                          
                          <div className="w-full bg-gray-700 rounded-full h-2 mt-3">
                            <div className="bg-[#1D4ED8] h-2 rounded-full w-3/4 animate-pulse"></div>
                          </div>
                        </div>
                        <div className="bg-[#1D4ED8]/20 rounded-2xl p-4 border border-[#1D4ED8]/30">
                          <div className="text-xs text-[#60A5FA] mb-2 text-left font-semibold font-orbitron">AI Assistant</div>
                          <div className="text-sm text-white text-left font-orbitron">Found 5 options. Shall I compare prices?</div>
                          <div className="flex gap-2 mt-3">
                            <button className="bg-[#1D4ED8] text-white px-3 py-1 rounded-lg text-xs font-orbitron">Yes</button>
                            <button className="bg-gray-700 text-gray-300 px-3 py-1 rounded-lg text-xs font-orbitron">No</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
