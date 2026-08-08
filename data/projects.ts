export type Credit = {
  role: string;
  name: string;
  /** Optional section heading this credit falls under (e.g. "AGENCY",
   * "PRODUCTION"). Credits without a group render in the plain top row —
   * existing projects with a flat credits list are unaffected. */
  group?: string;
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  hasVideo: boolean;
  /** One-line subhead shown under the title on the project hero. */
  hook: string;
  /** The brief — what the client/agency asked for. */
  ask: string;
  /** What Chris actually did on it. */
  role: string;
  /** Supporting bullet detail — not shown on the page yet, kept for future use. */
  work: string[];
  credits: Credit[];
  /** Gallery captions — not shown on the page currently, kept for future use. */
  gallery: string[];
  /** Caption for the homepage grid tile placeholder. */
  tilePlaceholder: string;
  /** Caption for the project-page hero placeholder. */
  heroPlaceholder: string;
  /** Links to the real film(s) on Vimeo, when they exist. Usually one, but
   * a campaign can ship as several cuts/spots. */
  videoUrls?: string[];
  /** Outside coverage — trade press, articles. */
  press?: { label: string; url: string }[];
};

// Source of truth for every project on the site. Add a new object to this
// array to add a project — it appears on the homepage grid and gets a
// /work/<slug> page automatically, in array order.
export const projects: Project[] = [
  {
    slug: "footlocker-black-white",
    title: "It Always Will Be Foot Locker",
    client: "Foot Locker",
    category: "Branded Film",
    year: "2026",
    hasVideo: true,
    hook: "A sneaker culture time machine — from the playgrounds of the '80s to the game today.",
    tilePlaceholder: "Foot Locker — still from \"It Always Will Be Foot Locker\"",
    heroPlaceholder: "Hero still — \"It Always Will Be Foot Locker\"",
    ask: "Foot Locker asked for a film that could hold four decades of sneaker culture in one piece — legends, courts, and colorways — without feeling like a nostalgia reel.",
    role: "Line produced the project from casting through delivery: assembled the callback list, ran clearance strategy across every archival element, and kept a fast-moving production on schedule and on budget.",
    work: [
      "Ran casting and callbacks for era-specific talent standing in for figures including Moses Malone, Vince Carter, LeBron James, Dorothy, and AND1's crew",
      "Negotiated clearance across NBA Properties, an athlete estate, and licensors for an iconic film prop",
      "Cleared archival audio and footage spanning four decades of basketball culture",
      "Coordinated wardrobe, set, and props to match period-accurate detail across every era",
      "Managed legal and licensing timelines in parallel with an aggressive post schedule",
    ],
    credits: [
      { role: "CLIENT", name: "Foot Locker" },
      { role: "CHIEF CREATIVE OFFICER", name: "Alberto Ponte", group: "AGENCY — SOMEPLACE" },
      { role: "CHIEF CREATIVE OFFICER", name: "Ryan O'Rourke", group: "AGENCY — SOMEPLACE" },
      { role: "CREATIVE DIRECTOR", name: "Kevin Steele", group: "AGENCY — SOMEPLACE" },
      { role: "COPYWRITER", name: "Adam Crouch", group: "AGENCY — SOMEPLACE" },
      { role: "ART DIRECTOR", name: "Kyle Chin", group: "AGENCY — SOMEPLACE" },
      { role: "EXECUTIVE PRODUCER", name: "Shelley Eisner", group: "AGENCY — SOMEPLACE" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY — SOMEPLACE" },
      { role: "DESIGNER", name: "Arthur Daraujo", group: "AGENCY — SOMEPLACE" },
      { role: "DIRECTOR", name: "Kim Gehrig", group: "PRODUCTION" },
      { role: "PRODUCTION CO.", name: "Somesuch", group: "PRODUCTION" },
      { role: "EDITORIAL", name: "Trim Editorial", group: "PRODUCTION" },
      { role: "EDITOR", name: "Tom Lindsay", group: "PRODUCTION" },
      { role: "COLOR", name: "Trafik", group: "PRODUCTION" },
      { role: "VISUAL EFFECTS", name: "Parliament", group: "PRODUCTION" },
      { role: "MUSIC", name: "Soundtree Music", group: "PRODUCTION" },
      { role: "SOUND DESIGN / MIX", name: "Field Day Sound", group: "PRODUCTION" },
    ],
    gallery: [
      "Archival still — 1980s courts",
      "Casting callback session",
      "On-set — prop clearance detail",
      "Archival still — present day",
    ],
    videoUrls: ["https://vimeo.com/manage/videos/1216591120"],
  },
  {
    slug: "fox-sports-fifa26",
    title: "FIFA World Cup '26 Campaign",
    client: "Fox Sports",
    category: "Multi-Spot Campaign",
    year: "2026",
    hasVideo: true,
    hook: "A multi-spot campaign built to carry Fox Sports through the biggest tournament on earth.",
    tilePlaceholder: "Fox Sports — FIFA World Cup '26 campaign still",
    heroPlaceholder: "Hero still — FIFA World Cup '26 campaign",
    ask: "Fox Sports needed a flexible campaign system — multiple spots, one voice — built to flight across the full arc of the tournament.",
    role: "Owned post-production end to end across every spot: editorial, VFX and finishing, color, sound mix, and music.",
    work: [
      "Managed editorial across multiple concurrent cuts against a compressed broadcast calendar",
      "Oversaw VFX and finishing vendors to deliver a consistent look across every spot",
      "Directed the color pipeline from dailies through final grade",
      "Supervised sound mix and music licensing to lock a unified sonic identity for the campaign",
      "Kept every deliverable on spec across broadcast, digital, and social versions",
    ],
    credits: [
      { role: "CLIENT", name: "Fox Sports" },
      { role: "EDITORIAL", name: "TBD", group: "PRODUCTION" },
      { role: "VFX / FINISHING", name: "TBD", group: "PRODUCTION" },
      { role: "COLOR", name: "TBD", group: "PRODUCTION" },
      { role: "SOUND MIX", name: "TBD", group: "PRODUCTION" },
      { role: "PRODUCER", name: "Chris Lam", group: "PRODUCTION" },
    ],
    gallery: [
      "Broadcast spot — still 1",
      "Broadcast spot — still 2",
      "Color grade reference",
      "Finishing / VFX detail",
    ],
    videoUrls: [
      "https://vimeo.com/manage/videos/1216591709",
      "https://vimeo.com/manage/videos/1216591735",
    ],
  },
  {
    slug: "nike-50th-anniversary",
    title: "Seen It All",
    client: "Nike",
    category: "Branded Film",
    year: "2022",
    hasVideo: true,
    hook: "Spike Lee reprises Mars Blackmon for Nike's 50th — its most iconic ad character, brought back to point at what's next.",
    tilePlaceholder: 'Nike — "Seen It All" still',
    heroPlaceholder: 'Hero still — "Seen It All"',
    ask: "For its 50th anniversary, Nike wanted to honor its most iconic advertising while hinting at where the brand is headed next.",
    role: "Produced \"Seen It All,\" a minute-long film that brought Spike Lee back as Mars Blackmon — the \"She's Gotta Have It\" character who fronted Nike's marketing in the late '80s — for the first time in decades.",
    work: [],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "CREATIVE DIRECTOR", name: "Ryan O'Rourke", group: "AGENCY" },
      { role: "CREATIVE DIRECTOR", name: "Alberto Ponte", group: "AGENCY" },
      { role: "COPYWRITER", name: "Kevin Steele", group: "AGENCY" },
      { role: "ART DIRECTOR", name: "Pedro Izique", group: "AGENCY" },
      { role: "EP", name: "Byron Oshiro", group: "AGENCY" },
      { role: "SENIOR PRODUCER", name: "Antonio Burnett", group: "AGENCY" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY" },
    ],
    gallery: ["Archival still", "On-set still", "Finishing detail"],
    videoUrls: ["https://vimeo.com/817998639"],
    press: [
      {
        label: "Ad Age",
        url: "https://adage.com/article/marketing-news-strategy/nike-resurrects-spike-lees-mars-blackmon-50th-anniversary-campaign/2417321",
      },
    ],
  },
  {
    slug: "nike-womens-world-cup",
    title: "Women's World Cup",
    client: "Nike",
    category: "Campaign Film",
    year: "2023",
    hasVideo: true,
    hook: "A campaign built around the athletes carrying the women's game into its biggest moment.",
    tilePlaceholder: "Nike — Women's World Cup still",
    heroPlaceholder: "Hero still — Nike Women's World Cup",
    ask: "Build a campaign that met the scale of the tournament while spotlighting individual athletes on the roster.",
    role: "Produced across talent coordination, shoot logistics, and post delivery.",
    work: [
      "Coordinated athlete availability across a compressed shoot calendar",
      "Managed multi-market delivery requirements",
      "Oversaw post schedule across cut, color, and mix",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["On-set still", "Athlete portrait", "Campaign still"],
    videoUrls: ["https://vimeo.com/854155767"],
  },
  {
    slug: "nike-resolutions",
    title: "Resolutions",
    client: "Nike",
    category: "Campaign Film",
    year: "2021",
    hasVideo: true,
    hook: "A New Year's campaign about showing up, not just saying you will.",
    tilePlaceholder: "Nike — Resolutions campaign still",
    heroPlaceholder: "Hero still — Nike Resolutions",
    ask: "Land a January campaign moment that felt honest rather than aspirational cliché.",
    role: "Produced the shoot and post process end to end.",
    work: [
      "Cast and booked talent across multiple locations",
      "Managed production schedule across a tight turnaround",
      "Supervised post through final delivery",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["On-set still", "Campaign still"],
    videoUrls: ["https://vimeo.com/772727582"],
  },
  {
    slug: "nike-serena-legacy",
    title: "Serena Legacy",
    client: "Nike",
    category: "Branded Film",
    year: "2022",
    hasVideo: true,
    hook: "A tribute film honoring one of the greatest careers in sport.",
    tilePlaceholder: "Nike — Serena Legacy still",
    heroPlaceholder: "Hero still — Serena Legacy",
    ask: "Honor Serena Williams' career in a film worthy of her legacy, balancing archival history with present-day reflection.",
    role: "Produced clearance strategy and post-production for the film.",
    work: [
      "Cleared archival footage and photography across her career",
      "Coordinated interview shoot logistics",
      "Managed editorial and finishing schedule",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["Archival still", "Interview still"],
    videoUrls: ["https://vimeo.com/818004204"],
  },
  {
    slug: "nike-undefeated",
    title: "Undefeated",
    client: "Nike",
    category: "Branded Film",
    year: "2021",
    hasVideo: true,
    hook: "A collaboration film built on the culture of Undefeated and Nike.",
    tilePlaceholder: "Nike x Undefeated — campaign still",
    heroPlaceholder: "Hero still — Nike Undefeated",
    ask: "Capture the collaboration's cultural weight for a core sneaker audience.",
    role: "Produced the shoot and managed post delivery.",
    work: [
      "Coordinated talent and location logistics",
      "Managed vendor relationships for product and set",
      "Oversaw post schedule through delivery",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["On-set still", "Product still"],
    videoUrls: ["https://vimeo.com/user/88668378/folder/15809583"],
  },
  {
    slug: "mlb-baseball-is-something-else",
    title: "Baseball is Something Else",
    client: "MLB",
    category: "Campaign Film",
    year: "2023",
    hasVideo: true,
    hook: "A campaign built to make baseball feel young again.",
    tilePlaceholder: "MLB — Baseball is Something Else still",
    heroPlaceholder: "Hero still — Baseball is Something Else",
    ask: "Reframe baseball for a younger, culture-forward audience without losing the sport's core fans.",
    role: "Produced casting, shoot logistics, and post-production.",
    work: [
      "Cast athlete and talent roster across the campaign",
      "Managed multi-location shoot logistics",
      "Supervised editorial, color, and mix through delivery",
    ],
    credits: [
      { role: "CLIENT", name: "MLB" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["On-set still", "Campaign still"],
    videoUrls: ["https://vimeo.com/814046748"],
  },
  {
    slug: "nike-work-in-progress",
    title: "Work In Progress",
    client: "Nike",
    category: "Branded Film",
    year: "2020",
    hasVideo: true,
    hook: "A film about the process behind the product, not just the finished shoe.",
    tilePlaceholder: "Nike — Work In Progress still",
    heroPlaceholder: "Hero still — Nike Work In Progress",
    ask: "Show the craft and iteration behind Nike product development.",
    role: "Produced the shoot and post schedule.",
    work: [
      "Coordinated access and logistics at design and development facilities",
      "Managed interview and b-roll shoot days",
      "Oversaw editorial through delivery",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["Facility still", "Product development still"],
  },
  {
    slug: "nike-superbowl-reactive",
    title: "Super Bowl Reactive",
    client: "Nike",
    category: "Real-Time Content",
    year: "2022",
    hasVideo: true,
    hook: "Real-time creative built to react to the biggest night in football.",
    tilePlaceholder: "Nike — Super Bowl Reactive still",
    heroPlaceholder: "Hero still — Nike Super Bowl Reactive",
    ask: "Stand up a reactive content pipeline capable of turning around creative live during the broadcast.",
    role: "Produced the reactive production pipeline and live-night operations.",
    work: [
      "Built a rapid-turnaround editorial and design pipeline",
      "Managed live-night approvals and delivery",
      "Coordinated a standby crew and asset pipeline",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["Live-night still", "Reactive content still"],
  },
  {
    slug: "my-sister",
    title: "My Sister",
    client: "Independent",
    category: "Short Film",
    year: "2023",
    hasVideo: true,
    hook: "A personal short film.",
    tilePlaceholder: "My Sister — film still",
    heroPlaceholder: "Hero still — My Sister",
    ask: "An independent, personal project produced outside of agency work.",
    role: "Produced the film from development through post.",
    work: [
      "Assembled crew and cast",
      "Managed production schedule and logistics",
      "Oversaw post through final cut",
    ],
    credits: [{ role: "PRODUCER", name: "Chris Lam" }],
    gallery: ["Film still 1", "Film still 2"],
    videoUrls: ["https://vimeo.com/829577506"],
  },
  {
    slug: "ea-fc-24",
    title: "Football is Yours",
    client: "EA FC 24",
    category: "Campaign Film",
    year: "2023",
    hasVideo: true,
    hook: "A global campaign for EA's flagship football title.",
    tilePlaceholder: "EA FC 24 — Football is Yours still",
    heroPlaceholder: "Hero still — EA FC 24",
    ask: "Launch EA FC 24 with a campaign that felt like the global sport itself, not just the game.",
    role: "Produced shoot logistics and post-production coordination.",
    work: [
      "Coordinated talent across multiple markets",
      "Managed shoot logistics across locations",
      "Oversaw post schedule through global delivery",
    ],
    credits: [
      { role: "CLIENT", name: "EA Sports" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["On-set still", "Campaign still"],
  },
  {
    slug: "panw",
    title: "PANW",
    client: "Palo Alto Networks",
    category: "Brand Film",
    year: "2023",
    hasVideo: false,
    hook: "A brand film for one of cybersecurity's largest names.",
    tilePlaceholder: "PANW — brand film still",
    heroPlaceholder: "Hero still — PANW",
    ask: "Translate a complex enterprise cybersecurity brand into a clear, human brand film.",
    role: "Produced the shoot and post-production process.",
    work: [
      "Managed shoot logistics and crew",
      "Coordinated subject matter expert interviews",
      "Supervised post through delivery",
    ],
    credits: [
      { role: "CLIENT", name: "Palo Alto Networks" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["On-set still", "Interview still"],
  },
  {
    slug: "lululemon-no-holding-back",
    title: "No Holding Back",
    client: "Lululemon",
    category: "Campaign Film",
    year: "2024",
    hasVideo: true,
    hook: "A campaign about training without apology.",
    tilePlaceholder: "Lululemon — No Holding Back still",
    heroPlaceholder: "Hero still — No Holding Back",
    ask: "Build a campaign around Lululemon athletes that pushed past the brand's usual restraint.",
    role: "Produced casting, shoot logistics, and post delivery.",
    work: [
      "Cast athlete talent across the campaign",
      "Managed multi-day shoot logistics",
      "Oversaw editorial, color, and mix through delivery",
    ],
    credits: [
      { role: "CLIENT", name: "Lululemon" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["On-set still", "Campaign still"],
    videoUrls: ["https://vimeo.com/1079014326"],
  },
  {
    // TODO: placeholder copy below (hook/ask/role/category/year) — confirm
    // and update once the real brief details are in hand.
    slug: "uber-eats-superbowl",
    title: "Uber Eats Super Bowl",
    client: "Uber Eats",
    category: "Real-Time Content",
    year: "2026",
    hasVideo: true,
    hook: "Reactive creative built to ride the biggest night in football.",
    tilePlaceholder: "Uber Eats — Super Bowl campaign still",
    heroPlaceholder: "Hero still — Uber Eats Super Bowl",
    ask: "Uber Eats needed a reactive content pipeline that could turn around creative live around Super Bowl weekend.",
    role: "Produced the reactive production pipeline across multiple spots.",
    work: [],
    credits: [
      { role: "CLIENT", name: "Uber Eats" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: ["Spot 1 still", "Spot 2 still", "Spot 3 still"],
    videoUrls: [
      "https://vimeo.com/manage/videos/1216591706",
      "https://vimeo.com/manage/videos/1216591707",
      "https://vimeo.com/manage/videos/1216591708",
    ],
  },
];

// Shown on the About page.
export const capabilities = [
  "Line Producing",
  "Casting & Talent",
  "Clearance & Licensing Strategy",
  "Post-Production Management",
  "Location & Studio Production",
  "Vendor & Crew Management",
];

export function getProjects(): Project[] {
  return projects;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
