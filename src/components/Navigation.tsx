import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppButton from "./WhatsAppButton";
// Logo: https://fra.cloud.appwrite.io/v1/storage/buckets/6912e7900026161605d7/files/69458b800033be3fb6f0/view?project=6912e771002b88166cae&mode=admin
const Navigation = () => {
  const navRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  /* ---------- Initial animation ---------- */
  useEffect(() => {
    if (navRef.current) {
      gsap.from(navRef.current, {
        y: -100,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, []);

  /* ---------- Hide / show on scroll ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- Nav links ---------- */
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/", scrollTo: "about" },
    {
      name: "Ongoing Projects",
      dropdown: [
        { name: "Heavens", to: "/heavens-villa" },
        { name: "Acciano Villas", to: "/acciano-villa" },
      ],
    },
    { name: "Completed Projects", to: "/completed-projects" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#2A3361]/20 shadow-sm font-[Montserrat] transition-transform duration-300 ${
        !isVisible ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 py-3 relative">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              className="h-10"
              src="/favicon.ico"
              alt="Ideal Builders Logo"
            />
          </Link>

          {/* ---------- Desktop Menu ---------- */}
          <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center space-x-8">
              {navLinks.map((link, index) =>
                link.dropdown ? (
                  <div key={index} className="relative group">
                    <span className="cursor-pointer font-medium text-black hover:text-[#2A3361]">
                      {link.name}
                    </span>

                    <div className="absolute left-0 mt-3 w-44 bg-white shadow-lg border rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      {link.dropdown.map((item, i) => (
                        <Link
                          key={i}
                          to={item.to}
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={link.to}
                    state={
                      link.scrollTo ? { scrollTo: link.scrollTo } : undefined
                    }
                    className="font-medium text-black hover:text-[#2A3361] relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2A3361] transition-all group-hover:w-full" />
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* ---------- Mobile Toggle ---------- */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen((s) => !s)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white px-6 pb-6 pt-4 border-t mt-2">
            {navLinks.map((link, index) =>
              link.dropdown ? (
                <div key={index}>
                  <button
                    onClick={() => setMobileDropdownOpen((prev) => !prev)}
                    className="w-full py-3 flex justify-between font-medium"
                  >
                    {link.name}
                    <span>{mobileDropdownOpen ? "−" : "+"}</span>
                  </button>

                  {mobileDropdownOpen &&
                    link.dropdown.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileDropdownOpen(false);
                        }}
                        className="block py-2 pl-4"
                      >
                        {item.name}
                      </Link>
                    ))}
                </div>
              ) : (
                <Link
                  key={index}
                  to={link.to}
                  state={
                    link.scrollTo ? { scrollTo: link.scrollTo } : undefined
                  }
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 font-medium"
                >
                  {link.name}
                </Link>
              ),
            )}
          </div>
        )}

        {/* WhatsApp Button */}
        <div className="absolute top-[80vh] right-2 bg-green-500 p-3 rounded-full">
          <WhatsAppButton />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
