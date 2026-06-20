import Component from "@/components/ui/gradient-bars-background";
import { Features } from "@/components/blocks/features-8";
import { FeatureCard } from "@/components/blocks/grid-feature-cards";
import MultiOrbitSemiCircle from "@/components/ui/multi-orbit-semi-circle";
import FeatureWithImageComparison from "@/components/ui/feature-with-image-comparison";
import CallToAction from "@/components/ui/cta-3";
import Footer from "@/components/ui/footer";
import ScrollReveal from "@/components/ui/scroll-reveal";
import { Shield, BookOpen, Clock, ShieldAlert, Cpu, Sparkles } from "lucide-react";

const gridFeatures = [
  {
    title: "VTOP Auto-Login",
    description: "Automate your portal authentications so you can log in with a single click, skipping boring forms.",
    icon: Cpu,
  },
  {
    title: "Attendance Tracker",
    description: "Keep tabs on your lecture attendance and check how many classes you can skip before hitting the 75% limit.",
    icon: BookOpen,
  },
  {
    title: "Live Timetable",
    description: "A dynamic dashboard indicating your active slots, faculty contacts, and classroom locations for the day.",
    icon: Clock,
  },
  {
    title: "Local Offline Vault",
    description: "Your login credentials are encrypted locally with AES-256. Your password never leaves your personal computer.",
    icon: Shield,
  },
  {
    title: "Session Persistence",
    description: "Maintains your portal session in the background to prevent VTOP from logging you out during research tasks.",
    icon: Sparkles,
  },
  {
    title: "Smart Alerts",
    description: "Receive desktop widgets and warning notifications if your attendance drops below critical university thresholds.",
    icon: ShieldAlert,
  },
];

