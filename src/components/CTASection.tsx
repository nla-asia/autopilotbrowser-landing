import DownloadButtons from './DownloadButtons';

export default function CTASection() {
  // Control which buttons to show
  const showStoreButtons = false; // Set to true when app is uploaded to stores

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center">            
          <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#A855F7] via-[#3B82F6] to-[#06B6D4] bg-clip-text text-transparent font-orbitron tracking-wider uppercase">
            Autopilot Browser
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed font-orbitron">
            The future is here. 
            Get ready for AI assistants that surf the web on your behalf.
          </p>
          
          {/* Download Buttons */}
          <div className="mb-8">
            <DownloadButtons 
              showStoreButtons={showStoreButtons}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
