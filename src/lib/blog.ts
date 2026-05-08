export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  body: { type: "p" | "h2" | "h3" | "pull"; text: string }[];
};

export const categories = [
  "All",
  "Cardiovascular",
  "Longevity Science",
  "Diagnostics",
  "Hormones & Metabolism",
  "Lifestyle",
] as const;

export const posts: BlogPost[] = [
  {
    slug: "why-your-longevity-doctor-should-be-a-cardiologist",
    title: "Why Your Longevity Doctor Should Be a Cardiologist",
    excerpt:
      "The longevity field has exploded with practitioners from many backgrounds. Most underweight the system that drives the most preventable cause of death — and the one whose interpretation most depends on training.",
    category: "Longevity Science",
    date: "May 2026",
    author: "Dr. Steven Mehta",
    readTime: "6 min read",
    body: [
      { type: "p", text: "Longevity medicine has, in the last few years, gone from a fringe interest to a category. Clinics have multiplied. Memberships have proliferated. The promises have grown. And so, fairly, has the public's confusion about what makes one practice meaningfully different from another." },
      { type: "p", text: "There is a quiet, structural answer that doesn't get nearly enough attention: the difference between practices is, very often, the training of the physician — and in particular, whether that physician spent years inside the cardiovascular system before stepping into longevity work." },
      { type: "h2", text: "The cardiovascular system as health infrastructure" },
      { type: "p", text: "It is tempting to treat cardiovascular health as one pillar among several — heart, brain, metabolism, hormones, body composition — like a row of equally weighted pillars under a roof. That is a useful simplification. It is also a clinically misleading one." },
      { type: "p", text: "The cardiovascular system is not a pillar. It is the substrate. Vascular integrity is what allows every other organ system to function. The brain runs on cerebrovascular flow. Kidney health is largely vascular health expressed downstream. Sexual function reflects endothelial function in tissues exquisitely sensitive to it. Metabolic disease and vascular inflammation reinforce each other in a tight loop. Even cellular aging — at the level of the mitochondrion — is profoundly shaped by how efficiently each cell receives oxygen, nutrients, and signaling molecules through the bloodstream." },
      { type: "p", text: "When the cardiovascular system deteriorates, everything downstream follows. Which is to say: the most decisive thing a longevity physician can do for a patient's healthspan is intervene early in the cardiovascular system itself. Everything else is amplified or limited by what is happening in the arteries." },
      { type: "pull", text: "When the cardiovascular system deteriorates, everything downstream follows. Which is to say: the most decisive thing a longevity physician can do for a patient's healthspan is intervene early in the cardiovascular system itself." },
      { type: "h2", text: "What an interventional cardiologist sees that others don't" },
      { type: "p", text: "Most longevity physicians come from backgrounds in family medicine, emergency medicine, or naturopathic training. They are competent, well-meaning, and capable of running thoughtful protocols. They also approach the cardiovascular system from the outside in — through panels of numbers and population guidelines designed for risk stratification, not for individual interpretation." },
      { type: "p", text: "An interventional cardiologist comes at the same data from the inside out. After years of placing stents, opening blocked arteries, and treating heart attacks in real time, the cardiologist has internalized something the panels can only approximate: what arterial walls actually look like at different stages of disease. What the numbers feel like when they are quietly heading somewhere bad. Which patterns are reassuring on paper and unsettling in context." },
      { type: "p", text: "The same lipid panel, ordered by two physicians with these different backgrounds, is read very differently. One sees cholesterol numbers. The other sees the arterial wall." },
      { type: "h2", text: "The credentialing gap in longevity medicine" },
      { type: "p", text: "There is also a more practical, less philosophical issue: clinical authority. Modern longevity protocols increasingly involve agents — peptides, hormone therapies, GLP-1 medications, off-label cardiovascular drugs — whose interactions with the cardiovascular system are non-trivial. The supervising physician's training shapes whether those interactions are anticipated or discovered after the fact." },
      { type: "p", text: "A board-certified cardiologist has the credentials to interpret advanced cardiac imaging, prescribe and monitor cardiovascular medications, and manage the complex polypharmacy that real longevity protocols can involve. Many functional medicine and naturopathic providers offer valuable services. They operate, however, with a fundamentally different scope of training — particularly when the cardiovascular system is the substrate beneath the protocol." },
      { type: "p", text: "This is not a credentials argument for its own sake. It is a clinical-safety argument. When the protocol is good, the credentials don't matter much. When the protocol drifts into edges — and over a decade of care, every protocol does — the credentials are what catch the drift." },
      { type: "h2", text: "Why this matters for patients" },
      { type: "p", text: "Patients evaluating a longevity practice are usually told to look at the menu of services, the diagnostic panel, the technology, the office. Those things matter. They matter less than the question of who is actually responsible for the decisions that will shape your cardiovascular trajectory over the next thirty years." },
      { type: "p", text: "Longevity medicine, done well, is mostly cardiovascular medicine done early. The earlier it is done, the more the work shifts from rescue to prevention — and prevention requires a physician who can read the signals at the stage where they are still subtle. That is what cardiology training, applied to longevity, actually offers." },
      { type: "p", text: "When you choose a longevity physician, choose one who has spent time inside the system that drives the disease longevity medicine exists to prevent. The technology will follow. The credentials will not." },
    ],
  },
  {
    slug: "what-your-coronary-calcium-score-actually-means",
    title: "What Your Coronary Calcium Score Actually Means",
    excerpt:
      "It is one of the most useful single tests in preventive cardiology — and one of the most misinterpreted. A practical guide to the numbers, the limits, and what comes next.",
    category: "Cardiovascular",
    date: "April 2026",
    author: "Dr. Steven Mehta",
    readTime: "5 min read",
    body: [
      { type: "p", text: "A short post placeholder for the SEO index — full article forthcoming." },
    ],
  },
  {
    slug: "apob-vs-ldl-what-cardiologists-actually-measure",
    title: "ApoB vs LDL — What Cardiologists Actually Measure",
    excerpt:
      "The standard lipid panel tells one story. A more honest answer about cardiovascular risk lives a level deeper. Why ApoB has quietly become the metric to watch.",
    category: "Diagnostics",
    date: "April 2026",
    author: "Dr. Steven Mehta",
    readTime: "5 min read",
    body: [
      { type: "p", text: "A short post placeholder for the SEO index — full article forthcoming." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
