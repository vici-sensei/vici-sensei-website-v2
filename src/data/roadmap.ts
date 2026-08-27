export interface RoadmapItem {
  badge: string;
  icon: string;
  accent: string;
  title: string;
  description: string;
  current?: boolean;
  destination?: boolean;
  /** Always expanded, never collapses — pick a few key milestones to keep visible by default. */
  pinnedOpen?: boolean;
}

export const roadmapItems: RoadmapItem[] = [
  {
    badge: '2010 - 2015',
    icon: 'mdi:flower',
    accent: '#e52b2b',
    title: 'The Spark',
    description:
      'Fell completely in love with anime and watched <span class="highlight">hundreds of anime series</span> even before beginning my journey.',
  },
  {
    badge: '2015',
    icon: 'mdi:lightbulb-on-outline',
    accent: '#ff4a5a',
    title: 'Going Self-Taught',
    description:
      'I tried attending all sorts of Japanese classes at first, but figuring out the pace was too slow for my motivated self, I quit each one after a few weeks. I decided to learn on my own, combining internet research with <span class="highlight">daily real-world conversations with native speakers</span>.',
  },
  {
    badge: '2016',
    icon: 'mdi:airplane',
    accent: '#ff007a',
    title: 'The Japan Breakthrough',
    description:
      'At the age of 18, I was blessed with a gift that changed everything: <span class="highlight">my first trip to Japan</span>. I swore to myself I would study even harder and go there again.',
  },
  {
    badge: '2018',
    icon: 'mdi:briefcase-outline',
    accent: '#9d00ff',
    title: 'The Tourist Guide',
    description:
      'Started working as a <span class="highlight">tour guide and interpreter</span> for Japanese visitors, putting my conversational skills to the ultimate live test.',
  },
  {
    badge: '2018',
    icon: 'mdi:human-male-board',
    accent: '#0059ff',
    title: 'Starting as a Teacher',
    description:
      '<span class="highlight">Started teaching Japanese</span> in my spare time, helping others on their journey while continuing my own.',
  },
  {
    badge: '2019',
    icon: 'mdi:television-classic',
    accent: '#00bfff',
    title: 'The "Tokyo TV" Moment',
    description:
      "Having my Japanese level acknowledged by the tourism agency I was collaborating with, I was recommended for a Tokyo TV interview and thus was <span class=\"highlight\">featured on Japan's national television</span>.",
  },
  {
    badge: '2020',
    icon: 'mdi:laptop',
    accent: '#00e5bc',
    title: 'The IT Stage',
    description:
      'Started working as a software programmer (and continued for 3 years), during which I <span class="highlight">directly collaborated with native Japanese speakers</span> on software development projects.',
  },
  {
    badge: '2021',
    icon: 'mdi:school-outline',
    accent: '#00ff55',
    title: 'The Academic Reality Check',
    description:
      "<span class=\"highlight\">Finished a Bachelor's degree in Japanese and English linguistics</span>, which unfortunately didn't contribute whatsoever to improving my Japanese. It completely confirmed to me that the traditional academic system is not by any means the ideal choice.",
  },
  {
    badge: '2023',
    icon: 'mdi:earth',
    accent: '#e6b800',
    title: 'Going Full-Time',
    description:
      'I started my own company, transitioning to making a <span class="highlight">full-time living solely by teaching Japanese online</span>.',
  },
  {
    badge: '2025',
    icon: 'mdi:cancel',
    accent: '#ffd200',
    title: 'Rejecting Academia',
    description:
      '<span class="highlight">Being offered a prestigious position</span> to become a university teacher of the Japanese language, <span class="highlight">I gracefully turned it down</span>. I chose to focus entirely on my current students and my path as an independent teacher.',
  },
  {
    badge: '2025',
    icon: 'mdi:temple-buddhist',
    accent: '#ff6a00',
    title: 'Living the Dream',
    description:
      'Spent <span class="highlight">3 beautiful months living in Japan</span> while working remotely, alongside my wife.',
  },
  {
    badge: 'NOW',
    icon: 'mdi:fire',
    accent: '#ff2200',
    title: 'Continuing the Mission',
    current: true,
    destination: true,
    pinnedOpen: true,
    description:
      'Having been <span class="highlight">studying Japanese for over 11 years</span> and <span class="highlight">teaching it for 8 years</span>, I continue to teach Japanese to students all around the world, bringing them from total beginners to full-fledged speakers of the language.',
  },
];
