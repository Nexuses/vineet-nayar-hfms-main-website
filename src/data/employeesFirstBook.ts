const books = '/assets/books'

export const EFC_BOOK_META = {
  title: 'Employees First, Customers Second — Vineet Nayar',
} as const

export const EFC_BOOK_HERO = {
  eyebrow: 'Power to the Employees',
  titleLead: 'Employees First,',
  titleHighlight: 'Customers Second',
  coverSrc: `${books}/books-hero.png`,
  coverAlt: 'Employees First, Customers Second by Vineet Nayar',
} as const

export const EFC_BOOK_OPENING = {
  titleLead: 'Turning Conventional Management',
  titleHighlight: 'Wisdom Upside Down...',
  paragraphs: [
    "A passionate and disruptive thinker, Vineet has introduced the world to a unique brand of energetic and inspirational leadership. Convinced that leadership lies at the bottom of the corporate hierarchy, his 'Employees First, Customer Second' philosophy has won many awards and received recognition from many eminent institutions across the world.",
    'Nayar continues to share his knowledge and build his thought leadership through numerous articles, speaking engagements, and intellectual partnerships. He remains a restless and relentless innovator in both his professional and social capacities, one who believes that even the most successful management approaches must constantly be evaluated, refined, adapted and rethought, and, when necessary, scrapped altogether. You can explore more of his management philosophies on his personal scrapbook and through his blog published on the Harvard Business Review website.',
    "When Vineet Nayar took the helm of HCL Technologies in 2005, the company's legacy of success was threatened by global shifts in the IT services market that left HCLT struggling to keep up with its bigger rivals. Five years later, the company had become one of the fastest-growing IT services partners on the planet, world-renowned for its radical management practices. In fact, its bold management experiments enabled HCL to enjoy continued rapid growth through the economic recession.",
  ],
} as const

export type EfcAccordionTone = 'teal' | 'purple' | 'coral' | 'blue'

export interface EfcAccordionItem {
  title: string
  iconSrc: string
  body: string
  tone: EfcAccordionTone
}

export const EFC_BOOK_ACCORDION: EfcAccordionItem[] = [
  {
    title: 'Mirror Mirror',
    iconSrc: `${books}/mirror-mirror.png`,
    tone: 'teal',
    body: "Nayar traveled around the world, bluntly conveying the truth about HCL's situation to employees and getting them to turn their eyes away from the past and towards a better future. What did HCLT do to effect such a transformation? As Vineet Nayar describes in this refreshing book - EMPLOYEES FIRST, CUSTOMER SECOND: Turning Conventional Management Upside Down - HCLT's success resulted from putting employees first, especially those working in the 'value zone' where company and customers interact. To do so, they did not institute any employee satisfaction programs, undertake any massive restructurings, or pursue any major technology initiatives. Instead, they employed a number of relatively simple catalysts that produced big (and often unexpected) results and proceeded through four phases:",
  },
  {
    title: 'Trust Through Transparency',
    iconSrc: `${books}/trust-through-transparency.png`,
    tone: 'purple',
    body: 'A culture of trust was created by opening the financial books, sharing information that would make other companies cringe, and enabling employees and managers (including the CEO) to ask questions of each other.',
  },
  {
    title: 'Inverting the Pyramid',
    iconSrc: `${books}/inverting-the-pyramid.png`,
    tone: 'coral',
    body: 'The company redefined processes to make the enabling functions and company management accountable to employees – which resulted in improvement in both their effectiveness and passion for work.',
  },
  {
    title: 'Recasting the office of the CEO',
    iconSrc: `${books}/recasting-the-office-of-the-ceo.png`,
    tone: 'blue',
    body: 'HCL Technologies transferred the responsibility for change from the office of the CEO to the employees, creating a company that was, in many ways, self-run and self-governing. Employees now ask and answer as many questions as the CEO, increasing the speed and quality of innovation and decision-making in the value zone.',
  },
]

export const EFC_BOOK_ACCORDION_CLOSING =
  'Nayar admits that he didn\'t have a clue where he was headed when he started on this journey, and he candidly describes leadership missteps he made along the way. These concepts only became clear to him after the transformation, but he argues that many of these ideas and practices – which Fortune magazine has characterized as "the world\'s most modern management" – can be successfully adopted by any company in any industry, anywhere in the world, with similar results.'

export interface EfcTestimonial {
  quote: string
  name: string
  role: string
}

