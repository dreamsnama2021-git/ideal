import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const primary = "#2A3361";
const secondary = "#18191E";

const blogPosts = [
  {
    title: "Designing Smart Spaces: Trends of 2025",
    summary:
      "Explore how smart layouts, sustainable materials, and AI integration are transforming homes in 2025.",
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68809401002a7d2969b1/files/6880aa56000ac8de80d0/view?project=6875fd9e000f3ec8a910",
    slug: "smart-spaces-2025",
  },
  {
    title: "Why Location Still Matters in Real Estate",
    summary:
      "Discover the long-term value of well-located properties and how it shapes lifestyle and ROI.",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1170&q=80",
    slug: "location-value-real-estate",
  },
];

const BlogPage = () => {
  const titleRef = useRef(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

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

    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: i * 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section className="py-24 bg-white text-black relative overflow-hidden border-t border-[#F0F0F0]">
      {/* Header Wave */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C150,200 350,0 500,100 C650,200 750,50 1000,150 L1000,0 L0,0 Z"
            fill={primary}
            fillOpacity="0.05"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif mb-12 text-center"
        >
          Latest <span style={{ color: primary }}>Blogs</span>
          <div
            className="mx-auto mt-2 w-24 h-1"
            style={{ background: primary, opacity: 0.3 }}
          />
        </h2>

        <div className="grid gap-12 md:grid-cols-2">
          {blogPosts.map((post, i) => (
            <div
              key={post.slug}
              ref={(el) => (cardRefs.current[i] = el!)}
              className="bg-white rounded-xl border border-[#F0F0F0] overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-black/80 mb-4 text-sm">{post.summary}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-sm text-blue-700 hover:text-blue-900"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
