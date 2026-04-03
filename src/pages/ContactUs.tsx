import { useEffect, useRef, useState } from "react";
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

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_CONFIG = {
    SERVICE_ID: "YOUR_SERVICE_ID", // Get from EmailJS dashboard
    TEMPLATE_ID: "YOUR_TEMPLATE_ID", // Get from EmailJS dashboard
    PUBLIC_KEY: "YOUR_PUBLIC_KEY", // Get from EmailJS dashboard
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
    const formData = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      message: form.message.value,
      to_email: "sales.idealgroupofcompanies@gmail.com",
      company_name: "Ideal Group of Companies",
    };

    try {
      // Method 1: Using EmailJS (Recommended)
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formData,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      // Method 2: Using Formspree (Alternative)
      // const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! We'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-28 bg-white text-black border-t border-[#F0F0F0] overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#2A33612A3361] opacity-10 blur-xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#2A3361] opacity-10 blur-xl clip-polygon" />

      {/* SVG Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 C650,200 750,50 1000,150 L1000,0 L0,0 Z"
            fill="#C98C34"
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title */}
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif mb-12 text-center"
        >
          Get in <span className="text-[#2A3361] font-bold">Touch</span>
          <div className="mx-auto mt-2 w-24 h-1 bg-[#2A3361] opacity-30"></div>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6 text-black/80">
            <div className="flex items-start gap-4">
              <MapPin className="text-[#2A3361]" size={20} />
              <div>
                <p className="font-medium">Ideal House, Bellezon Complex</p>
                <p className="text-sm">
                  Opp. Khopwadi Cross, Mahalaxmi Temple Road
                </p>
                <p className="text-sm">
                  Opp. Vasai Gaon Bus Depot, Vasai - 401201
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-[#2A3361]" size={20} />
              <p>+91 8928983353</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#2A3361]" size={20} />
              <p>sales.idealgroupofcompanies@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              className="w-full border border-[#F0F0F0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C98C34]/40"
              required
              disabled={isSubmitting}
            />
            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              className="w-full border border-[#F0F0F0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C98C34]/40"
              required
              disabled={isSubmitting}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full h-32 border border-[#F0F0F0] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#C98C34]/40 resize-none"
              required
              disabled={isSubmitting}
            />

            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`p-3 rounded-lg ${
                  submitStatus.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 bg-[#2A3361] hover:bg-[#b7782b] disabled:bg-gray-400 disabled:cursor-not-allowed transition text-white px-6 py-3 rounded-lg shadow-md w-full md:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
