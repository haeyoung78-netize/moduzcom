import React, { useState, useMemo } from 'react';

interface BlogProps {
  onNavigate: (page: string) => void;
}

interface Article {
  id: string;
  category: string;
  readTime: string;
  title: string;
  quote?: string;
  summary: string;
  date?: string;
  imgUrl: string;
  content: string;
}

export default function Blog({ onNavigate }: BlogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Articles data matching HTML 5
  const articles: Article[] = [
    {
      id: 'a1',
      category: 'AI Engineering',
      readTime: '12 min read',
      title: 'The Art of the Prompt: Engineering Creativity with LLMs',
      quote: 'The next generation of designers won\'t just draw; they will curate intelligence.',
      summary: 'Dive deep into advanced prompting frameworks that move beyond simple commands to create high-fidelity design assets and structured curriculum logic.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxVamN6sIGlZwZs8ZTMudE4s7hvIb_mgr0lEgVj3s_XZoUUgWb7HwyNRzwKkWdGiLpAVMd_LfTNx9GS67TgjxxPE2-zKTvXwMw_b24-fXdM0bX45qfod_rZH-soeETxIYKIKmR-Chzql0jtJLQEaisVD1MMLa0eXmgF1_KQ7Z90wd5oHU5ZkWiPZKKLN-iqnXGVOOz-KJQN-G29lmbBTs5mHgyW45hKX-KJY771Q18lOY7gY0tNyN7dJFMsTFu2spZ_Qawe8e55cU',
      content: `Prompt engineering has matured from a trial-and-error experiment to a rigorous engineering discipline. This thesis explores how structured prompts can govern generative workflows for high-fidelity outputs. We introduce the concepts of Role-based Persona Alignment, Multi-shot Demonstration sets, and Programmatic Chain-of-Thought reasoning. By constraining LLMs within precise semantic and syntactic boundaries, creators can systematically elicit higher fidelity designs, structured JSON variables, and dynamic curricular flows that adapt to individual learner pacing. In the era of cognitive abundance, curation becomes the defining element of individual mastery.`
    },
    {
      id: 'a2',
      category: 'Notion',
      readTime: '8 min read',
      title: 'Architectural Course Design in Notion',
      summary: 'Building educational frameworks that grow with your students using database relations and templates.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2c9T4TgJFm87kkYhWjp0iu03XeOvoabWuU9pX7HQ_OQhTSMyPT4wcKzLPfRaK6zG8f3Le8CPqp1QoRHdOug9VlCooIxItMej2DHl8iEvUlWB_KJaaB2-_hxEQpOr52BUZli4mMga8Ec4xnswtcHf09duc-60PpgmdRfDSXM0Bpo2BoxOYnzgTYMrWJfPLmxHL9Fwu2WTVZ4JMDxjSKspv718MBWTpppzBo2f5tlNcduD7QjM-NJ2UWsohJ2xFNQyN9eF_hiElhz8',
      content: 'A detailed breakdown of how to structure a learning database. Learn how to map student achievements, progress logs, task items, and reading lists using relational databases in Notion. Perfect for educational architects looking to organize curricula systematically.'
    },
    {
      id: 'a3',
      category: 'Canva',
      readTime: '5 min read',
      title: 'Visual Storytelling for Educators',
      summary: 'Elevating standard presentation decks into immersive visual experiences that hold student attention.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAD_RkFLh-FR-Eox7utRehlCnAHfTkwtVaX17mYFyt4iXjDmIstjk8f75AFQKTA9oSAb8TO5x-XY3mBmVE8jZtNbHqBY4_6U4fhR5Ys7wWeaMvjL--xSHeDbIYOB3EV_5XlfdvpU1sCfEfT63jSXmT9SLAMFQ0wogLir0J9H_x7wwP9L0KgFBzUUi2bss--Ng5rLhOPwzRL9RmLZ9OgC-JhF3LkejalkFWexuobtuMZtVpIJtt9a9PZ6PTHbXjVjOQeIzQUbAJOcdA',
      content: 'Traditional lecture slides are dry and fail to sustain interest. This article unpacks visual-first framing, minimal typographical arrangements, and atmospheric background selections in Canva to turn standard bullet points into stunning visual-rich educational guides.'
    },
    {
      id: 'a4',
      category: 'Pedagogy',
      readTime: '15 min read',
      title: 'The Death of the Lecture: Modular Learning Dynamics',
      date: 'Oct 24, 2023',
      summary: 'Why traditional linear teaching is failing in the attention economy and how to build high-engagement micro-modules.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASDETPwgE5NvSiEVII6rLVphPljOqRNKIpWXLnVoOR1AhwyHoUfBwn3VAoJ_3Vu_dr7mwn2EcJFt9JRmduIpLra9_xs_s7PphS4eAnA83lFwy6JEL1j_fGLTXPN3ZZediI3dtL_5V0GLAS1lFBRu8BFe6lanqSbOJDOfo794eeTFo7eFABvSrEv4eiOUHntM8zJzspydaotP1r92mB9tkyot8HWPjR1VdG9r2xaj9f3vSeVPo40tzLTCo--PJ5Zg4jmZYtrW1qPeE',
      content: 'In the attention economy, a 2-hour monographic lecture is obsolete. We present modular micro-learning units: highly focused, active 10-minute capsules paired with interactive self-assessments that enforce active recall and spaced repetition.'
    },
    {
      id: 'a5',
      category: 'Typography',
      readTime: '6 min read',
      title: 'Legibility as Luxury: Setting the Tone of Learning',
      date: 'Oct 18, 2023',
      summary: 'How typographic choices influence information retention and student perception of course value.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0IdmSEp5E_ER6k0K4v9zNaacOeCvBhkywoLWWuWpXYK2uO3-NSc3Aen4XSSJr13BFwLSPloI2iITsEFeGA4UDxUnijoHQWsyI-YNXo2gbfM2-LIm1cp6owzUqSFSvpZRWl-Nl1jBcKVka_2v1xO6raOM-o2Tb6iILoLYhtp4nseOXks0RzxjvwGGK4sLOMiiwLfpDRtUC_Um_WWKv8ao2eEfZykRt3vylg8N0m9RjZQiJMv--58YBzKrzXVqHKZQliVLH6kgH9Jg',
      content: 'Type defines trust. When readers look at beautifully typeset content with generous margins, information processing is expedited, and the learner values the knowledge more. We study typographic rhythm, serif versus sans-serif pairing, and the prestige of empty space.'
    },
    {
      id: 'a6',
      category: 'Strategy',
      readTime: '10 min read',
      title: 'The 2024 EdTech Landscape: Quality over Quantity',
      date: 'Oct 12, 2023',
      summary: 'Navigating the shift from mass-market course platforms to boutique, expert-led learning ateliers.',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATbAioHFDn3SKMqcOKXy-3KKuDX0LTqIPMmPHmdanjxceE6BResH7ajPwX9dX8hBO7PoneXDw6khfbGImea26yCSY5ORb76DSa1A-k8qdlqvmxkwgINYArID9vNQJB6-9TYhkSyUsxirturtKJ0qB1Su9Odc6C1JRPAmU7b33IWp3ZpXpEs4mTAtePNYH4dn9lWA9PEGgGWy-Q48oL29ZNpZKgblTxg_2YDHT-WtsSKuTrYdgNfjSf2dAJZ_GgKK27mBwYyC8Jawg',
      content: 'Mass scale has led to a commodity trap where completion rates are under 5%. The modern professional seeks premium, cohort-centric ateliers with bespoke, live feedback loops and prestigious accreditation. We map out the transition.'
    }
  ];

  // Live filter articles based on search query
  const filteredArticles = useMemo(() => {
    return articles.filter(art =>
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setNewsletterEmail('');
        alert('뉴스레터 구독이 성공적으로 완료되었습니다.');
      }, 1500);
    } else {
      alert('올바른 이메일 주소를 입력해 주세요.');
    }
  };

  return (
    <div id="blog-layout" className="bg-surface text-on-surface min-h-screen">
      
      {/* Top search bar matching HTML 5 */}
      <div className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-surface flex justify-between items-center px-unit-lg border-b border-outline-variant z-40">
        <div className="flex items-center gap-unit-md">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-on-surface-variant pointer-events-none">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-surface-container-low border border-outline-variant rounded-full text-label-md focus:outline-none focus:border-secondary transition-colors w-64 md:w-80 text-on-surface"
              placeholder="Search resources..."
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 inset-y-0 flex items-center text-xs text-on-surface-variant hover:text-primary bg-transparent border-none cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-unit-md">
          <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer bg-transparent border-none">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <button className="p-2 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer bg-transparent border-none">
            <span className="material-symbols-outlined">settings</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-container-high hidden md:block">
            <img
              className="w-full h-full object-cover"
              alt="User Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtxsQ0Ez3hsN5Bp_ZZWJxSJOHEIUmiJXfdWyXeyjErzhWkqca42k3Moi2-T44-tOXFBEf_XYWR6PYrnIWlmb96VBcUAocqA3ItCzp7OQCrOk_v0htokMDmq38PcanTbu_irIjBbW6vgcBW2h0kJO8lqdPK5oswqw1juopHzjfZ-k9epAA5fosnFlCnjuOBEc9vvOv0YcNqacDLfT6nMsFS1uCdoCx8Z6vvuGTaBHpsXTr3Qnsgz3oN5_bdCabno_CDvZuuqaPV6gc"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>

      <main className="flex-grow pt-24 pb-20 px-unit-lg md:px-margin-desktop max-w-screen-xl mx-auto overflow-x-hidden">
        {/* Hero Header Section */}
        <section className="mb-unit-xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-unit-lg">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-unit-sm block font-semibold">
                The Modern Atelier
              </span>
              <h1 className="font-display-lg text-display-lg md:text-display-lg-mobile mb-unit-md leading-tight text-primary font-bold">
                Insights &amp; Craft
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Exploring the intersection of modern pedagogy, generative intelligence, and minimalist design. Your curated guide to lifelong learning in the digital age.
              </p>
            </div>
            <div className="flex gap-unit-sm">
              <button
                onClick={() => alert('구독 이메일을 입력하려면 스크롤을 내려 "The Weekly Thread" 카드를 확인해 주세요.')}
                className="px-unit-lg py-unit-md bg-primary text-on-primary rounded-lg font-label-md text-label-md transition-all hover:bg-secondary active:scale-95 text-white border-none cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>
          <div className="mt-unit-xl h-[1px] bg-outline-variant w-full"></div>
        </section>

        {/* Featured Article (Asymmetric Layout) */}
        {filteredArticles.find(art => art.id === 'a1') && (
          <section className="mb-unit-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-unit-xl items-center">
              <div
                onClick={() => setSelectedArticle(articles[0])}
                className="md:col-span-7 group cursor-pointer overflow-hidden rounded-xl border border-outline-variant/30"
              >
                <div className="aspect-video bg-cover bg-center bg-surface-container-high transition-transform duration-700 group-hover:scale-105"
                     style={{ backgroundImage: `url('${articles[0].imgUrl}')` }}>
                </div>
              </div>
              <div className="md:col-span-5 flex flex-col justify-center">
                <div className="flex items-center gap-unit-md mb-unit-sm">
                  <span className="px-unit-sm py-unit-xs bg-[#F3EFE7] text-primary text-label-sm font-label-sm rounded uppercase tracking-wider font-semibold">
                    AI Engineering
                  </span>
                  <span className="text-on-surface-variant font-label-sm text-label-sm font-semibold">12 min read</span>
                </div>
                <h2
                  onClick={() => setSelectedArticle(articles[0])}
                  className="font-headline-lg text-headline-lg mb-unit-md hover:text-secondary transition-colors cursor-pointer font-bold leading-tight"
                >
                  {articles[0].title}
                </h2>
                <div className="quote-accent pl-unit-md mb-unit-md">
                  <p className="font-body-md text-body-md italic text-on-surface-variant leading-relaxed">
                    "{articles[0].quote}"
                  </p>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant mb-unit-lg leading-relaxed">
                  {articles[0].summary}
                </p>
                <button
                  onClick={() => setSelectedArticle(articles[0])}
                  className="flex items-center gap-unit-sm text-primary font-bold hover:text-secondary transition-all group bg-transparent border-none cursor-pointer self-start"
                >
                  Read Full Thesis
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                </button>
              </div>
            </div>
          </section>
        )}

        {/* Bento Grid - Design Tutorials */}
        <section className="mb-unit-xl">
          <h3 className="font-headline-md text-headline-md mb-unit-lg font-bold text-primary">Mastering the Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            
            {/* Tutorial Card 1 */}
            {filteredArticles.find(art => art.id === 'a2') && (
              <div
                onClick={() => setSelectedArticle(articles[1])}
                className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-xl shadow-sm group hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="aspect-square bg-surface-container mb-unit-lg rounded-lg overflow-hidden border border-outline-variant/20">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={articles[1].title}
                    src={articles[1].imgUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center mb-unit-sm">
                  <span className="text-label-sm font-label-sm text-secondary uppercase font-bold">{articles[1].category}</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">{articles[1].readTime}</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-unit-sm group-hover:text-secondary transition-colors font-semibold leading-snug">
                  {articles[1].title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-80 leading-relaxed">
                  {articles[1].summary}
                </p>
              </div>
            )}

            {/* Tutorial Card 2 */}
            {filteredArticles.find(art => art.id === 'a3') && (
              <div
                onClick={() => setSelectedArticle(articles[2])}
                className="bg-surface-container-lowest border border-outline-variant p-unit-lg rounded-xl shadow-sm group hover:-translate-y-1 transition-all cursor-pointer"
              >
                <div className="aspect-square bg-surface-container mb-unit-lg rounded-lg overflow-hidden border border-outline-variant/20">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={articles[2].title}
                    src={articles[2].imgUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-center mb-unit-sm">
                  <span className="text-label-sm font-label-sm text-secondary uppercase font-bold">{articles[2].category}</span>
                  <span className="text-label-sm font-label-sm text-on-surface-variant">{articles[2].readTime}</span>
                </div>
                <h4 className="font-headline-md text-headline-md mb-unit-sm group-hover:text-secondary transition-colors font-semibold leading-snug">
                  {articles[2].title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant opacity-80 leading-relaxed">
                  {articles[2].summary}
                </p>
              </div>
            )}

            {/* Newsletter Card */}
            <div className="bg-primary text-on-primary p-unit-lg rounded-xl flex flex-col justify-between text-white">
              <div>
                <span className="material-symbols-outlined text-4xl mb-unit-md text-yellow-600">auto_awesome</span>
                <h4 className="font-headline-lg text-headline-lg mb-unit-md font-bold text-white">The Weekly Thread</h4>
                <p className="font-body-md text-body-md text-white/70 mb-unit-xl leading-relaxed">
                  Subscribe to get the latest insights on education and AI delivered directly to your atelier.
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="space-y-unit-sm">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#1b1b1c] border-none text-white placeholder-white/40 rounded-lg p-unit-md focus:ring-2 focus:ring-secondary text-sm"
                  placeholder="atelier@email.com"
                />
                <button
                  type="submit"
                  className="w-full bg-secondary text-white py-unit-md rounded-lg font-bold hover:bg-yellow-600 transition-all cursor-pointer border-none"
                >
                  Join the Circle
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Learning Path / List View */}
        <section className="mb-unit-xl">
          <h3 className="font-headline-md text-headline-md mb-unit-lg font-bold text-primary">The Archive</h3>
          <div className="space-y-unit-lg">
            
            {/* Archive item 1 */}
            {filteredArticles.find(art => art.id === 'a4') && (
              <div
                onClick={() => setSelectedArticle(articles[3])}
                className="flex flex-col md:flex-row gap-unit-lg items-start py-unit-lg border-b border-outline-variant group cursor-pointer"
              >
                <span className="font-label-sm text-label-sm text-on-surface-variant md:w-32 pt-1 uppercase tracking-wider font-semibold text-on-surface-variant/70">
                  {articles[3].date}
                </span>
                <div className="flex-grow">
                  <div className="flex gap-unit-md mb-unit-sm">
                    <span className="text-label-sm font-label-sm text-secondary font-bold">{articles[3].category}</span>
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-semibold">• {articles[3].readTime}</span>
                  </div>
                  <h4 className="font-headline-lg text-headline-lg group-hover:text-secondary transition-colors mb-unit-sm font-bold leading-tight text-primary">
                    {articles[3].title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                    {articles[3].summary}
                  </p>
                </div>
                <div className="hidden md:block w-48 h-32 rounded-lg bg-surface-container overflow-hidden shrink-0 border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={articles[3].title}
                    src={articles[3].imgUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {/* Archive item 2 */}
            {filteredArticles.find(art => art.id === 'a5') && (
              <div
                onClick={() => setSelectedArticle(articles[4])}
                className="flex flex-col md:flex-row gap-unit-lg items-start py-unit-lg border-b border-outline-variant group cursor-pointer"
              >
                <span className="font-label-sm text-label-sm text-on-surface-variant md:w-32 pt-1 uppercase tracking-wider font-semibold text-on-surface-variant/70">
                  {articles[4].date}
                </span>
                <div className="flex-grow">
                  <div className="flex gap-unit-md mb-unit-sm">
                    <span className="text-label-sm font-label-sm text-secondary font-bold">{articles[4].category}</span>
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-semibold">• {articles[4].readTime}</span>
                  </div>
                  <h4 className="font-headline-lg text-headline-lg group-hover:text-secondary transition-colors mb-unit-sm font-bold leading-tight text-primary">
                    {articles[4].title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                    {articles[4].summary}
                  </p>
                </div>
                <div className="hidden md:block w-48 h-32 rounded-lg bg-surface-container overflow-hidden shrink-0 border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={articles[4].title}
                    src={articles[4].imgUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {/* Archive item 3 */}
            {filteredArticles.find(art => art.id === 'a6') && (
              <div
                onClick={() => setSelectedArticle(articles[5])}
                className="flex flex-col md:flex-row gap-unit-lg items-start py-unit-lg border-b border-outline-variant group cursor-pointer"
              >
                <span className="font-label-sm text-label-sm text-on-surface-variant md:w-32 pt-1 uppercase tracking-wider font-semibold text-on-surface-variant/70">
                  {articles[5].date}
                </span>
                <div className="flex-grow">
                  <div className="flex gap-unit-md mb-unit-sm">
                    <span className="text-label-sm font-label-sm text-secondary font-bold">{articles[5].category}</span>
                    <span className="text-label-sm font-label-sm text-on-surface-variant font-semibold">• {articles[5].readTime}</span>
                  </div>
                  <h4 className="font-headline-lg text-headline-lg group-hover:text-secondary transition-colors mb-unit-sm font-bold leading-tight text-primary">
                    {articles[5].title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
                    {articles[5].summary}
                  </p>
                </div>
                <div className="hidden md:block w-48 h-32 rounded-lg bg-surface-container overflow-hidden shrink-0 border border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    alt={articles[5].title}
                    src={articles[5].imgUrl}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Pagination */}
        <section className="flex flex-col md:flex-row items-center justify-between mt-unit-xl border-t border-outline-variant pt-unit-xl gap-unit-lg">
          <div className="flex items-center gap-unit-sm">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all cursor-pointer bg-transparent">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <div className="flex gap-unit-xs">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold text-white">1</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md cursor-pointer bg-transparent border-none">2</button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md cursor-pointer bg-transparent border-none">3</button>
              <span className="w-10 h-10 flex items-center justify-center text-on-surface-variant select-none">...</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md cursor-pointer bg-transparent border-none">12</button>
            </div>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary transition-all cursor-pointer bg-transparent">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <div className="text-on-surface-variant font-label-md text-label-md italic font-semibold">
            Showing 1-5 of 60 Insights
          </div>
        </section>
      </main>

      {/* Article Reader Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-outline-variant rounded-xl p-unit-lg md:p-unit-xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl relative text-on-surface space-y-6">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-primary hover:text-secondary material-symbols-outlined cursor-pointer bg-transparent border-none"
            >
              close
            </button>
            <div className="space-y-2">
              <div className="flex items-center gap-unit-md">
                <span className="px-3 py-1 bg-[#F3EFE7] text-primary text-xs rounded uppercase font-bold tracking-wider">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-on-surface-variant/80 font-bold">{selectedArticle.readTime}</span>
              </div>
              <h2 className="font-headline-lg text-headline-lg font-bold text-primary leading-tight">{selectedArticle.title}</h2>
              {selectedArticle.date && (
                <p className="text-xs text-on-surface-variant font-semibold uppercase">{selectedArticle.date}</p>
              )}
            </div>
            <div className="aspect-video rounded-lg overflow-hidden border border-outline-variant bg-surface-container-high mb-4">
              <img
                className="w-full h-full object-cover"
                alt={selectedArticle.title}
                src={selectedArticle.imgUrl}
                referrerPolicy="no-referrer"
              />
            </div>
            {selectedArticle.quote && (
              <div className="quote-accent pl-4 italic text-on-surface-variant bg-surface-container-low py-3 pr-3 text-sm">
                "{selectedArticle.quote}"
              </div>
            )}
            <div className="font-body-md text-on-surface-variant space-y-4 leading-relaxed whitespace-pre-wrap">
              <p>{selectedArticle.content}</p>
              <p>
                In the modern landscape, knowledge alone is commoditized. True transformation occurs when learners synthesize these insights into their specialized professional contexts, establishing distinct, high-leverage intellectual capital.
              </p>
            </div>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-6 py-2 bg-primary text-on-primary font-bold rounded hover:bg-secondary cursor-pointer text-white border-none"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
