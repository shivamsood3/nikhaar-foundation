export const site = {
  name: "Nikhaar Foundation",
  tagline: "Water, clean air, and children, close to the ground.",
  description:
    "Nikhaar Foundation works on water conservation, clean air, and the education and welfare of children in Delhi’s underserved neighbourhoods. Registered under 12A and 80G, with CSR-1 registration.",
  url: "https://www.nikhaarfoundation.org",
  email: "info@nikhaarfoundation.org",
  instagram: "https://www.instagram.com/nikhaarfoundationofficial/",
  instagramHandle: "@nikhaarfoundationofficial",
  csrNumber: "CSR00107287",
  pan: "AAGCN8863P",
  urn80g: "AAGCN8863PF20241",
} as const;

export const bank = {
  accountName: "Nikhaar Foundation",
  bankName: "IndusInd Bank",
  branch: "Defence Colony",
  accountNumber: "201004057261",
  ifsc: "INDB0000281",
  accountType: "Current",
} as const;

export const upi = {
  id: "9810254606@airtel",
  qrImage: "/images/upi-qr.jpg",
} as const;

export const nav = [
  { href: "/about", label: "About" },
  { href: "/our-work", label: "Our Work" },
  { href: "/impact", label: "Impact" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const stats = [
  {
    value: "3,000+",
    label: "people with water at their doorstep",
    note: "Indira Gandhi Camp, Kasturba Nagar, after we installed a community water pump.",
  },
  {
    value: "12A · 80G",
    label: "income tax registrations",
    note: "Individual donations to Nikhaar Foundation are eligible for tax deduction.",
  },
  {
    value: "CSR-1",
    label: "registered with the MCA",
    note: `Registration number ${site.csrNumber}, so companies can route CSR funds to our programmes.`,
  },
] as const;

export type Program = {
  slug: string;
  title: string;
  short: string;
  body: string;
  points: string[];
  image: string;
  imageAlt: string;
};

export const programs: Program[] = [
  {
    slug: "water",
    title: "Water conservation and access",
    short:
      "Awareness and on-ground action to protect the resource our communities can least afford to waste.",
    body: "Delhi loses enormous volumes of water to leaks, waste, and neglected infrastructure while entire settlements queue for hours at a single tanker. We work at both ends of that problem: campaigns that make ordinary households treat water as finite, and physical installations that put a reliable supply within reach of people who have never had one.",
    points: [
      "Community water pumps installed and handed over to residents",
      "The #DefendWater campaign, carrying the message that water access is a basic right",
      "Everyday conservation drives built around a simple idea: every drop counts",
    ],
    image: "/images/water-conservation.jpg",
    imageAlt: "A leaking tap spraying water against a wall",
  },
  {
    slug: "children",
    title: "Children’s education and welfare",
    short:
      "Learning support, creative outlets, and the basics of a safe, dignified childhood.",
    body: "Children in Delhi’s bastis are rarely short on ability. They are short on the things that let ability show: a quiet place to study, materials, encouragement, and adults who expect something of them. Our work with children is deliberately unglamorous and repetitive, because that is what actually moves a child forward.",
    points: [
      "Learning support and education drives run inside the communities we serve",
      "Painting and creative competitions that give children a stage and a reason to try",
      "Welfare basics, from essentials distribution to simply showing up consistently",
    ],
    image: "/images/childrens-welfare.jpg",
    imageAlt: "Children gathered at a Nikhaar Foundation education and welfare drive",
  },
  {
    slug: "air",
    title: "Clean air and environment",
    short:
      "From cracker-free Diwali drives with the Delhi Police to neighbourhood cleanups.",
    body: "Air quality in Delhi is not an abstraction. It is measured in hospital visits, missed school days, and shortened lives, and it falls hardest on the people who work outdoors and live in the least insulated homes. We push on the part of the problem that responds to persuasion and habit rather than policy alone.",
    points: [
      "The #MyRightToBreathe cracker-free Diwali campaign, run with the Delhi Police",
      "Neighbourhood waste collection and segregation drives",
      "Community cleanliness drives that clear litter from shared public spaces",
    ],
    image: "/images/cracker-free-diwali.jpg",
    imageAlt: "The #MyRightToBreathe cracker-free Diwali campaign with the Delhi Police",
  },
  {
    slug: "awareness",
    title: "Awareness and civic education",
    short:
      "Campaigns and workshops that turn complex civic issues into something people can act on.",
    body: "Most environmental messaging asks people to feel guilty and stops there. We would rather hand someone one specific thing they can do this week. Our campaigns are built to travel: simple language, local partners, and formats that work as well on a basti wall as they do on a phone screen.",
    points: [
      "Public campaigns designed and run with local institutions",
      "Workshops and competitions that bring residents into the work rather than at it",
      "Partnerships with the Delhi Police that give our campaigns reach and legitimacy",
    ],
    image: "/images/water-is-a-human-right.jpg",
    imageAlt: "Community members holding #DefendWater campaign signage",
  },
];

export type Campaign = {
  image: string;
  caption: string;
  tag: string;
};

export const campaigns: Campaign[] = [
  {
    image: "/images/water-conservation.jpg",
    tag: "Water",
    caption:
      "Every drop counts: raising awareness about water waste and the urgent need to conserve it.",
  },
  {
    image: "/images/water-is-a-human-right.jpg",
    tag: "Water",
    caption:
      "Water is a human right. Our #DefendWater messaging carried into the community.",
  },
  {
    image: "/images/water-pump-installed.jpg",
    tag: "Water",
    caption:
      "The water pump we gifted to Indira Gandhi Camp in Kasturba Nagar, bringing water door to door for around 3,000 people.",
  },
  {
    image: "/images/water-pump-community.jpg",
    tag: "Water",
    caption:
      "With residents of Indira Gandhi Camp after the pump went in. 3,000 people now have water at their doorstep.",
  },
  {
    image: "/images/childrens-welfare.jpg",
    tag: "Children",
    caption: "A children’s education and welfare drive with kids from the community.",
  },
  {
    image: "/images/painting-competition.jpg",
    tag: "Children",
    caption:
      "Awarding young talent at a painting competition held in association with the Delhi Police.",
  },
  {
    image: "/images/cracker-free-diwali.jpg",
    tag: "Clean air",
    caption:
      "The #MyRightToBreathe cracker-free Diwali campaign, run with the Delhi Police.",
  },
  {
    image: "/images/waste-segregation.jpg",
    tag: "Environment",
    caption: "A neighbourhood waste collection and segregation drive.",
  },
  {
    image: "/images/cleanliness-drive.jpg",
    tag: "Environment",
    caption: "A community cleanliness drive, clearing litter from shared spaces.",
  },
];

export const compliance = [
  {
    label: "Section 12A",
    detail:
      "Registered under Section 12A of the Income Tax Act, 1961, which exempts the foundation’s income from tax and confirms its status as a charitable organisation.",
  },
  {
    label: "Section 80G",
    detail:
      "Registered under Section 80G, so individual and corporate donors in India can claim a deduction on their contribution.",
  },
  {
    label: "CSR-1",
    detail: `Registered with the Ministry of Corporate Affairs under CSR-1, registration number ${site.csrNumber}. Companies can route mandated CSR spending to our programmes.`,
  },
];
