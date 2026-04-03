import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1d1e1e] text-white py-16 border-t border-[#2A3361]/30">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10">
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/favicon.ico" alt="Ideal Builder Logo" className="h-10" />
            {/* <span className="text-xl font-serif">Ideal Builder</span> */}
          </div>
          <p className="text-sm text-white/80 max-w-md">
            We build with precision, passion, and purpose—creating beautiful,
            sustainable spaces that last.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-serif mb-4 text-[#eeeeee]">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm text-white/80">
            {[
              { label: "Home", href: "/" },
              { label: "Testimonial", href: "/testimonal" },
              { label: "About Us", href: "/about" },
              { label: "Projects", href: "/properties" },
            ].map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  className="flex items-center gap-2 hover:text-[#2A3361] transition"
                >
                  <span className="w-1.5 h-1.5 bg-[#2A3361] rounded-full" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-serif mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin className="text-[#2A3361] mt-0.5" size={16} />
              <span>123 Construction Ave, Building City, BC 10001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-[#2A3361]" size={16} />
              <a href="tel:+15551234567" className="hover:underline">
                +1 (555) 123-4567
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-[#2A3361]" size={16} />
              <a
                href="mailto:contact@idealbuilder.com"
                className="hover:underline"
              >
                contact@idealbuilder.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 mt-12 text-white/70">
        <a
          href="#"
          aria-label="Facebook"
          className="hover:text-[#2A3361] transition"
        >
          <FaFacebookF size={18} />
        </a>
        <a
          href="#"
          aria-label="Instagram"
          className="hover:text-[#2A3361] transition"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href="#"
          aria-label="Twitter"
          className="hover:text-[#2A3361] transition"
        >
          <FaTwitter size={18} />
        </a>
        <a
          href="#"
          aria-label="LinkedIn"
          className="hover:text-[#2A3361] transition"
        >
          <FaLinkedinIn size={18} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#2A3361]/20 mt-12 pt-6 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Ideal Builder. All rights reserved.
      </div>
    </footer>
  );
}
