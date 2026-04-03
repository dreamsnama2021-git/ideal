import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useParams, Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const primary = "#2A3361";
const secondary = "#18191E";

// Dummy blog data (replace with real CMS or database)
const blogData = {
  "smart-spaces-2025": {
    title: "Designing Smart Spaces: Trends of 2025",
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68809401002a7d2969b1/files/6880aa56000ac8de80d0/view?project=6875fd9e000f3ec8a910",
    content: `
      In 2025, home design is evolving to meet the demands of urban living, sustainability, and technology. 
      From AI-powered lighting to modular room systems, smart homes are redefining comfort.
      
      Energy efficiency and flexible layouts are now standard. Architects integrate greenery, natural light, 
      and smart controls to promote wellness and reduce footprints. Smart materials like self-healing concrete 
      and adaptive glass further improve durability and design.

      Ideal Builders continue to stay ahead by implementing these trends across upcoming projects, ensuring that 
      modern living is not just about aesthetics — it's about sustainable, thoughtful spaces.
    `,
  },
  "location-value-real-estate": {
    title: "Why Location Still Matters in Real Estate",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1170&q=80",
    content: `
      Location has always been the golden rule in real estate — and in 2025, that hasn't changed.

      A well-connected neighborhood with access to transport, schools, and essential services increases property 
      value and livability. Even with digital work culture growing, proximity to social and recreational spaces 
      still matters.

      Ideal Builders focuses on developing in fast-growing, future-ready zones, giving homeowners the benefit 
      of appreciation and convenience. Whether it's Mira Road or Vasai, our locations are chosen with intent.
    `,
  },
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = blogData[slug];

  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);

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
        }
      );
    }

    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
        }
      );
    }
  }, []);

  if (!post) {
    return (
      <div className="py-32 text-center text-gray-500">
        Blog not found.{" "}
        <Link to="/blog" className="underline text-blue-600">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white text-black relative overflow-hidden border-t border-[#F0F0F0]">
      <div className="container mx-auto px-6">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif mb-8 text-center"
        >
          {post.title}
          <div
            className="mx-auto mt-2 w-24 h-1"
            style={{ background: primary, opacity: 0.3 }}
          />
        </h1>

        <div
          ref={imageRef}
          className="rounded-xl overflow-hidden shadow-lg mb-8"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full object-cover h-96"
          />
        </div>

        <div
          ref={contentRef}
          className="prose max-w-3xl mx-auto prose-lg text-black/90"
        >
          {post.content.split("\n").map((para, idx) => (
            <p key={idx}>{para.trim()}</p>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog"
            className="inline-block px-6 py-3 text-white rounded-lg transition-all"
            style={{ backgroundColor: primary }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = secondary)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = primary)
            }
          >
            Back to Blogs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
