export interface TestimonialItem {
  photo?: string;
  icon: string;
  name: string;
  flag: string;
  role: string;
  roleClass?: string;
  quote: string;
  translated?: boolean;
  quoteOriginal?: string;
}

// TO DO: student reviews

// Profile pictures are placed in: ./src/assets/avatars (examples: takuya.jpg, mai.jpg)

// Examples for the values ​​of the items in the TestimonialItem list:

// photo: 
// - 'takuya.jpg'
// - 'mai.jpg'

// icon:
// - 'hugeicons:sakura'
// - 'fa6-solid:user-ninja'
// - 'game-icons:paper-lantern'
// - 'pinhead:lotus-flower'
// - 'healthicons:temple'
// - 'game-icons:fuji'
// - 'game-icons:circling-fish'
// - 'hugeicons:origami'
// - 'mdi:noodles'
// - 'game-icons:sushis'
// - 'game-icons:samurai-helmet'
// - 'game-icons:shuriken'

// flag:
// - 'JP'
// - 'US'
// - 'RO'

// role:
// - 'Native Speaker / Friend'
// - 'Self-Learner Tier Member'
// - 'Language Exchange Partner'
// - 'Inner Circle Premium Member'

// quote:
// '" ... "' (for Japanese natives, text translated into English)

// -------------------------

// Only for Japanese natives:

// quote:
// "\" ... \""

// quoteOriginal:
// '「 ... 」' (text in Japanese)

// roleClass:
// - 'text-accent-red' 

// translated:
// - true

export const testimonials: TestimonialItem[] = [
  // Sheldon
  {
    photo: 'Sheldon.jpeg',
    icon: 'hugeicons:sakura',
    name: 'Sheldon',
    flag: '...',
    role: 'Student',
    quote:
      `"Vincent has a wonderfully unique personality that brings out the joy in language learning. His ability to communicate information while adjusting to your level is a rare skill to have. I\'ve yet to see him shy away from any questions, no matter how simple or complex. He goes above and beyond by teaching more than just a set of rules and vocabulary. He truly tries to convey Japanese as Japanese, to understand it as it is."`,
  },

  // Faru
  {
    photo: 'Faru.jpeg',
    icon: 'healthicons:temple',
    name: 'Hirokazu',
    flag: 'JP',
    role: 'Native Speaker / Friend',
    roleClass: 'text-accent-red',
    quote:
      `"~Especially recommended for those who want a theoretical understanding of grammar.~ 
      
      \nI've been friends with Vincent for over 10 years. I've known him since back when he could barely speak Japanese.
      \nEven as a native Japanese speaker, I've studied Japanese together with him over the years, and I've been truly amazed by his progress. Nowadays, when he talks with Japanese people, they often don't even realize he's a foreigner — his Japanese is that natural (lol).
      \nSince I'm a native speaker, I usually understand "why we use this expression" intuitively, and I often find it difficult to explain grammar from the ground up.
      \nVincent, on the other hand, has spent a long time analyzing Japanese as a learner himself, so I think he's a teacher who can explain not just by rote memorization, but theoretically — the "why" behind things.
      \nI also teach Japanese as a volunteer myself, but being a native speaker means I tend to rely on intuition. I believe Vincent can teach from the learner's perspective, in a way that's clear and systematic.
      \nFor anyone who wants to learn Japanese while thoroughly understanding the mechanics of its grammar, he's an especially recommended teacher."`,
    translated: true,
    quoteOriginal:
      `「~特に、文法を理論的に理解したい方におすすめです。~

      \nヴィンセントとは10年以上の友人です。まだ彼が日本語をあまり話せなかった頃から知っています。
      \n日本語ネイティブの私も、これまで一緒に日本語の勉強をしてきましたが、彼の上達には本当に驚きました。今では日本人と話していても、外国人だと気づかないくらい自然に日本語を使っています（笑）。
      \n私は日本語ネイティブなので、普段は「なぜこの表現を使うのか」を感覚で理解していることが多く、文法を一から説明する難しさを感じることがあります。
      \nその点、ヴィンセントは日本語学習者として長い間日本語を分析してきた経験があるので、ただ覚えるだけではなく「なぜそうなるのか」を理論的に説明できる先生だと思います。
      \n私自身もボランティアで日本語を教えていますが、ネイティブだからこそ感覚に頼ってしまう部分があります。ヴィンセントなら、学習者の目線に立って、分かりやすく体系的に教えてくれると思います。
      \n文法の仕組みをしっかり理解しながら日本語を学びたい方には、特におすすめの先生です。」`,
  },

  // example:
  // {
  //   photo: '',
  //   icon: 'hugeicons:sakura',
  //   name: '...',
  //   flag: '...',
  //   role: '...',
  //   quote:
  //     `" ... "`,
  // },

  // for Japanese natives:
  // {
  //   photo: '',
  //   icon: 'healthicons:temple',
  //   name: '...',
  //   flag: '...',
  //   role: '...',
  //   roleClass: '',
  //   quote:
  //     `" ... "`,
  //   translated: true,
  //   quoteOriginal:
  //     `「 ... 」`,
  // },

];
