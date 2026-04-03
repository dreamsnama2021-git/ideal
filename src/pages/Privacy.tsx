import React from "react";
import { Link } from "react-router-dom"; // or 'next/link' for Next.js
import { Mail, Phone, MapPin, Shield } from "lucide-react";

// ─── Design System (Matching Home.tsx) ─────────────────────────────────────
const palette = {
  navy: "#0b0f2b",
  gold: "#d3b06e",
  cream: "#f4f1ec",
  muted: "#b1b6c6",
  darkText: "#1a2240",
};

// ─── Component: Privacy Policy Page ──────────────────────────────────────────
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* ─── Header (Simplified, matches Home.tsx nav style) ───────────────── */}
      <header className="w-full bg-[#0b0f2b] py-4 sticky top-0 z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            {/* Placeholder Logo - Replace with your actual logo SVG/Image */}
            <div className="text-[#d3b06e] font-serif text-2xl font-bold tracking-wider">
              IDEAL GROUP
            </div>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm tracking-widest uppercase text-gray-300">
            <Link to="/" className="hover:text-[#d3b06e] transition-colors">Home</Link>
            <Link to="/projects" className="hover:text-[#d3b06e] transition-colors">Projects</Link>
            <Link to="/about" className="hover:text-[#d3b06e] transition-colors">About</Link>
            <Link to="/contact" className="hover:text-[#d3b06e] transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      {/* ─── Hero Section ──────────────────────────────────────────────────── */}
      <section className="relative w-full bg-[#f4f1ec] py-20 md:py-28 overflow-hidden">
        {/* Decorative subtle background element (optional line art similar to Home) */}
        <div 
          className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-no-repeat bg-right"
          style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 200 L200 0' stroke='%23d3b06e' stroke-width='1' fill='none'/%3E%3C/svg%3E")` 
          }}
        />
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-[#d3b06e]" />
              <span className="text-xs tracking-[0.3em] uppercase text-gray-500 font-semibold">
                Legal
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a2240] leading-tight mb-6">
              Privacy <span className="italic text-[#d3b06e]">Policy</span>
            </h1>
            <div className="w-24 h-1 bg-[#d3b06e] mb-6"></div>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
              At Ideal Group, we respect your privacy and are committed to protecting your personal data. This policy outlines how we collect, use, and safeguard your information.
            </p>
            <p className="mt-4 text-sm text-gray-500">
              Last Updated: <span className="font-semibold text-[#0b0f2b]">January 2026</span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── Main Content Section ──────────────────────────────────────────── */}
      <section className="flex-grow py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          
          <div className="prose prose-lg max-w-none">
            
            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-[#0b0f2b] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#d3b06e] text-white flex items-center justify-center text-sm mr-3 font-sans">1</span>
                Information We Collect
              </h2>
              <div className="pl-11 border-l-2 border-[#f4f1ec]">
                <p className="text-gray-600 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including but not limited to:
                </p>
                <ul className="space-y-2 text-gray-600 list-none pl-0">
                  {['Personal identification (name, email, phone number)', 'Property preferences and requirements', 'Communication records and correspondence', 'Website usage data and cookies'].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d3b06e] mt-2.5 mr-3 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-[#0b0f2b] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#d3b06e] text-white flex items-center justify-center text-sm mr-3 font-sans">2</span>
                How We Use Your Information
              </h2>
              <div className="pl-11 border-l-2 border-[#f4f1ec]">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ideal Group uses the collected data for various purposes:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'To provide and maintain our services',
                    'To notify you about changes to our projects',
                    'To provide customer support',
                    'To gather analysis for site improvements'
                  ].map((item, i) => (
                    <div key={i} className="bg-[#f4f1ec] p-4 rounded-lg text-sm text-[#1a2240] font-medium">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-[#0b0f2b] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#d3b06e] text-white flex items-center justify-center text-sm mr-3 font-sans">3</span>
                Data Security
              </h2>
              <div className="pl-11 border-l-2 border-[#f4f1ec]">
                <p className="text-gray-600 leading-relaxed">
                  The security of your data is important to us. We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="font-serif text-2xl md:text-3xl text-[#0b0f2b] mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[#d3b06e] text-white flex items-center justify-center text-sm mr-3 font-sans">4</span>
                Your Rights
              </h2>
              <div className="pl-11 border-l-2 border-[#f4f1ec]">
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Access your data', 'Rectify inaccuracies', 'Request deletion', 'Withdraw consent'].map((right, i) => (
                    <span key={i} className="px-4 py-2 border border-[#d3b06e] text-[#d3b06e] rounded-full text-sm font-medium">
                      {right}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Section within content */}
            <div className="mt-16 p-8 bg-[#f4f1ec] rounded-lg">
              <h3 className="font-serif text-2xl text-[#0b0f2b] mb-4">Questions or Concerns?</h3>
              <p className="text-gray-600 mb-6">
                If you have any questions about this Privacy Policy, please contact our data protection officer:
              </p>
              <div className="space-y-3">
                <a href="mailto:sales@bigimpex.com" className="flex items-center gap-3 text-[#0b0f2b] hover:text-[#d3b06e] transition-colors">
                  <Mail size={18} className="text-[#d3b06e]" />
                  <span>privacy@idealgroup.com</span>
                </a>
                <div className="flex items-center gap-3 text-[#0b0f2b]">
                  <Phone size={18} className="text-[#d3b06e]" />
                  <span>+91 86579 58081</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

   
    </div>
  );
}