export const EFC_BOOK_TESTIMONIALS: EfcTestimonial[] = [
  {
    quote:
      "This book offers an abundance of advice for business leaders looking to transform their organizations by changing the culture. Nayar's lesson-that even a 'revolution' in corporate culture is really just a series of small, achievable steps-will be invaluable for both the new manager and the accomplished business leader.",
    name: 'Victor K. Fung',
    role: 'Group Chairman, Li & Fung Group',
  },
  {
    quote:
      "Rumor is that Vineet Nayar has invented a whole new way of configuring and managing an enterprise. I think there's more than a grain of truth to that. I'm on the verge of declaring that Mr. Nayar could be the next Peter Drucker.",
    name: 'Tom Peters',
    role: "Author of 'In Search of Excellence'",
  },
  {
    quote:
      "Employees are the heart and soul of every company. Vineet Nayar's book tells the story of how management can step out of the way to let employees lead-and to let engagement and productivity soar.",
    name: 'Tony Hsieh',
    role: 'CEO, Zappos.com',
  },
  {
    quote:
      'By putting employees first and leveraging the power of social technology, Nayar and his colleagues have created an organization that encourages extraordinary contribution from everyone, every day. If you doubt that it\'s possible to turn the pyramid upside down-or wonder whether it\'s really necessary-I urge you to read this thoughtful and timely book!',
    name: 'Gary Hamel',
    role: 'Visiting Professor of Strategic and International Management, London Business School, and author of The Future of Management',
  },
  {
    quote:
      "Vineet Nayar has a revolutionary idea-that business relationships are personal relationships, and that a successful company will understand and integrate that philosophy. Nayar's notions of 'trust, transparency, and the romance of tomorrow' will rejuvenate the corporate soul.",
    name: 'Judy McGrath',
    role: 'CEO, MTV',
  },
  {
    quote:
      "Vineet Nayar's new book describes his innovative and practical approach to kindling a fire in employees and moving the social energy of an organization forward. With the methods described in this book, Nayar enabled his Generation Y 'transformers' to realize their potential faster, increased the capacity of the organization to create value for its customers, and built his company into a world leader.",
    name: 'Ram Charan',
    role: 'Coauthor of Execution: The Discipline of Getting Things Done',
  },
]

export interface EfcRecognition {
  brandSrc: string
  brandAlt: string
  brandClass: string
  text: string
}

export const EFC_BOOK_RECOGNITIONS: EfcRecognition[] = [
  {
    brandSrc: `${books}/forbes.png`,
    brandAlt: 'Forbes',
    brandClass: 'rec-brand--forbes',
    text: "Forbes 'Heroes of Philanthropy' List 2016 for Innovation led large-scale social change",
  },
  {
    brandSrc: `${books}/fp.png`,
    brandAlt: 'Foreign Policy',
    brandClass: 'rec-brand--fp',
    text: "'Global Thinker 2016' by Foreign Policy for unplugging technology, so kids can learn",
  },
  {
    brandSrc: `${books}/forbes.png`,
    brandAlt: 'Forbes',
    brandClass: 'rec-brand--forbes',
    text: "'Employees First, Customer Second' has sold over 100,000 copies worldwide",
  },
  {
    brandSrc: `${books}/fortune.png`,
    brandAlt: 'Fortune',
    brandClass: 'rec-brand--fortune',
    text: 'Fortune has described him as having led the "World\'s most modern management"',
  },
  {
    brandSrc: `${books}/fortune.png`,
    brandAlt: 'Fortune',
    brandClass: 'rec-brand--fortune',
    text: "Fortune chose him in their first 'Executive Dream Team' 2012",
  },
  {
    brandSrc: `${books}/thinkers50.png`,
    brandAlt: 'Thinkers50',
    brandClass: 'rec-brand--thinkers50',
    text: 'Included in Thinkers50 List 2011-12',
  },
  {
    brandSrc: `${books}/hbr.png`,
    brandAlt: 'Harvard Business Review',
    brandClass: 'rec-brand--hbr',
    text: "Juror of Harvard Business Review's prestigious McKinsey Prize, two years in a row",
  },
  {
    brandSrc: `${books}/hcl.png`,
    brandAlt: 'HCL Technologies',
    brandClass: 'rec-brand--hcl',
    text: 'Under his stewardship, Business week called out HCLT amongst "one of the world\'s most influential companies"',
  },
  {
    brandSrc: `${books}/france.png`,
    brandAlt: 'Oliver Lecerf Prize',
    brandClass: 'rec-brand--france',
    text: "Felicitated with France's prestigious Oliver Lecerf Prize",
  },
  {
    brandSrc: `${books}/hec.png`,
    brandAlt: 'HEC Paris',
    brandClass: 'rec-brand--hec',
    text: 'Conferred with Manpower HEC Prize',
  },
  {
    brandSrc: `${books}/brandon.png`,
    brandAlt: 'Brandon Hall',
    brandClass: 'rec-brand--brandon',
    text: "Conferred with 'Business HR Champion Award' at the European HCM Excellence Awards, 2011",
  },
  {
    brandSrc: `${books}/brookings.png`,
    brandAlt: 'Brookings',
    brandClass: 'rec-brand--brookings',
    text: 'Founding Member of Brookings India',
  },
  {
    brandSrc: `${books}/cxo.png`,
    brandAlt: 'CXO Awards',
    brandClass: 'rec-brand--cxo',
    text: "Adjudged as the 'CEO of the Year' in Bloomberg UTVi CXO Awards, 2011",
  },
]

export const EFC_BOOK_VIDEO = {
  youtubeId: 'HmV9dmG1XdY',
  embedUrl: 'https://www.youtube.com/embed/HmV9dmG1XdY',
  title: 'The Employees First, Customers Second Transformation Journey',
  thumbnail: 'https://img.youtube.com/vi/HmV9dmG1XdY/maxresdefault.jpg',
} as const

export const EFC_BOOK_CTA = {
  eyebrow: 'Be part of the movement',
  titleLead: 'What Part of Being Human Will You',
  titleHighlight: 'Never Give Up',
  descriptionEmphasis: 'Humans First, Machines Second',
  descriptionBody:
    'is a conversation about winning in the age of AI without losing what makes us human. This is where it begins. Find your city, take your seat, and bring your answer to the room.',
  ctaLabel: 'Join the Movement',
  portraitSrc: `${books}/book-cta-portrait.png`,
  portraitAlt: 'Vineet Nayar',
} as const
