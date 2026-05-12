// Defines editable content blocks per page.
// Pages merge these defaults with KV overrides at render time.

export type ContentBlock = {
  key: string
  label: string
  hint?: string
  type: 'text' | 'textarea' | 'number'
  defaultValue: string
}

export type EditablePage = {
  id: string
  label: string
  url: string
  description: string
  blocks: ContentBlock[]
}

export const EDITABLE_PAGES: EditablePage[] = [
  {
    id: 'home',
    label: 'Home',
    url: '/',
    description: 'Homepage hero, mission stats, and programme targets',
    blocks: [
      { key: 'hero_headline', label: 'Hero Headline', type: 'textarea', defaultValue: 'Nothing and No One Is Wasted.' },
      { key: 'hero_sub', label: 'Hero Subheadline', type: 'text', defaultValue: 'A BC-registered nonprofit organisation transforming textile waste into purposeful jobs, funding girls\' education in Canada and Kenya, and removing financial barriers to adoption.' },
      { key: 'stat_tonnes', label: 'KCEI — Tonnes Target', hint: 'Stat shown on homepage target card', type: 'number', defaultValue: '50' },
      { key: 'stat_jobs', label: 'KCEI — Jobs Target', type: 'number', defaultValue: '12' },
      { key: 'stat_cities', label: 'KCEI — Cities Engaged', type: 'number', defaultValue: '3' },
      { key: 'stat_girls', label: 'Education — Girls & Women Supported', type: 'number', defaultValue: '26' },
      { key: 'targets_disclaimer', label: 'Targets Disclaimer Text', type: 'textarea', defaultValue: 'KCEI became fully operational in July 2024. These are our programme targets for 2026–2028.' },
    ],
  },
  {
    id: 'impact',
    label: 'Impact Dashboard',
    url: '/impact',
    description: 'All seven impact counters with labels and badges',
    blocks: [
      { key: 'stat_tonnes_value', label: 'Tonnes Diverted — Value', type: 'number', defaultValue: '50' },
      { key: 'stat_tonnes_sub', label: 'Tonnes Diverted — Sub-label', type: 'text', defaultValue: 'Target: 50 tonnes by 2028' },
      { key: 'stat_jobs_value', label: 'Sustainable Jobs — Value', type: 'number', defaultValue: '12' },
      { key: 'stat_jobs_sub', label: 'Sustainable Jobs — Sub-label', type: 'text', defaultValue: 'Target: 12 jobs by 2028' },
      { key: 'stat_partners_value', label: 'Partner Organisations — Value', type: 'number', defaultValue: '8' },
      { key: 'stat_cities_value', label: 'Cities Engaged — Value', type: 'number', defaultValue: '3' },
      { key: 'stat_cities_sub', label: 'Cities Engaged — Sub-label', type: 'text', defaultValue: 'Vancouver · Victoria · CRD' },
      { key: 'stat_girls_value', label: 'Girls & Women Supported — Value', type: 'number', defaultValue: '26' },
      { key: 'stat_girls_sub', label: 'Girls & Women Supported — Sub-label', type: 'text', defaultValue: '6 Canada + 20 Kenya' },
      { key: 'stat_families_value', label: 'Families Funded — Value', type: 'number', defaultValue: '3' },
      { key: 'stat_children_value', label: 'Children Placed — Value', type: 'number', defaultValue: '3' },
    ],
  },
  {
    id: 'kcei',
    label: 'KCEI Overview',
    url: '/kcei',
    description: 'KCEI hero, programme stats, and body copy',
    blocks: [
      { key: 'hero_headline', label: 'Hero Headline', type: 'textarea', defaultValue: "Canada's first full-stack textile circular economy hub." },
      { key: 'stat_tonnes', label: 'Tonnes Diverted — Target', type: 'number', defaultValue: '50' },
      { key: 'stat_jobs', label: 'Sustainable Jobs — Target', type: 'number', defaultValue: '12' },
      { key: 'stat_partners', label: 'Partner Organisations — Current', type: 'number', defaultValue: '8' },
      { key: 'about_disclaimer', label: 'About These Numbers — disclaimer text', type: 'textarea', defaultValue: 'KCEI became fully operational in July 2024. Targets are set for the 2026–2028 programme period.' },
    ],
  },
  {
    id: 'girls-women',
    label: 'Girls & Women Education',
    url: '/girls-women',
    description: 'Bursary stats and programme description',
    blocks: [
      { key: 'stat_canada', label: 'Bursaries Awarded — Canada (value)', type: 'number', defaultValue: '6' },
      { key: 'stat_kenya', label: 'Girls Supported in Kenya (value)', type: 'number', defaultValue: '20' },
      { key: 'canada_headline', label: 'Canada Stream — Headline', type: 'textarea', defaultValue: 'Opening doors to higher education for Black girls and women.' },
      { key: 'canada_body1', label: 'Canada Stream — Body Paragraph 1', type: 'textarea', defaultValue: 'Black women in Canada face documented, systemic barriers to accessing and completing post-secondary education. Financial barriers are real — but so are the less visible ones: institutions that weren\'t built for them, and a student loan system that leaves them carrying disproportionate debt.' },
      { key: 'canada_body2', label: 'Canada Stream — Body Paragraph 2', type: 'textarea', defaultValue: 'Kasandy Foundation\'s Canada stream funds bursaries and scholarships for Black girls and women pursuing college and university education — removing financial barriers so talent and determination are what decide who succeeds.' },
    ],
  },
  {
    id: 'paths-to-home',
    label: 'Paths to Home',
    url: '/paths-to-home',
    description: 'Adoption fund stats and programme description',
    blocks: [
      { key: 'stat_families', label: 'Families Funded — Target', type: 'number', defaultValue: '3' },
      { key: 'stat_children', label: 'Children Placed — Target', type: 'number', defaultValue: '3' },
      { key: 'hero_headline', label: 'Hero Headline', type: 'textarea', defaultValue: 'Every child deserves a loving home.' },
      { key: 'problem_body1', label: 'Problem Section — Paragraph 1', type: 'textarea', defaultValue: 'In Canada, adoption costs between $15,000 and $50,000 or more. For many families, that is simply impossible.' },
      { key: 'founder_quote', label: 'Founder Quote', type: 'textarea', defaultValue: 'This cause is close to my heart. I\'ve always believed that children deserve loving homes, and that willing parents should never have to go into debt to make that happen. The Paths to Home fund is personal.' },
    ],
  },
  {
    id: 'about',
    label: 'About',
    url: '/about',
    description: 'Mission, vision, and Canada + Kenya principle text',
    blocks: [
      { key: 'hero_headline', label: 'Hero Headline', type: 'textarea', defaultValue: 'We believe that nothing — and no one — should be wasted.' },
      { key: 'hero_sub', label: 'Hero Subtext', type: 'textarea', defaultValue: 'A BC-registered nonprofit organization built on one conviction: sustainability and social justice are the same bet. Everything we do in Canada, we also do in Kenya.' },
      { key: 'mission', label: 'Mission Statement', type: 'textarea', defaultValue: 'Transform textile waste into purposeful products and purposeful employment — while funding education and family, in Canada and Kenya. Three missions. One foundation. One set of values. Nothing and no one is wasted.' },
      { key: 'vision', label: 'Vision Statement', type: 'textarea', defaultValue: "A world where the circular economy is built with — not around — the communities it's meant to serve. Where education is universal. Where every child has a loving home. Vancouver as a global model. Kenya as equal partner, not recipient." },
    ],
  },
  {
    id: 'team',
    label: 'Team',
    url: '/team',
    description: 'Team member bios and descriptions',
    blocks: [
      { key: 'jackee_title', label: 'Jackee — Title', type: 'text', defaultValue: 'Founder & Executive Director' },
      { key: 'jackee_bio', label: 'Jackee — Bio', type: 'textarea', defaultValue: 'Jackee Kasandy is the founder and Executive Director of the Kasandy Foundation and the broader Kasandy enterprise — a portfolio built around the conviction that sustainability, equity, and community are the same bet.' },
      { key: 'deress_title', label: 'Deress — Title', type: 'text', defaultValue: 'Director of Operations & Supply Chain' },
      { key: 'deress_bio', label: 'Deress — Bio', type: 'textarea', defaultValue: 'Deress Asghedom is the founder of Vaster and brings over 20 years of supply chain leadership to KCEI.' },
      { key: 'raphael_title', label: 'Raphael — Title', type: 'text', defaultValue: 'Director of Impact & Partnerships' },
      { key: 'raphael_bio', label: 'Raphael — Bio', type: 'textarea', defaultValue: 'Raphael Machalani is the founder of Kronowl and brings deep expertise in international development, MEAL systems, and strategic partnerships.' },
      { key: 'nadine_title', label: 'Nadine — Title', type: 'text', defaultValue: 'Director of Community & Education' },
      { key: 'nadine_bio', label: 'Nadine — Bio', type: 'textarea', defaultValue: 'Nadine Umutoni leads the Foundation\'s community engagement and education programmes.' },
    ],
  },
]

export function getPageById(id: string): EditablePage | undefined {
  return EDITABLE_PAGES.find(p => p.id === id)
}
