import Image from 'next/image';

export default function Features() {
  const features = [
    {
      id: 1,
      title: "Task Assistant",
      description: "Your intelligent browsing companion that understands your needs and takes action automatically. From research to booking, let AI handle the time-consuming tasks.",
      mockup: (
        <div className="relative">
          <Image 
            src="/feature_task_assistant.png" 
            alt="Task Assistant Feature Demo"
            width={280}
            height={560}
            className="w-full max-w-[280px] h-auto rounded-[2.5rem] shadow-2xl"
          />
        </div>
      )
    },
    {
      id: 2,
      title: "Train Your Assistant",
      description: "Teach your AI assistant your preferences and workflows through simple interactions. The more you use it, the better it becomes at understanding and anticipating your needs.",
      mockup: (
        <div className="relative">
          <Image 
            src="/feature_training.png" 
            alt="Train Your Assistant Feature Demo"
            width={280}
            height={560}
            className="w-full max-w-[280px] h-auto rounded-[2.5rem] shadow-2xl"
          />
        </div>
      )
    },
    {
      id: 3,
      title: "Memories",
      description: "Advanced memory system that learns your preferences, habits, and context. The AI assistant remembers your choices and acts better on your behalf over time.",
      mockup: (
        <div className="relative">
          <Image 
            src="/feature_memories.png" 
            alt="Personalized Experiences Feature Demo"
            width={280}
            height={560}
            className="w-full max-w-[280px] h-auto rounded-[2.5rem] shadow-2xl"
          />
        </div>
      )
    },
    {
      id: 4,
      title: "History-Free Browser",
      description: "In Autopilot Browser, privacy isn’t a mode. It’s the only option. Your browsing history is never saved anywhere, and your privacy is always protected.",
      mockup: (
        <div className="relative">
          <Image 
            src="/feature_history_free.png" 
            alt="History-Free Browser Feature Demo"
            width={280}
            height={560}
            className="w-full max-w-[280px] h-auto rounded-[2.5rem] shadow-2xl"
          />
        </div>
      )
    }
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/40 border border-gray-700/50 rounded-full text-[#60A5FA] font-medium text-sm mb-6 backdrop-blur-sm font-orbitron">
            Our Core Features
          </div>
          {/* <h2 className="text-5xl font-bold text-white mb-6 tracking-tight font-orbitron">
            Smart Browsing,{' '}
            <span className="bg-gradient-to-r from-[#1D4ED8] to-[#60A5FA] bg-clip-text text-transparent">
              Redefined
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the future of web browsing with AI-powered automation, 
            minimalist design, and intelligent personalization.
          </p> */}
        </div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div key={feature.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
              
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} text-center lg:text-left relative`}>
                
                <h3 className="text-4xl font-bold text-white mb-6 font-orbitron tracking-wider">
                  {feature.title}
                </h3>
                <p className="text-xl text-gray-300 leading-relaxed  max-w-lg">
                  {feature.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#1D4ED8]/5 rounded-full blur-3xl"></div>
                
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
