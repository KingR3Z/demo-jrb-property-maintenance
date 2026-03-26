export const client = {
  // Business Details
  name: "JRB Property Maintenance",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in Swindon.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07554 764676",
  email: "",
  website: "",

  // Location
  address: "Swindon",
  city: "Swindon",
  county: "",
  postcode: "",
  basedIn: "Swindon",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5",
  reviewCount: "4",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "Ganeen Adegboyega", rating: 5, text: "Extremely reliable and work maintenance is of a high standard. Joseph's explanation of work undertaking is very clear and re-assuring. I find JRB services as very reliable", date: "5 months ago" },
    { name: "Ann Ormston", rating: 5, text: "John was very helpful and knowledgeable when he repointed and restored my chimney. I would recommend him .", date: "9 months ago" },
    { name: "Kurt", rating: 5, text: "John came highly recommended by a friend who had used his team do some work on their home, the quality of workmanship spoke for itself. We got John and his team in to do various improvements and upgrades around our house. We’ve had the driveway replaced, a number of trees and a hedge trimmed back, the roof and gutters cleaned and repaired following the recent storms. The whole team were pleasant and professional throughout and workmanship top notch. JRB property maintenance will be my first choice for any works on our home going forward. Highly recommended", date: "a year ago", badge: "Local Guide" },
    { name: "Karen Jones", rating: 5, text: "John was really helpful in planning our new patio area and gave us some new ideas. His team worked hard to get the work completed in time and we are really pleased with the result. Would definitely recommend!", date: "a year ago" },
    { name: "Wayne Rumbold", rating: 5, text: "Very pleased with our new driveway. The whole experience was very professional and very well organised …would recommend to anyone looking to use one of their services.", date: "3 years ago" },
    { name: "alex turner", rating: 5, text: "john biddle and his friendly team were a delight. I am very happy with my new patio and John's design ideas all worked out well .", date: "3 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "JRB Property Maintenance | Landscaper in Swindon",
    description: "Professional landscaper in Swindon. 5.0-star rated on Google. Call for a free quote.",
  },
};
