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
  /** Real photos (paths under /public) for projects with no video — shown
   * in place of the Placeholder hero/grid. First image is the hero, unless
   * stillsGrid is set. */
  stills?: string[];
  /** Render `stills` as a masonry grid at each image's natural aspect
   * ratio instead of a cropped hero + grid — for sets with mixed/uneven
   * source aspect ratios where cropping would cut off the content. */
  stillsGrid?: boolean;
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
      { role: "CHIEF CREATIVE OFFICER", name: "Matthew Woodhams-Roberts", group: "AGENCY — SPECIAL GROUP" },
      { role: "CHIEF CREATIVE OFFICER", name: "Dave Horton", group: "AGENCY — SPECIAL GROUP" },
      { role: "GROUP CREATIVE DIRECTOR", name: "Alice Blastorah", group: "AGENCY — SPECIAL GROUP" },
      { role: "GROUP CREATIVE DIRECTOR", name: "Josh Hacohen", group: "AGENCY — SPECIAL GROUP" },
      { role: "HEAD OF PRODUCTION", name: "Endy Hedman", group: "AGENCY — SPECIAL GROUP" },
      { role: "EXECUTIVE PRODUCER", name: "Antonio Burnett", group: "AGENCY — SPECIAL GROUP" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY — SPECIAL GROUP" },
      { role: "DIRECTOR", name: "Yann Demange", group: "PRODUCTION" },
      { role: "PRODUCTION CO.", name: "Park Pictures", group: "PRODUCTION" },
      { role: "EDITORIAL", name: "Work Editorial", group: "PRODUCTION" },
      { role: "EDITOR", name: "Neil Smith", group: "PRODUCTION" },
      { role: "VISUAL EFFECTS", name: "Blacksmith VFX", group: "PRODUCTION" },
      { role: "COLOR", name: "Trafik", group: "PRODUCTION" },
      { role: "MUSIC", name: "Soundtree Music", group: "PRODUCTION" },
      { role: "AUDIO POST", name: "Eleven Sound", group: "PRODUCTION" },
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
    // TODO: placeholder copy below (hook/ask/role/year) — confirm and
    // update once the real brief details are in hand.
    slug: "uber-eats-superbowl",
    title: "Uber Eats Super Bowl",
    client: "Uber Eats",
    category: "Campaign Film",
    year: "2026",
    hasVideo: true,
    hook: "A Super Bowl commercial for Uber Eats.",
    tilePlaceholder: "Uber Eats — Super Bowl campaign still",
    heroPlaceholder: "Hero still — Uber Eats Super Bowl",
    ask: "Uber Eats wanted a Super Bowl commercial that could stand out during the biggest night in football.",
    role: "Produced across multiple spots for the campaign.",
    work: [],
    credits: [
      { role: "CLIENT", name: "Uber Eats" },
      { role: "AGENCY", name: "Special Group" },
      { role: "TALENT", name: "Matthew McConaughey" },
      { role: "TALENT", name: "Sandra Amador" },
      { role: "PRODUCTION CO.", name: "Biscuit Filmworks", group: "PRODUCTION" },
      { role: "EDITORIAL", name: "Exile Edit", group: "PRODUCTION" },
      { role: "VFX / POST", name: "Pariah", group: "PRODUCTION" },
      { role: "COLOR", name: "Company 3", group: "PRODUCTION" },
      { role: "AUDIO POST", name: "Eleven Sound", group: "PRODUCTION" },
    ],
    gallery: ["Spot 1 still", "Spot 2 still", "Spot 3 still"],
    videoUrls: [
      "https://vimeo.com/manage/videos/1216591706",
      "https://vimeo.com/manage/videos/1216591707",
      "https://vimeo.com/manage/videos/1216591708",
    ],
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
      { role: "CHIEF CREATIVE OFFICER", name: "Alberto Ponte", group: "AGENCY — SOMEPLACE" },
      { role: "CHIEF CREATIVE OFFICER", name: "Ryan O'Rourke", group: "AGENCY — SOMEPLACE" },
      { role: "CREATIVE DIRECTOR", name: "Pedro Izique", group: "AGENCY — SOMEPLACE" },
      { role: "COPYWRITER", name: "Kevin Steele", group: "AGENCY — SOMEPLACE" },
      { role: "DESIGN DIRECTOR", name: "David Chathas", group: "AGENCY — SOMEPLACE" },
      { role: "EXECUTIVE PRODUCER", name: "Shelley Eisner", group: "AGENCY — SOMEPLACE" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY — SOMEPLACE" },
      { role: "DIRECTOR", name: "Yann Demange", group: "PRODUCTION" },
      { role: "PRODUCTION CO.", name: "Reset x Creators Inc.", group: "PRODUCTION" },
      { role: "DIRECTOR OF PHOTOGRAPHY", name: "Matias Boucard", group: "PRODUCTION" },
      { role: "EDITORIAL", name: "Spot Welders", group: "PRODUCTION" },
      { role: "EDITOR", name: "Robert Duffy", group: "PRODUCTION" },
      { role: "COLOR", name: "Trafik", group: "PRODUCTION" },
      { role: "VISUAL EFFECTS", name: "A52", group: "PRODUCTION" },
      { role: "MUSIC", name: "Soundtree Music", group: "PRODUCTION" },
      { role: "SOUND DESIGN / MIX", name: "Field Day Sound", group: "PRODUCTION" },
    ],
    gallery: ["On-set still", "Campaign still"],
    videoUrls: ["https://vimeo.com/1079014326"],
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
      { role: "CREATIVE DIRECTOR", name: "Pedro Izique", group: "AGENCY" },
      { role: "CREATIVE DIRECTOR", name: "Kevin Steele", group: "AGENCY" },
      { role: "EXECUTIVE CREATIVE DIRECTOR", name: "Caleb Jensen", group: "AGENCY" },
      { role: "EXECUTIVE CREATIVE DIRECTOR", name: "Craig Williams", group: "AGENCY" },
      { role: "COPYWRITER", name: "Ted Malenfant", group: "AGENCY" },
      { role: "ART DIRECTOR", name: "Ashley Veltre", group: "AGENCY" },
      { role: "DESIGN DIRECTOR", name: "Joan Comellas", group: "AGENCY" },
      { role: "DESIGNER", name: "Shantanu Sharma", group: "AGENCY" },
      { role: "DESIGNER", name: "Vivi Naranjo", group: "AGENCY" },
      { role: "DESIGNER", name: "Matt Blum", group: "AGENCY" },
      { role: "SENIOR PRODUCER", name: "Antonio Burnett", group: "AGENCY" },
      { role: "AGENCY POST PRODUCER", name: "Chris Lam", group: "AGENCY" },
      { role: "PRODUCTION CO.", name: "Iconoclast", group: "PRODUCTION" },
      { role: "DIRECTOR", name: "Alaska", group: "PRODUCTION" },
      { role: "DIRECTOR OF PHOTOGRAPHY", name: "Greig Fraser", group: "PRODUCTION" },
      { role: "DIRECTOR", name: "Fleur Fortuné", group: "PRODUCTION" },
      { role: "DIRECTOR OF PHOTOGRAPHY", name: "Roman Vasyanov", group: "PRODUCTION" },
      { role: "EDITOR", name: "Charlie Harvey", group: "PRODUCTION" },
      { role: "MUSIC", name: "Eve — \"Who's That Girl\"", group: "PRODUCTION" },
    ],
    gallery: ["On-set still", "Athlete portrait", "Campaign still"],
    videoUrls: [
      "https://vimeo.com/854155767",
      "https://vimeo.com/845080598",
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
    videoUrls: [
      "https://vimeo.com/817998639",
      "https://vimeo.com/737717529",
    ],
    press: [
      {
        label: "Ad Age",
        url: "https://adage.com/article/marketing-news-strategy/nike-resurrects-spike-lees-mars-blackmon-50th-anniversary-campaign/2417321",
      },
    ],
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
      { role: "CREATIVE DIRECTOR", name: "Alberto Ponte", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "CREATIVE DIRECTOR", name: "Ryan O'Rourke", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "ART DIRECTOR", name: "Jon Barco", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "COPYWRITER", name: "Jordan Dinwiddie", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "DESIGNER", name: "Joan Comellas", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "SOCIAL COPYWRITER", name: "Andrew Chhour", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "SOCIAL COPYWRITER", name: "Jenny Vu", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "SOCIAL ART DIRECTOR", name: "Lee Jennings", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "SENIOR PRODUCER", name: "Emily Knight", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY — WIEDEN+KENNEDY" },
      { role: "DIRECTOR", name: "Payman Benz", group: "PRODUCTION" },
      { role: "PRODUCTION CO.", name: "Gifted Youth", group: "PRODUCTION" },
      { role: "PHOTOGRAPHER", name: "João Canziani", group: "PRODUCTION" },
      { role: "3D OOH", name: "BCN Visuals", group: "PRODUCTION" },
    ],
    gallery: ["On-set still", "Product still"],
    videoUrls: [
      "https://vimeo.com/manage/videos/818046904",
      "https://vimeo.com/manage/videos/818046795",
    ],
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
      { role: "COPYWRITER", name: "Jordan Renee", group: "AGENCY" },
      { role: "ART DIRECTOR", name: "Whitney Downing", group: "AGENCY" },
      { role: "SENIOR PRODUCER", name: "Emily Knight", group: "AGENCY" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY" },
      { role: "EDITOR", name: "Jasmine \"Mac\" Mccullough", group: "PRODUCTION" },
    ],
    gallery: ["Archival still", "Interview still"],
    videoUrls: ["https://vimeo.com/818004204"],
  },
  {
    slug: "ea-fc-24",
    title: "Football is Yours",
    client: "EA FC 24",
    category: "Campaign Film",
    year: "2023",
    hasVideo: true,
    hook: "A global campaign for EA's flagship football title, fronted by Haaland, Bellingham, and Vinícius Júnior.",
    tilePlaceholder: "EA FC 24 — Football is Yours still",
    heroPlaceholder: "Hero still — EA FC 24",
    ask: "Launch EA FC 24 with a campaign that felt like the global sport itself, not just the game.",
    role: "Produced the shoot across Manchester and Madrid, coordinating talent logistics and post delivery.",
    work: [
      "Coordinated talent across multiple markets",
      "Managed shoot logistics across Manchester and Madrid",
      "Oversaw post schedule through global delivery",
    ],
    credits: [
      { role: "CLIENT", name: "EA Sports" },
      { role: "TALENT", name: "Erling Haaland" },
      { role: "TALENT", name: "Jude Bellingham" },
      { role: "TALENT", name: "Vinícius Júnior" },
      { role: "CREATIVE", name: "Tim", group: "AGENCY" },
      { role: "CREATIVE", name: "Stefan", group: "AGENCY" },
      { role: "SENIOR PRODUCER", name: "Shelley Eisner", group: "AGENCY" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY" },
      { role: "DIRECTOR", name: "Nick Ball", group: "PRODUCTION" },
      { role: "PRODUCTION CO.", name: "MJZ", group: "PRODUCTION" },
      { role: "DIRECTOR OF PHOTOGRAPHY", name: "Lachlan Milne", group: "PRODUCTION" },
    ],
    gallery: ["On-set still", "Campaign still"],
    videoUrls: ["https://vimeo.com/manage/videos/1216594629"],
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
      { role: "CREATIVE", name: "Jim Riswold", group: "AGENCY" },
      { role: "CREATIVE", name: "Hal Curtis", group: "AGENCY" },
      { role: "EP", name: "Nicole Kaptur", group: "AGENCY" },
      { role: "PRODUCER", name: "Chris Lam", group: "AGENCY" },
      { role: "EDITOR", name: "Peter Wiedensmith", group: "PRODUCTION" },
    ],
    gallery: ["On-set still", "Campaign still"],
    videoUrls: ["https://vimeo.com/814046748"],
  },
  {
    slug: "nike-superbowl-reactive",
    title: "Super Bowl Reactive",
    client: "Nike",
    category: "OOH Activation",
    year: "2022",
    hasVideo: false,
    hook: "The first live test of Nike's \"Work in Progress\" system — reactive billboards up within hours of the Rams' AFC Championship win.",
    tilePlaceholder: "Nike — Super Bowl Reactive billboard still",
    heroPlaceholder: "Hero still — Nike Super Bowl Reactive",
    ask: "Prove the \"Work in Progress\" system could respond in real time — turning a live sports outcome into on-brand OOH before the moment passed.",
    role: "Produced a reactive OOH activation across Inglewood billboards near SoFi Stadium, translating the design system's motion templates into real-world signage in real time.",
    work: [
      "Coordinated billboard and digital signage placements around SoFi Stadium and the surrounding Inglewood corridor",
      "Turned the \"Work in Progress\" motion templates into install-ready OOH creative within hours of the final whistle",
      "Tested the system's turnaround speed against a live, unscripted sports outcome",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: [
      "Billboard — SoFi Stadium corridor",
      "Digital signage — Rams win",
      "In-store screen — Nike x Rams",
    ],
    stills: [
      "/stills/nike-superbowl-reactive/sbr-1.jpg",
      "/stills/nike-superbowl-reactive/sbr-2.jpg",
      "/stills/nike-superbowl-reactive/sbr-3.jpg",
      "/stills/nike-superbowl-reactive/sbr-4.jpg",
      "/stills/nike-superbowl-reactive/sbr-5.jpg",
      "/stills/nike-superbowl-reactive/sbr-6.jpg",
    ],
  },
  {
    slug: "nike-work-in-progress",
    title: "Work In Progress",
    client: "Nike",
    category: "Design System",
    year: "2022",
    hasVideo: false,
    hook: "A scalable motion design system that let Nike react to sports moments in real time.",
    tilePlaceholder: "Nike — Work In Progress design system still",
    heroPlaceholder: "Hero still — Nike Work In Progress design system",
    ask: "Nike needed the fastest, most scalable way to turn a single sports moment into on-brand social content — distributable across every team and region.",
    role: "Produced a comprehensive motion design system with a team of creatives, turning static images into dynamic posts that any market could deploy in real time.",
    work: [
      "Built a motion component system distributable across teams and regions",
      "Turned static sports imagery into on-brand dynamic posts within minutes of a live moment",
      "Deployed the system across the Super Bowl, NBA Finals, and other major sports moments throughout the year",
    ],
    credits: [
      { role: "CLIENT", name: "Nike" },
      { role: "PRODUCER", name: "Chris Lam" },
    ],
    gallery: [
      "Motion system — tennis",
      "Motion system — golf",
      "Motion system — Nike swoosh mark",
    ],
    stills: [
      "/stills/nike-work-in-progress/wip-1.jpg",
      "/stills/nike-work-in-progress/wip-2.jpg",
      "/stills/nike-work-in-progress/wip-3.jpg",
      "/stills/nike-work-in-progress/wip-4.jpg",
      "/stills/nike-work-in-progress/wip-5.jpg",
      "/stills/nike-work-in-progress/wip-6.jpg",
      "/stills/nike-work-in-progress/wip-7.jpg",
      "/stills/nike-work-in-progress/wip-8.jpg",
    ],
    stillsGrid: true,
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
      { role: "CREATIVE STRATEGIST", name: "Janelle Wallace" },
      { role: "PRODUCER", name: "Chris Lam" },
      { role: "EDITOR", name: "Danielle Sclafani" },
    ],
    gallery: ["On-set still", "Campaign still"],
    videoUrls: ["https://vimeo.com/772727582"],
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
    credits: [
      { role: "COPYWRITER", name: "Titania Tran" },
      { role: "ART DIRECTOR", name: "Brad Trost" },
      { role: "PRODUCER", name: "Mimi Munoz" },
      { role: "PRODUCER", name: "Byron Oshiro" },
      { role: "POST PRODUCER", name: "Chris Lam" },
      { role: "DIRECTOR", name: "Loren Denis", group: "PRODUCTION" },
      { role: "PRODUCTION CO.", name: "Superprime", group: "PRODUCTION" },
      { role: "POST", name: "JOINT", group: "PRODUCTION" },
    ],
    gallery: ["Film still 1", "Film still 2"],
    videoUrls: ["https://vimeo.com/829577506"],
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
