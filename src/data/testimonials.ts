export interface TestimonialItem {
  photo?: string;
  icon: string;
  name: string;
  flag: string;
  role: string;
  roleClass?: string;
  quoteTitle?: string;
  quoteTitleOriginal?: string;
  quote: string;
  translated?: boolean;
  quoteOriginal?: string;
  previewStart?: number;
  previewStartOriginal?: number;
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

// flag (Iconify icon name from the flagpack set):
// - 'flagpack:jp'
// - 'flagpack:us'
// - 'flagpack:ro'

// role:
// - 'Native Speaker / Friend'
// - 'Self-Learner Tier Member'
// - 'Language Exchange Partner'
// - 'Inner Circle Premium Member'

// quoteTitle (optional, short headline shown above the quote):
// '...'

// quoteTitleOriginal (optional, only for Japanese natives — Japanese version of quoteTitle):
// '...'

// quote:
// 'Vincent has ... to understand it as it is.' (for Japanese natives, text
// translated into English). Write the quote WITHOUT wrapping quotation marks
// — the component adds those (" ... ") automatically, so it can still show
// them correctly around a preview that's been cut short (see previewStart
// below).

// -------------------------

// Only for Japanese natives:

// quote:
// 'He and I have been friends ... it's free.'

// quoteOriginal:
// 'それなりに長い間友人関係です ... もちろん無料です。' (text in Japanese,
// also WITHOUT wrapping brackets — the component adds 「 ... 」 automatically)

// roleClass:
// - 'text-accent-red'

// translated:
// - true

// previewStart (optional): character index into `quote` (the bare text,
// without quote marks — see above) where the card preview (the collapsed
// text shown before "See more") should start reading from. Does not affect
// the full review text shown after clicking "See more". Defaults to 0
// (preview starts at the beginning of the quote).
// - 45

// previewStartOriginal (optional): same as previewStart, but applied to
// `quoteOriginal` — only relevant if the card's "see original" toggle is used
// while the preview is collapsed.
// - 30

export const testimonials: TestimonialItem[] = [

  // Andrei

  {
    photo: "Andrei.png",
    icon: "fa6-solid:user-ninja",
    name: "Andrei",
    flag: "flagpack:ro",
    role: "Student / Advanced (N2)",
    previewStart: 327,
    quote: `Vincent and I were high school classmates, and even back then, he could hold simple conversations with native Japanese speakers. When I reached out to him two and a half years ago for tutoring, he was already fluent and spoke with native speakers as an equal, even having worked as a tour guide for native Japanese speakers.
\n\nI started completely from scratch with grammar, knowing only a handful of words. I couldn't have asked for a better introduction to the language. Vincent explained the grammatical fundamentals and showed me how to build simple sentences using accessible vocabulary, so that in less than a year, I was writing full paragraphs on my own. He meticulously corrected every text I translated and, regardless of its accuracy, always offered even more natural ways to phrase things.
\n\nHe is an extraordinarily patient tutor, never rigid, and adapts his teaching pace to the student's abilities. He answers every question and explains the logic behind each structure, truly understanding Japanese grammar from its roots. His teaching style is well-structured, allowing him to clarify any detail thoroughly.
\n\nDuring our lessons, we focus on grammar, vocabulary integrated into context, and exam preparation (including reading and listening sections). For learning kanji and expanding vocabulary, he provides students with access to a dedicated app. Additionally, he remains available for questions outside of class whenever his schedule permits.
\n\nVincent is an excellent choice because he is patient and teaches efficiently at an easy-to-follow pace. He has extensive experience communicating with native speakers in both social and professional settings, which is also supported by the fact that he lived in Japan for three months.`,
  },

  // Yobu

  {
    icon: "healthicons:temple",
    name: "Yobu",
    flag: "flagpack:jp",
    role: "Native Speaker / Friend",
    roleClass: "text-accent-red",
    quoteTitle: '"Let me introduce my friend Vincent."',
    quoteTitleOriginal: "「私の友人のヴィンセントについて紹介します。」",
    previewStart: 325,
    previewStartOriginal: 149,
    quote: `He and I have been friends for quite a long time, so I know that he's studied Japanese carefully and continuously. I've lost count of how many times he's asked me about fine nuances while learning Japanese. He's probably asked other Japanese people besides me too. Because of that, he grasps the language very precisely. And when it comes to Japanese grammar, he understands it more accurately than a native speaker in some ways. There are even cases where he knows rules that I don't. That's how high a level of Japanese he's mastered.\n\nA bit of a tangent, but he really loves Japanese anime. Actually, the reason he and I got to know each other in the first place was our shared interest in anime. So if you're reading this and you like anime and got interested in Japanese because of it, please try talking with him. I'm sure you'll get to learn the correct nuance behind anime characters' lines that you didn't know before.\n\nNext, he's a very honest and sincere person, and he's not the businesslike type. He teaches in a way that stays close to each individual student, and I don't think he'd ever let you down. Because of that kind of nature, I think that once you start to understand Japanese to a certain degree, he'll probably suggest at some point that you try talking with a native Japanese speaker. I think that would be a really good opportunity for you. In fact, he's actually talked with a lot of Japanese people, including me. I think in most cases they met online. As a Japanese person myself, I don't feel that many Japanese people are good people, but he holds a good impression of Japanese culture and Japanese people.\n\nGetting a little off track again, but if you ever want to talk with a Japanese person, I think I'd like to talk with you too. Of course, it's free.`,
    translated: true,
    quoteOriginal: `彼と私はそれなりに長い間友人関係です、なので彼が日本語について慎重にそして継続的に学んできたことを知っています。私は彼が日本語を学んでるときに細かいニュアンスについて質問をしてもらったことが数えきれないほどあります。私以外の日本人にも聞いたことがあるでしょう。なのでとても言葉を正確に捉えています。そして、日本語の文法についてはある程度ネイティブより正確に理解していて、場合によっては私の知らないルールについて知っている場合もあります。彼はそれほど日本語を高いレベルで習得しています。\n\nその話とは少しずれますが、彼は日本のアニメがとても好きです、私と彼が知り合えたのもアニメという共通の趣味があったからです、この文を読んでいるアニメが好きで日本語に興味をもった方是非彼と会話をしてみてください、あなたの知らないアニメキャラのセリフの正しいニュアンスを知ることができるはずです。\n\n次に、彼はとても正直で誠実な人間です、そしてビジネスライクな人間ではありません。生徒一人一人に寄り添った教え方をしてくれるし、あなたをがっかりさせるようなことは無いと私は考えています。そういう性質があるので、あなたが日本語をある程度理解し始めたらきっと日本語ネイティブと会話をすることを提案するときがあると思います。それは、あなたにとってとても良いチャンスになると思います。実際に彼は、私を含め多くの日本人と会話をしてきました、方法はネット上で知り合うことが多いと思います。私は日本人として、多くの日本人が良い人間だと感じていませんが。彼は日本の文化や日本人について良い印象を持ってくれています。\n\n少し話がそれましたが、あなたがもし日本人と会話をしたいと望むなら私もあなたと会話をしたいと感じると思います。もちろん無料です。`,
  },

  // Sheldon
  {
    photo: "Sheldon.jpeg",
    icon: "game-icons:paper-lantern",
    name: "Sheldon",
    flag: "flagpack:us",
    role: "Student / Intermediate (N3)",
    previewStart: 91,
    quote: `Vincent has a wonderfully unique personality that brings out the joy in language learning. His ability to communicate information while adjusting to your level is a rare skill to have. I\'ve yet to see him shy away from any questions, no matter how simple or complex. He goes above and beyond by teaching more than just a set of rules and vocabulary. He truly tries to convey Japanese as Japanese, to understand it as it is.`,
  },

  // Faru
  {
    photo: "Faru.jpeg",
    icon: "game-icons:fuji",
    name: "Hirokazu",
    flag: "flagpack:jp",
    role: "Native Speaker / Friend",
    roleClass: "text-accent-red",
    quoteTitle:
      '"Especially recommended for those who want a theoretical understanding of grammar."',
    quoteTitleOriginal: "「特に、文法を理論的に理解したい方におすすめです。」",
    previewStart: 541,
    previewStartOriginal: 216,
    quote: `I've been friends with Vincent for over 10 years. I've known him since back when he could barely speak Japanese.\n\nEven as a native Japanese speaker, I've studied Japanese together with him over the years, and I've been truly amazed by his progress. Nowadays, when he talks with Japanese people, they often don't even realize he's a foreigner. His Japanese is that natural (lol).\n\nSince I'm a native speaker, I usually understand "why we use this expression" intuitively, and I often find it difficult to explain grammar from the ground up.\n\nVincent, on the other hand, has spent a long time analyzing Japanese as a learner himself, so I think he's a teacher who can explain the "why" behind things theoretically, not just by rote memorization.\n\nI also teach Japanese as a volunteer myself, but being a native speaker means I tend to rely on intuition. I believe Vincent can teach from the learner's perspective, in a way that's clear and systematic.\n\nFor anyone who wants to learn Japanese while thoroughly understanding the mechanics of its grammar, he's an especially recommended teacher.`,
    translated: true,
    quoteOriginal: `ヴィンセントとは10年以上の友人です。まだ彼が日本語をあまり話せなかった頃から知っています。\n\n日本語ネイティブの私も、これまで一緒に日本語の勉強をしてきましたが、彼の上達には本当に驚きました。今では日本人と話していても、外国人だと気づかないくらい自然に日本語を使っています（笑）。\n\n私は日本語ネイティブなので、普段は「なぜこの表現を使うのか」を感覚で理解していることが多く、文法を一から説明する難しさを感じることがあります。\n\nその点、ヴィンセントは日本語学習者として長い間日本語を分析してきた経験があるので、ただ覚えるだけではなく「なぜそうなるのか」を理論的に説明できる先生だと思います。\n\n私自身もボランティアで日本語を教えていますが、ネイティブだからこそ感覚に頼ってしまう部分があります。ヴィンセントなら、学習者の目線に立って、分かりやすく体系的に教えてくれると思います。\n\n文法の仕組みをしっかり理解しながら日本語を学びたい方には、特におすすめの先生です。`,
  },

  // example:
  // {
  //   photo: '',
  //   icon: 'hugeicons:sakura',
  //   name: '...',
  //   flag: '...',
  //   role: '...',
  //   quoteTitle: '...',
  //   quote:
  //     `" ... "`,
  // },

  // for Japanese natives:
  // {
  //   photo: ' ... ',
  //   icon: ' ... ',
  //   name: ' ... ',
  //   flag: 'JP',
  //   role: 'Native Speaker / Friend',
  //   roleClass: 'text-accent-red',
  //   quoteTitle: '" ... "',
  //   quoteTitleOriginal: '「 ... 」',
  //   quote:
  //     `" ... "`,
  //   translated: true,
  //   quoteOriginal:
  //     `「 ... 」`,
  // },
];
