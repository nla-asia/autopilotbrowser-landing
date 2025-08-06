import Image from 'next/image';
import DownloadButtons from './DownloadButtons';

export default function Hero() {
  // Control which buttons to show
  const showStoreButtons = false; // Set to true when app is uploaded to stores

  return (
    <section className="pt-32 pb-20 min-h-screen flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}          
          <div className="text-center lg:text-left">                
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-wider font-orbitron uppercase">
              Surf on{' '}
              <span className="bg-gradient-to-r from-[#00D4FF] via-[#9333EA] to-[#FF0080] bg-clip-text text-transparent">
                Autopilot
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-xl font-orbitron">
            AI-native web browser that surfs the web on your behalf — from your device.
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
              <Image 
                src="/hero_demo.png" 
                alt="Autopilot Browser Demo"
                width={300}
                height={600}
                className="w-full max-w-[300px] h-auto rounded-[3rem] shadow-2xl transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
