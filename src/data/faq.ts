export interface FaqEntry {
  question: string;
  answer: string;
}

export const faqItems: FaqEntry[] = [
  {
    question: 'Is this program suitable for absolute beginners?',
    answer:
      "Yes, absolutely. In fact, starting as a beginner here is an advantage because you won't have to break old habits and relearn the right way. I will guide you cleanly from zero straight into the structured system I've spent years to build.",
  },
  {
    question: "What's the difference between the Async, Full-Access, and VIP plans?",
    answer:
      "All three share the same personalized roadmap and unlimited access to the kanji and vocab app. Async is fully self-paced — no live calls, just a weekly written pack I personally correct. Full-Access adds four live 1-hour sessions per cycle in a small group of 3, where I split the hour individually between each of you in separate private channels. VIP gives you those same four live sessions, but 100% private — the whole hour is yours alone, every week.",
  },
  {
    question: 'How is the payment managed?',
    answer:
      'Payment is made once every 4 weeks, in advance, through our secure Stripe checkout page, where you also accept our Terms of Service. Your subscription renews automatically every 4 weeks until you cancel, and you receive an invoice by email after each payment.',
  },
  {
    question: 'What happens if I can’t attend a scheduled live session?',
    answer:
      "This applies to the Full-Access and VIP plans, since Async has no fixed live calls. In Full-Access, because the small-group time is shared, a missed session can be rescheduled if all group members unanimously agree, or I'll try to fit you into another active group that week — and if neither works out, you'll still get the full materials and tasks from that session, so you never fall behind. In VIP, since your hour is fully private, I'll simply reschedule it directly with you, subject to availability.",
  },
  {
    question: 'Do I get a certificate?',
    answer:
      "Full-Access and VIP students can request a Certificate of Achievement reflecting their study duration and a JLPT-equivalent level. It's my own personal assessment based on the work we've done together — not an official JLPT certificate — but it's a solid way to document your progress. The Async plan doesn't include this certificate.",
  },
  {
    question: 'Can I switch between plans?',
    answer:
      "Yes. Just message me and I'll switch you over starting from your next 4-week billing cycle — your current cycle isn't restarted or extended.",
  },
  {
    question: 'Is the free 15-minute call really free?',
    answer:
      "Yes, completely — no card required and no obligation to enroll afterward. It's simply my way of showing you the teaching approach firsthand before you decide on a plan.",
  },
];
