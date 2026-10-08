export interface MethodologyItem {
  num: string;
  accent: string;
  title: string;
  description: string;
}

export const methodologyItems: MethodologyItem[] = [
  {
    num: 'PILLAR 01',
    accent: '#00d2ff',
    title: 'The Structural Pillar',
    description:
      'Our method uses a <strong class="highlight">structure-first approach</strong>, breaking down Japanese grammar into a <strong class="highlight">precise, logical system</strong> with clear rules of construction. You will understand exactly how sentences are built so you can create your own correct sentences from scratch.',
  },
  {
    num: 'PILLAR 02',
    accent: '#ff7a00',
    title: 'The Practice Pillar',
    description:
      'We put theory into practice by <strong class="highlight">solving exam papers (JLPT)</strong> in their entirety. I guide you step-by-step through complex reading and listening sections, dissecting your mistakes and <strong class="highlight">explaining the exact logic</strong> behind correct answers until your execution is flawless.',
  },
  {
    num: 'PILLAR 03',
    accent: '#00ff66',
    title: 'The Grinding Pillar',
    description:
      'Our live session/async feedback time is too valuable to spend repeating words. You use our <strong class="highlight">dedicated vocabulary app</strong> (built on a <strong class="highlight">spaced repetition system</strong>) to learn words and Kanji on your own, efficiently. This ensures long-term retention with optimal daily effort.',
  },
];
