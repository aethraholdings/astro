import birthChart from "../assets/images/birth-chart.jpg";
import tarot from "../assets/images/tarot.jpg";
import compatibility from "../assets/images/compatibility.jpg";
import career from "../assets/images/career.jpg";
import numerology from "../assets/images/numerology.jpg";
import vastu from "../assets/images/vastu.jpg";
import crystalHealing from "../assets/images/crystal-healing.jpg";

const services = [
  {
    id: 1,
    slug: "birth-chart-reading",
    image: birthChart,
    title: "Birth Chart Reading",
    duration: "60 Minutes",
    price: "₹99",
    category: "Astrology",
    description:
      "A detailed analysis of your natal chart covering personality, strengths, relationships, career, finances, and life purpose.",
    includes: [
      "Birth Chart Analysis",
      "Career Guidance",
      "Relationship Insights",
      "Life Purpose",
      "Lucky Periods",
      "Remedies",
    ],
  },
  {
    id: 2,
    slug: "tarot-reading",
    image: tarot,
    title: "Tarot Reading",
    duration: "45 Minutes",
    price: "₹99",
    category: "Tarot",
    description:
      "Gain clarity about current situations and receive intuitive guidance through tarot cards.",
    includes: [
      "Love",
      "Career",
      "Money",
      "Family",
      "Decision Making",
    ],
  },
  {
    id: 3,
    slug: "love-compatibility",
    image: compatibility,
    title: "Love Compatibility",
    duration: "60 Minutes",
    price: "₹99",
    category: "Relationships",
    description:
      "Compatibility analysis based on birth charts to understand strengths, challenges, and long-term harmony.",
    includes: [
      "Compatibility Score",
      "Marriage Potential",
      "Communication",
      "Strengths",
      "Challenges",
    ],
  },
  {
    id: 4,
    slug: "career-guidance",
    image: career,
    title: "Career Guidance",
    duration: "60 Minutes",
    price: "₹99",
    category: "Career",
    description:
      "Discover career opportunities, ideal professions, and favorable periods for growth.",
    includes: [
      "Career Analysis",
      "Business",
      "Job Change",
      "Promotion",
      "Financial Growth",
    ],
  },
  {
    id: 5,
    slug: "numerology",
    image: numerology,
    title: "Numerology",
    duration: "45 Minutes",
    price: "₹99",
    category: "Numerology",
    description:
      "Decode the meaning behind your numbers and understand how they influence your life.",
    includes: [
      "Life Path Number",
      "Destiny Number",
      "Lucky Numbers",
      "Compatibility",
    ],
  },
  {
    id: 6,
    slug: "vastu-consultation",
    image: vastu,
    title: "Vastu Consultation",
    duration: "90 Minutes",
    price: "₹99",
    category: "Vastu",
    description:
      "Practical Vastu guidance for homes and workplaces to improve harmony and well-being.",
    includes: [
      "Home Analysis",
      "Office Analysis",
      "Remedies",
      "Energy Flow",
    ],
  },
  {
    id: 7,
    slug: "crystal-healing",
    image: crystalHealing,
    title: "Crystal Healing",
    duration: "45 Minutes",
    price: "₹99",
    category: "Healing",
    description:
      "Learn how crystals can support emotional balance, focus, and personal growth.",
    includes: [
      "Crystal Selection",
      "Usage Guide",
      "Chakra Balance",
      "Care Instructions",
    ],
  },
];

export default services;