export default function Page() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-x-hidden flex flex-col justify-start">
      
      {/* First Fold: Hero Section (Height is determined by content flow) */}
      <section className="relative w-full flex flex-col items-center justify-start overflow-visible">
        
        {/* Fullscreen Background Component (Restricted to exactly 100vh and clipped) */}
        <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none overflow-hidden">
          <Component
            numBars={22}
            gradientFrom="#2563eb"
            gradientTo="transparent"
            backgroundColor="#000000"
            animationDuration={4}
          />
        </div>

        {/* Navbar Overlay */}
        <header className="absolute top-0 left-0 w-full z-50">
          <ScrollReveal duration={1000} delay={100}>
            <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <img 
                  src="/app-logo.png" 
                  alt="Deskly Logo" 
                  className="h-8 w-auto"
                />
                <span className="text-white font-semibold text-base tracking-wider font-sans">Deskly</span>
              </div>

              {/* Nav Links */}
              <nav className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-white/70 hover:text-white text-xs font-medium transition-colors font-sans">Features</a>
                <a href="#how-it-works" className="text-white/70 hover:text-white text-xs font-medium transition-colors font-sans">How It Works</a>
                <a href="#pricing" className="text-white/70 hover:text-white text-xs font-medium transition-colors font-sans">Pricing</a>
                <a href="#resource" className="text-white/70 hover:text-white text-xs font-medium transition-colors font-sans">Resource</a>
                <a href="#company" className="text-white/70 hover:text-white text-xs font-medium transition-colors font-sans">Company</a>
              </nav>

              {/* GitHub Button */}
              <div>
                <a 
                  href="https://github.com/Vishal-770/Deskly" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-[4px] text-xs font-medium shadow-md shadow-blue-500/10 active:scale-95 transition-all cursor-pointer font-sans"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.164 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </ScrollReveal>
        </header>

        {/* Hero Content Overlay (Normal padding spacing) */}
        <ScrollReveal duration={1200}>
          <div className="relative z-20 flex flex-col items-center justify-start text-center px-4 pt-28 md:pt-36 max-w-5xl mx-auto">
            {/* Subtitle */}
            <div className="flex items-center gap-1.5 text-blue-400/95 text-xs md:text-sm font-medium tracking-wider uppercase mb-4 font-header">
              <span>✦</span>
              <span>Simplify Your Student Life</span>
            </div>

            {/* Title */}
            <h1 className="text-white font-semibold text-3xl md:text-5xl lg:text-6xl max-w-4xl leading-[1.12] mb-4 tracking-tight font-header">
              Track Attendance, Timetable & VTOP in One Focused App
            </h1>

            {/* Description */}
            <p className="text-white/60 text-xs md:text-sm lg:text-base max-w-2xl mb-7 leading-relaxed font-sans font-normal">
              Deskly is a secure open-source desktop assistant for VIT Chennai students, automating your session logins and keeping your academics on track.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-[4px] text-sm font-medium shadow-lg shadow-blue-500/20 active:scale-95 transition-all cursor-pointer font-sans">
                Download Free
                <span>✦</span>
              </button>
              <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 px-6 py-3 rounded-[4px] text-sm font-medium active:scale-95 transition-all cursor-pointer font-sans">
                View Architecture
                <svg 
                  className="w-3.5 h-3.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Browser Mockup Image (Rendered in normal flow with tight margin) */}
        <ScrollReveal delay={250} duration={1200}>
          <div className="relative z-30 w-full max-w-[1250px] mx-auto px-6 mt-10 md:mt-12">
            <div className="bg-[#0b0f19] rounded-xl border border-white/10 shadow-2xl overflow-hidden">
              {/* Mac Browser Frame Bar */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0d1220] border-b border-white/5">
                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                {/* URL bar */}
                <div className="flex-1 max-w-xs mx-auto bg-[#070a12] rounded-md py-1 px-3 text-center text-[10px] text-white/40 font-mono tracking-wide border border-white/5 select-none">
                  deskly.app
                </div>
                {/* Actions Placeholder */}
                <div className="flex items-center gap-2 text-white/30">
                  <span className="text-[10px] select-none">✦</span>
                </div>
              </div>
              {/* Screenshot - Uncropped */}
              <div className="w-full bg-black">
                <img 
                  src="/main.png" 
                  alt="Deskly Application Preview" 
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Second Fold: Scrollable Area (Starts immediately below the mockup image, preventing overlaps) */}
      <section className="relative bg-black py-36 md:py-48 z-20 flex flex-col items-center flex-1">
        
        {/* Background Radial Glow (Highly visible horizontal lens-flare ellipse) */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 70% at 50% 55%, rgba(37, 99, 235, 0.24) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 85%)
            `
          }}
        />

        <div className="max-w-7xl mx-auto px-8 w-full relative z-10 flex flex-col gap-24">
          {/* Partner / Tech Logos row */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-30 select-none">
              <span className="text-white font-medium text-lg tracking-tight font-sans">Dropbox</span>
              <span className="text-white font-medium text-lg tracking-tight font-sans">Medium</span>
              <span className="text-white font-medium text-lg tracking-tight font-sans">Asana</span>
              <span className="text-white font-medium text-lg tracking-tight font-sans">Atlassian</span>
              <span className="text-white font-medium text-lg tracking-tight font-sans">Slack</span>
              <span className="text-white font-medium text-lg tracking-tight font-sans">Mailchimp</span>
            </div>
          </ScrollReveal>

          {/* Title Block */}
          <ScrollReveal delay={100}>
            <div className="text-center max-w-3xl mx-auto px-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 font-header leading-[1.2]">
                Built to Automate Your Academic Workload
              </h2>
              <p className="text-zinc-400 text-sm md:text-base font-sans font-normal leading-relaxed">
                Ditch the manual VTOP hurdles. Deskly coordinates your schedule updates, logs in to session dashboards, and keeps you prepared automatically.
              </p>
            </div>
          </ScrollReveal>

          {/* Features Block */}
          <ScrollReveal delay={200}>
            <div className="w-full mt-4 relative z-10">
              <Features />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Grid Features Section */}
      <section className="relative bg-black py-36 md:py-48 z-20 flex flex-col items-center">
        
        {/* Background Radial Glow (Highly visible horizontal lens-flare ellipse) */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37, 99, 235, 0.24) 0%, rgba(29, 78, 216, 0.08) 50%, transparent 85%)
            `
          }}
        />

        <div className="max-w-7xl mx-auto px-8 w-full relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4 font-header leading-[1.2]">
                More Powerful Utilities Built-In
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Every detail is engineered to optimize your VIT student life, keeping your dashboard simple, fast, and secure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden rounded-none border border-white/10 bg-[#0c0f1d]/10 backdrop-blur-md">
              {gridFeatures.map((feature, idx) => (
                <FeatureCard 
                  key={idx} 
                  feature={feature}
                  className="border border-white/10 -mr-px -mb-px hover:bg-white/[0.02] transition-colors duration-300"
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Multi Orbit Semi-Circle Section */}
      <ScrollReveal>
        <MultiOrbitSemiCircle />
      </ScrollReveal>

      {/* Feature Image Comparison Section */}
      <ScrollReveal>
        <FeatureWithImageComparison />
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal>
        <CallToAction />
      </ScrollReveal>

      {/* Footer Section */}
      <ScrollReveal delay={100}>
        <Footer />
      </ScrollReveal>
      
    </div>
  );
}
