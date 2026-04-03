const ongoingProjects = [
    {
        id: "acciano-villa",
        icon: "Home",
        title: "Acciano Villas",
        address: "Acciano Villas",
        description:
            `Who says dreams don’t come true? All you need is the courage to chase them! When you pour your heart, soul, and passion into your goals, magic happens. 
     
              And today, I’m thrilled to present something truly magical—Acciano Villas, the dream homes you’ve been waiting for!
       
               ✨ Now Launched in Papdy, Vasai West✨ 
     
              A masterpiece where luxury meets serenity, designed for those who refuse to compromise.% 
      
              ⏳ Only 2 Exclusive Units Left! 
     
        Your perfect villa—spacious, elegant, and nestled in Vasai’s most sought-after locale—could be just one decision away. ✨
     
              Luxury 3 BHK Villas in Vasai West – Ready Now! 
 
          ✨  Project: Acciano Villas | Location: Papdy, Vasai West
     
      🏡 LAST 2 UNITS LEFT! 
     
      ✅ Ready to Move In – No Waiting! 
        ✅ O.C. Received – Fully Legal & Safe
        ✅ Zero GST – Save Big on Your Dream Home
         ✅ Premium Finishes – Elegant & Modern Design 
       🔥 Exclusive Offer: Limited-Time Price Guarantee! 
     
         📅 Book a Site Visit Today – First come, first served!

        📞 Call Now: 8928983353 / 932263271
         `,

        image: [
            { img1: '/acciano1.jpg' },
            { img2: "/acciano2.jpg" },
            { img3: "/acciano3.jpg" },
            { img4: "/acciano4.jpg" },
            { img5: "/acciano5.jpg" },
            { img6: "/acciano6.jpg" },
            { img7: "/acciano7.jpg" },
            { img8: "/acciano8.jpg" },
            { img9: "/acciano3.jpg" },
            { img10: "/acciano2.jpg" }
        ],
        video: '/accianovideo1.mp4',
        floorPlans: [
            { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
            { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
            { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
            { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        ],
        totalArea: "2000 sq ft",
        totalFloors: "2 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-1",
        icon: "Home",
        title: "West Square Apartments",
        address: "22 Park Avenue, New York",
        description:
            "It is a long established fact that a reader will be distracted by the readable content...",

        image: [
            { img1: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1170&q=80" }
        ]
    },
    {
        id: "completed-2",
        icon: "Home",
        title: "Pine Grove Villas",
        address: "45 Central Park West, New York",
        description:
            "It is a long established fact that a reader will be distracted by the readable content...",

        image: [
            { img1: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60" }
        ]
    },
    {
        id: "completed-3",
        icon: "Building",
        title: "Corporate HQ Complex",
        address: "100 Financial District, New York",
        description:
            "It is a long established fact that a reader will be distracted by the readable content...",

        image: [
            { img1: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1170&q=80" }
        ]
    },

];

const completedProjects = [
    {
        id: "completed-4",
        icon: "Home",
        title: "Ideal Homes",
        year: "2004",
        address: "Mira Road",
        description:
            "Ideal Homes represented a step toward refinement. With just 11 residences, it wasn’t about numbers — it was about detail. Each home was crafted to offer a boutique living experience, where thoughtful layouts and quality finishes spoke louder than scale.",
        totalUnits: "11 Residences",

        image: [
            { img1: '/Idealhomes.jpeg' },

        ],
        // video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "3000 sq ft",
        totalFloors: "2 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-5",
        icon: "Building",
        title: "Ideal Enclave",
        year: "2005",
        address: "Mira Road",
        description:
            "Ideal Enclave raised the bar higher. With 276 units spread across 159,339 sq. ft., it was a project that required vision and long-term commitment. What emerged was a vibrant residential-commercial landmark that balanced ambition with livability, a space designed to stand the test of time.",
        totalUnits: "276 Units",

        image: [
            { img1: '/Idealenclave1.jpeg' },
            { img2: "/Idealenclave2.jpeg" },
            { img3: "/Idealenclave3.jpeg" },
            { img4: "/Idealenclave4.jpeg" },
            { img5: "/Idealenclave5.jpeg" },
        ],
        // video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "4300 sq ft",
        totalFloors: "11 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
        totalArea: "159,339 sq. ft."
    },
    {
        id: "completed-6",
        icon: "Home",
        title: "Royal Residency",
        year: "2007",
        address: "Mira Road",
        description:
            "Partnerships became part of our journey with Royal Residency. Together with Reliable Developers, we brought 59 homes to life, each designed with practicality and comfort. It was proof that collaboration, when done right, can create homes that feel both reliable and welcoming.",
        totalUnits: "59 Homes",

        image: [
            { img1: '/royalresidency.jpeg' },

        ],
        // video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "5000 sq ft",
        totalFloors: "20 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-7",
        icon: "Home",
        title: "Ivory Heights",
        year: "2007",
        address: "Mira Road",
        description:
            "Ivory Heights continued this spirit of collaboration, delivering 21 spacious residences designed with light, openness, and a modern way of living in mind. It reflected our growing ability to align with partners while still upholding the values that define our work.",
        totalUnits: "21 Residences",

        image: [
            { img1: '/ivoryhieghts.jpeg' },
        ],
        video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "6000 sq ft",
        totalFloors: "22 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-8",
        icon: "Home",
        title: "Ideal Park ",
        year: "1996",
        address: "Mira Road",
        description:
            "Our story of scale began with Ideal Park — 238 residences across 118,420 sq. ft. designed as more than just a housing project. It grew into a living, breathing township where families found connection, convenience, and a sense of belonging. It showed early on that our developments weren’t about structures alone, but about creating communities that endure.",
        totalUnits: "21 Residences",

        image: [
            { img1: '/idealpark.jpg' },
        ],
        video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "6000 sq ft",
        totalFloors: "22 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-9",
        icon: "Home",
        title: "Ideal Tower",
        year: "1998",
        address: "Mira Road",
        description:
            "With Ideal Tower, we introduced a forward-looking idea for its time — bringing homes and businesses under one roof. Across 110,960 sq. ft. and 214 units, it became a place where life and work could thrive together. It was proof that we could anticipate how cities were changing, and design for what people truly needed.",
        totalUnits: "214 Residences",

        image: [
            { img1: '/idealtower.jpg' },
        ],
        video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "110,960  sq ft",
        totalFloors: "22 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-10",
        icon: "Home",
        title: "Pereira Paradise ",
        year: "2012",
        address: "Vasai",
        description:
            "When we returned to Vasai, it was with Pereira Paradise — 43 residences that quickly became a sought-after address. It wasn’t just about meeting housing demand; it was about bringing thoughtful planning and a higher standard of living back to where our roots were.",
        totalUnits: "43 Residences",

        image: [
            { img1: '/perieraparadise.jpg' },
        ],
        video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "6000 sq ft",
        totalFloors: "22 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-11",
        icon: "Home",
        title: "Dynasty  ",
        year: "2013",
        address: "Vasai",
        description:
            "Dynasty, though compact with only nine units, demonstrated versatility. By combining residential and commercial use within 5,000 sq. ft., it showed how we could adapt to the changing needs of a growing suburb.",
        totalUnits: "43 Residences",

        image: [
            { img1: '/dynasty.jpg' },
        ],
        video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "5,000 sq ft",
        totalFloors: "22 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-12",
        icon: "Home",
        title: "Furtado Residency",
        year: "2014",
        address: "Vasai",
        description:
            "Blending residences with commercial spaces, Furtado Residency offered versatility to families and entrepreneurs alike. Across 33 units, it highlighted our ability to create developments that served more than one purpose — places where living and livelihood could coexist.",
        totalUnits: "33 Residences",

        image: [
            { img1: '/furtadoresidency.jpg' },
        ],
        video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "5,000 sq ft",
        totalFloors: "22 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },
    {
        id: "completed-13",
        icon: "Home",
        title: "Morning Star   ",
        year: "2018",
        address: "Vasai",
        description:
            "Morning Star carried the same essence forward, delivering 28 homes that balanced practical layouts with contemporary finishes. It was designed not just as houses, but as homes that made everyday living effortless.",
        totalUnits: "28 Residences",

        image: [
            { img1: '/morningstar.jpg' },
        ],
        video: '/accianovideo1.mp4',
        // floorPlans: [
        //     { type: "Phase 3", size: "2000 SQ.M", image: "/AccianoPhase3.png" },
        //     { type: "Bunglow 1", size: "197.52 SQ.M", image: "/AccianoBunglow1.png" },
        //     { type: "Bunglow 2", size: "189.83 SQ.M", image: "/AccianoBunglow2.png" },
        //     { type: "Bunglow 3", size: "189.21 SQ.M", image: "/AccianoBunglow3.png" }
        // ],
        totalArea: "5,000 sq ft",
        totalFloors: "22 Floor",
        parkingLot: "Ample Parking Space",
        socialArea: "860 m²",
    },

];

export { ongoingProjects, completedProjects };
