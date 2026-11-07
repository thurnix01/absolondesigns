export type ProjectCategory = "web" | "brand" | "print" | "motion" | "photo";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  description: string;
  tools: string[];
  image: string;
  imageAlt: string;
  liveUrl?: string;
  behanceUrl?: string;
};

export const categoryLabels: Record<ProjectCategory | "all", string> = {
  all: "All",
  web: "Web",
  brand: "Brand",
  print: "Print",
  motion: "Motion",
  photo: "Photo",
};

export const projects: Project[] = [
  {
    slug: "noc-careers",
    title: "NOC Careers",
    category: "web",
    description:
      "Built a search site for Canada's Rural Community Immigration Pilot that surfaces priority NOCs and designated employers across participating communities. Design focused on a brand-led header, place photography, and clear Sora/Manrope typography. The layout centers a filterable directory with community cards and result sorting, and the content keeps visitors oriented toward official portals.",
    tools: ["React", "Vite", "n8n", "Google Sheets", "GitHub Pages"],
    image: "/cards/preview_07.webp",
    imageAlt: "NOC Careers website preview",
    liveUrl: "https://noccareers.ca",
  },
  {
    slug: "ledgerxtr",
    title: "LedgerXTR",
    category: "web",
    description:
      "Designed and built a single-page site for a bookkeeping brand focused on financial clarity for growing businesses. The design leans on a calm brand-led hero and photography that signals trust. The layout moves visitors through services, process, FAQ, and a contact form in one scroll, and leads route into Google Sheets and Outlook through n8n.",
    tools: ["React", "Vite", "TypeScript", "n8n", "Google Sheets"],
    image: "/cards/preview_08.webp",
    imageAlt: "LedgerXTR website preview",
    liveUrl: "https://ledgerxtr.com/",
  },
  {
    slug: "performance-bicycle-page-builder",
    title: "Performance Bicycle Page Builder",
    category: "web",
    description:
      "A form that streamlines the path from a Performance Bicycle blog mockup in Figma to live HTML, so page content can be assembled without rebuilding the layout by hand.",
    tools: ["HTML", "JavaScript", "Figma"],
    image: "/cards/preview_04.webp",
    imageAlt: "Performance Bicycle page builder preview",
    liveUrl: "https://thurnix01.github.io/page_info_template_builder/",
  },
  {
    slug: "responsive-page-design",
    title: "Responsive Page Design",
    category: "web",
    description:
      "Designed a responsive page layout in HTML and CSS for a client site, with the focus on navigation and layout that hold together from desktop down to a phone.",
    tools: ["HTML", "CSS", "JavaScript", "Figma"],
    image: "/cards/preview_05.webp",
    imageAlt: "Responsive page design preview",
    liveUrl:
      "https://www.performancebike.com/how-to-crush-your-first-gravel-race/cp1744",
  },
  {
    slug: "performance-bicycle-tshirt",
    title: "Performance Bicycle T-Shirt Design",
    category: "brand",
    description:
      "Apparel graphics for Performance Bicycle. On Behance this project is filed under fashion, branding, and graphic design, and it was built in Photoshop and Illustrator. The Behance page is a visual presentation and does not include a longer written case study.",
    tools: ["Photoshop", "Illustrator"],
    image: "/cards/performance-bicycle-tshirt.webp",
    imageAlt: "Performance Bicycle t-shirt design",
    behanceUrl:
      "https://www.behance.net/gallery/242065881/Performance-Bicycle-T-Shirt-Design",
  },
  {
    slug: "big-apple-movies",
    title: "The Big Apple Movies Magazine",
    category: "print",
    description:
      "The motion picture industry in New York City has always played a visible role in the city’s culture. This article showcases a variety of ways movie production in the city has contributed to its economic status, and the variety of movies shot there.",
    tools: ["Photoshop", "Illustrator", "InDesign"],
    image: "/cards/big-apple-movies.webp",
    imageAlt: "The Big Apple Movies magazine spread",
    behanceUrl:
      "https://www.behance.net/gallery/80657275/The-Big-Apple-Movies-Magazine",
  },
  {
    slug: "international-student-guide",
    title: "International Student Guide Book",
    category: "print",
    description:
      "The idea behind this student guide was to showcase what Madison Area Technical College has to offer international students. The booklet explores typography, layout, and treated photography.",
    tools: ["Print design", "Typography", "Photography"],
    image: "/cards/student-guide.webp",
    imageAlt: "International student guide book",
    behanceUrl:
      "https://www.behance.net/gallery/79753417/International-Student-Guide-Book",
  },
  {
    slug: "arrive-alive",
    title: "Arrive Alive",
    category: "brand",
    description:
      "The effects of vehicle accidents have always been devastating to friends and families. This three-part PSA was created to bring attention to the responsibility of people who get behind the wheel.",
    tools: ["Campaign design", "Art direction"],
    image: "/cards/arrive-alive.webp",
    imageAlt: "Arrive Alive public service campaign",
    behanceUrl: "https://www.behance.net/gallery/79298883/Arrive-Alive",
  },
  {
    slug: "washburn-instagram-ad",
    title: "Washburn Instagram Ad",
    category: "motion",
    description:
      "An American original. Washburn has always been a true reflection of guitar history. In this three-piece Instagram advert, I wanted to express what the product means to me with original photography, bright and vibrant color treatments, fresh typography, and a cool animation.",
    tools: ["Photoshop", "Figma", "Animation"],
    image: "/cards/washburn.webp",
    imageAlt: "Washburn Instagram advertisement",
    behanceUrl: "https://www.behance.net/gallery/79189727/Washburn-Instagram-Ad",
  },
  {
    slug: "mixed-media-illustration",
    title: "Mixed Media Illustration",
    category: "print",
    description:
      "Every idea that comes to mind needs to start with a sketch. Illustration and technical drawing help those ideas come to life and stay part of the creative process. This piece captures the feel of Jimi Hendrix and was created with a minor analogous color scheme.",
    tools: ["Illustration", "Mixed media"],
    image: "/cards/mixed-media.webp",
    imageAlt: "Mixed media illustration of Jimi Hendrix",
    behanceUrl:
      "https://www.behance.net/gallery/78895869/Mixed-Media-Illustration",
  },
  {
    slug: "bob-marley-typography",
    title: "Bob Marley Typography",
    category: "brand",
    description:
      "Typography, to me, is words coming to life. Each letter, the spacing, and the line height has its own character, and I enjoy seeing what happens when those pieces are pushed around.",
    tools: ["Typography", "Lettering"],
    image: "/cards/bob-marley.webp",
    imageAlt: "Bob Marley typography poster",
    behanceUrl:
      "https://www.behance.net/gallery/78809711/Bob-Marley-Typography",
  },
  {
    slug: "photography",
    title: "Photography",
    category: "photo",
    description:
      "A photography series published on Behance. That project is image-led and does not include a written description, so the photographs carry the piece.",
    tools: ["Photography"],
    image: "/cards/photography.webp",
    imageAlt: "Photography series cover",
    behanceUrl: "https://www.behance.net/gallery/78679315/Photography",
  },
  {
    slug: "in-my-ktchn",
    title: "In My Ktchn",
    category: "web",
    description:
      "Recipe Reader came from people wanting to cook at home without needing someone else in the kitchen. The mobile app reads a chosen recipe out loud while you cook. The concept came out of an in-depth study and an online survey.",
    tools: ["App concept", "UX", "Research"],
    image: "/cards/in-my-ktchn.webp",
    imageAlt: "In My Ktchn recipe reader app",
    behanceUrl: "https://www.behance.net/gallery/78627231/In-My-Ktchn",
  },
  {
    slug: "us-constitution",
    title: "The U.S. Constitution",
    category: "print",
    description:
      "This booklet was created from a 20th-century inspiration, aimed at a contemporary reader with an interest in the constitutional values of the United States.",
    tools: ["Book design", "Typography"],
    image: "/cards/us-constitution.webp",
    imageAlt: "U.S. Constitution booklet",
    behanceUrl: "https://www.behance.net/gallery/78627225/The-US-Constitution",
  },
  {
    slug: "cetl-logo",
    title: "CETL Logo",
    category: "brand",
    description:
      "The Center for Excellence in Teaching and Learning is a faculty development center focused on professional education and staff support. That idea of excellence needed to come through in a new logo and the marketing pieces around it.",
    tools: ["Logo design", "Identity"],
    image: "/cards/cetl-logo.webp",
    imageAlt: "CETL logo and identity",
    behanceUrl: "https://www.behance.net/gallery/78627219/CETL-Logo",
  },
  {
    slug: "american-family-insurance",
    title: "American Family Insurance Ad",
    category: "motion",
    description:
      "Steps one through four of “how to dream fearlessly” play out in this video. Animation, storytelling, and soundtrack carry the advertisement. Digital assets were created in Adobe Illustrator and the animation was done in Adobe After Effects.",
    tools: ["Illustrator", "After Effects"],
    image: "/cards/american-family.webp",
    imageAlt: "American Family Insurance advertisement",
    behanceUrl:
      "https://www.behance.net/gallery/78627209/American-Family-Insurance-Ad",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
