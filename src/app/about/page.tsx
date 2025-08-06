import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-4 font-orbitron">
            About
          </h1>
          <p className="text-lg text-gray-400">
            The story behind Autopilot Browser
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-gray-300 leading-relaxed">
          
          {/* Who I Am */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 font-orbitron">
              Who we are
            </h2>
            <p className="text-lg mb-4">
              Hi, I&apos;m an indie hacker passionate about building AI-powered tools that solve real problems. 
              I&apos;ve been working in tech for more than a decade. Autopilot Browser is my latest project - a solo endeavor to create the web browser I&apos;ve always wanted to use.
            </p>
          
          </section>

          {/* How I Got Started */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 font-orbitron">
              How we Got Started
            </h2>
            <p className="text-lg mb-4">
              In January 2025, I found my courage to build my own product after watching interviews with tech leaders like Sam Altman, Garry Tan, and Elon Musk on YouTube. There is one line that echoes in my mind every day: &quot;This is the best freaking time ever to build your own product.&quot;
            </p>
          
            <p className="text-lg mb-4">
              Inspired by that, I began working on a project called Autopilot Dev—a mobile app designed to let anyone, even non-developers, build mobile apps directly from their phones. The vision was ambitious: not just to build apps, but to have AI create accounts for necessary services and even deploy the apps automatically. I realized that if I could build a browser capable of interacting with websites on its own, this would be possible. That’s when the idea for Autopilot Browser was born, as a side project while Autopilot Dev remained my main focus.
            </p>
            <p className="text-lg mb-4">
              At first, I didn’t do much with the browser idea beyond visualizing it with a quick prompt in Windsurf. I kept working on Autopilot Dev, but by May 2025, I hit a major roadblock. Unlike traditional dev tools, Autopilot Dev aimed to let users create Flutter apps entirely on their phones. Since Flutter codes need to be compiled, I had to build a DSL called AppJSON, allowing AI agents to write app logic in JSON, which my runtime would render natively. I mapped over 150 Flutter widgets to AppJSON and built a runtime, but I also needed a transpiler to convert AppJSON back to Dart code. The project was solid in concept, but it was a huge undertaking for a solo developer.
            </p>
            <p className="text-lg">
              Meanwhile, my motivation for Autopilot Browser kept growing. I started to wonder: what if I built a browser with a coding agent, instead of a coding agent with a browser? That’s when my main focus shifted to Autopilot Browser.
            </p>
          </section>

          {/* My Mission */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 font-orbitron">
              Our Mission
            </h2>
            <p className="text-lg mb-4">
              My mission with Autopilot Browser is simple: to build something I genuinely want to use every day. I want to take the pain out of repetitive web tasks and let people focus on what actually matters to them. I’m not trying to make a tool just for techies—I want anyone to be able to put the web on autopilot, no matter their background. If it saves me time and makes my life easier, I know it can do the same for others.
            </p>
          </section>

          {/* My Vision */}
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4 font-orbitron">
              Our Vision
            </h2>
            <p className="text-lg mb-4">
              I see a future where a web browser can use websites just like a human—navigating, interacting, and accomplishing tasks every day. I imagine a browser that can not only browse, but also build a website, test its features, deploy it to the web, and even share updates about it on social media—all autonomously.
            </p>
            <p className="text-lg mb-4">
              And I truly believe that this future I&apos;m talking about isn&apos;t decades or years away—it&apos;s just a mile down the road.
            </p>
          </section>

          {/* Contact */}
          <section className="pt-8 border-t border-gray-800">
            <h2 className="text-2xl font-semibold text-white mb-4 font-orbitron">
              Get in Touch
            </h2>
            <p className="text-lg">
              I&apos;d love to hear from you if you&apos;re interested in Autopilot Browser. Feel free to reach out to me on
              <a
                href="https://x.com/nla_asia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mx-1"
              >
                Twitter
              </a>
              or
              <a
                href="https://www.linkedin.com/in/naylinaung/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline mx-1"
              >
                LinkedIn
              </a>
              .
            </p>
          </section>

        </div>
      </div>
      <Footer />
    </main>
  );
}
