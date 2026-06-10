import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

const ContactUs = () => {
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const EMAILJS_CONFIG = {
    SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_v13fcjg",
    TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_uqpykrl",
    PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "nDVxfzxDLtmNToqOf",
  };

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: "", message: "" });

    const form = e.currentTarget;
    const userName = form.from_name.value;
    const userEmail = form.from_email.value;
    const userPhone = form.from_phone.value;
    const userMessage = form.message.value;
    const requestTitle = userMessage.split(" ").slice(0, 8).join(" ") + (userMessage.split(" ").length > 8 ? "..." : "");
    
    // Generate ticket ID and timestamp
    const currentDate = new Date().toLocaleString();
    const ticketId = "IGC-" + Date.now().toString().slice(-8);

    const templateData = {
      // Customer info
      from_name: userName,
      from_email: userEmail,
      from_phone: userPhone,
      message: userMessage,
      title: requestTitle,
      
      // Company info
      to_email: "sales.idealgroupofcompanies@gmail.com",
      company_name: "Ideal Group of Companies",
      
      // Premium template variables
      name: userName,
      email: userEmail,
      phone: userPhone,
      request_title: requestTitle,
      ticket_id: ticketId,
      submitted_date: currentDate,
    };

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log("Email sent successfully:", response);
      console.log("Ticket ID:", ticketId);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you within 3 business days.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact us directly at sales.idealgroupofcompanies@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-28 bg-white text-black border-t border-[#F0F0F0] overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2A3361] opacity-10 blur-xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#2A3361] opacity-10 blur-xl" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 600" preserveAspectRatio="none">
          <path d="M0,100 C150,200 350,0 500,100 C650,200 750,50 1000,150 L1000,0 L0,0 Z" fill="#C98C34" fillOpacity="0.05" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-serif mb-12 text-center">
          Get in <span className="text-[#2A3361] font-bold">Touch</span>
          <div className="mx-auto mt-2 w-24 h-1 bg-[#2A3361] opacity-30"></div>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-black/80">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#2A3361] shrink-0 mt-0.5" size={20} />
              <div>
                <p className="font-medium">Ideal House, Bellezon Complex</p>
                <p className="text-sm">Opp. Khopwadi Cross, Mahalaxmi Temple Road</p>
                <p className="text-sm">Opp. Vasai Gaon Bus Depot, Vasai - 401201</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#2A3361] shrink-0" size={20} />
              <p>+91 8928983353</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#2A3361] shrink-0" size={20} />
              <p>sales.idealgroupofcompanies@gmail.com</p>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name *
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="John Doe"
                className="w-full border border-[#E0E0E0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C98C34]/40 focus:border-[#C98C34] transition"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-1">
                Your Email *
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                placeholder="john@example.com"
                className="w-full border border-[#E0E0E0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C98C34]/40 focus:border-[#C98C34] transition"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label htmlFor="from_phone" className="block text-sm font-medium text-gray-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                id="from_phone"
                name="from_phone"
                placeholder="+91 98765 43210"
                className="w-full border border-[#E0E0E0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C98C34]/40 focus:border-[#C98C34] transition"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                className="w-full h-32 border border-[#E0E0E0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C98C34]/40 focus:border-[#C98C34] transition resize-none"
                required
                disabled={isSubmitting}
              />
            </div>

            {submitStatus.message && (
              <div className={`p-3 rounded-lg ${submitStatus.type === "success" ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-[#2A3361] hover:bg-[#C98C34] disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 text-white px-8 py-3 rounded-lg shadow-md w-full md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={18} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
            
            <p className="text-xs text-gray-400 text-center md:text-left">
              We'll respond within 3 business days
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;