import React, { useState } from 'react';

interface CoursesProps {
  onNavigate: (page: string) => void;
}

type CategoryType = 'all' | 'b2b' | 'b2g' | 'b2c';

export default function Courses({ onNavigate }: CoursesProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');

  const handleEnrollClick = () => {
    onNavigate('contact');
  };

  const handleCourseClick = () => {
    onNavigate('course-detail');
  };

  return (
    <div id="courses-view" className="bg-background text-on-background">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl">
        {/* Hero Section: The Modern Atelier Intro */}
        <section className="mb-unit-xl">
          <div className="max-w-3xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-unit-sm block font-semibold">
              MODUZ ACADEMY
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-unit-md leading-tight">
              The Alchemy of Intelligence.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-unit-lg leading-relaxed">
              A curated educational atelier where academic rigor meets modern application. We provide the intellectual framework to master Artificial Intelligence across corporate, public, and individual domains.
            </p>
            <div className="flex gap-unit-md">
              <button
                onClick={() => {
                  const el = document.getElementById('curriculum-start');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-unit-lg py-unit-md bg-primary text-on-primary font-label-md text-label-md rounded-none hover:bg-secondary transition-all cursor-pointer"
              >
                Browse Curriculum
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-unit-lg py-unit-md border border-primary text-primary font-label-md text-label-md rounded-none hover:bg-surface-container-low transition-all cursor-pointer"
              >
                Partner with Us
              </button>
            </div>
          </div>
        </section>

        {/* Category Filter/Selector */}
        <div id="curriculum-start" className="flex flex-wrap gap-unit-md mb-unit-xl border-b border-outline-variant pb-unit-md">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-unit-md py-unit-sm font-label-md text-label-md cursor-pointer transition-all ${
              activeCategory === 'all'
                ? 'bg-secondary-container/20 text-secondary border-b-2 border-secondary font-semibold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            All Disciplines
          </button>
          <button
            onClick={() => setActiveCategory('b2b')}
            className={`px-unit-md py-unit-sm font-label-md text-label-md cursor-pointer transition-all ${
              activeCategory === 'b2b'
                ? 'bg-secondary-container/20 text-secondary border-b-2 border-secondary font-semibold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Corporate Strategy (B2B)
          </button>
          <button
            onClick={() => setActiveCategory('b2g')}
            className={`px-unit-md py-unit-sm font-label-md text-label-md cursor-pointer transition-all ${
              activeCategory === 'b2g'
                ? 'bg-secondary-container/20 text-secondary border-b-2 border-secondary font-semibold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Public Education (B2G)
          </button>
          <button
            onClick={() => setActiveCategory('b2c')}
            className={`px-unit-md py-unit-sm font-label-md text-label-md cursor-pointer transition-all ${
              activeCategory === 'b2c'
                ? 'bg-secondary-container/20 text-secondary border-b-2 border-secondary font-semibold'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            Professional Masterclass (B2C)
          </button>
        </div>

        {/* Course Sections (Bento Grid Style) */}

        {/* Section 1: Corporate AI Strategy */}
        {(activeCategory === 'all' || activeCategory === 'b2b') && (
          <div className="mb-unit-xl">
            <div className="flex items-center gap-unit-md mb-unit-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary font-medium">Corporate AI Strategy</h2>
              <div className="h-[1px] flex-grow bg-outline-variant"></div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">B2B INITIATIVES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {/* Course Card 1 */}
              <div
                onClick={handleCourseClick}
                className="bg-surface-container-lowest border border-outline-variant p-unit-lg flex flex-col transition-all cursor-pointer hover:border-secondary hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="mb-unit-lg aspect-video w-full overflow-hidden bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="AI Leadership & Governance"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwJHFO5uSbdiFFjMC4oBfQbrd3YsHOzYIK03ouFJWsheSj1PQ5IYWJKv2m3QLtR8GPxSTllIjWS1o1C0Y1cJv_rHzkYFjsqrh8IlhwYyywMI0pCuOsf97v8uuqRRK0qF1bAxvz8i7OMZHvGfB4tdWnj0UOf-oDzPsE2lmPGPkig9hKC_Wlxl4LOIBITa95Z9y7bbRCvxYpmUuEPmHjuOk707hncAZltmIrMELuEK5tSJG_UZjRU7NfivtLXVaJ4D9Hf9B-lzzZzkU"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-unit-sm">
                  <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-unit-sm py-unit-xs font-semibold">
                    MANAGEMENT
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">12 WEEKS</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-unit-sm font-semibold">
                  AI Leadership &amp; Governance
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-unit-xl flex-grow">
                  Defining the ethical and operational framework for enterprise-wide AI implementation. Focus on risk management and ROI.
                </p>
                <div className="architectural-progress mb-unit-md w-full bg-[#e6e2da] h-1">
                  <div className="bg-secondary h-full" style={{ width: '75%' }}></div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnrollClick();
                  }}
                  className="w-full py-unit-md bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors cursor-pointer"
                >
                  Enroll Organization
                </button>
              </div>

              {/* Course Card 2 */}
              <div
                onClick={handleCourseClick}
                className="bg-surface-container-lowest border border-outline-variant p-unit-lg flex flex-col transition-all cursor-pointer hover:border-secondary hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="mb-unit-lg aspect-video w-full overflow-hidden bg-surface-container-high">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    alt="Operational AI Integration"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvXXHp8DWXPf6507ipioGHyI471VFO8Lmgm_HLMXVHsvfBAcl-2mEM9dgDa9xwUD8SAPJIXsa_h5l4KFmU7vifBSNqjfI9wLzCRRayocYbpd87Rlq--NpUKH9UnKO9815o5Fj2Rq3XAGxw3uM5SO8yB-m-zhkVPpmnYVvh1iHqALT2LvFA8hnxJUB9gAo7_NpBYvPWoFQOpGD3z0TUwSvIxK_F0h8kx2Pp-67i0QSOiwyQ-p_u-Xja8P-KXdA1GhPNt6riu7jmNU4"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-start mb-unit-sm">
                  <span className="font-label-sm text-label-sm text-secondary bg-secondary-container/10 px-unit-sm py-unit-xs font-semibold">
                    OPERATIONS
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">8 WEEKS</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-unit-sm font-semibold">
                  Operational AI Integration
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-unit-xl flex-grow">
                  Practical workshops on automating workflows and integrating custom LLMs into existing legacy stacks safely.
                </p>
                <div className="architectural-progress mb-unit-md w-full bg-[#e6e2da] h-1">
                  <div className="bg-secondary h-full" style={{ width: '50%' }}></div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEnrollClick();
                  }}
                  className="w-full py-unit-md bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary transition-colors cursor-pointer"
                >
                  Enroll Organization
                </button>
              </div>

              {/* Featured Quote Block */}
              <div className="lg:flex flex-col justify-center p-unit-lg bg-surface-container-low border border-outline-variant quote-accent">
                <span className="material-symbols-outlined text-secondary text-4xl mb-unit-md">format_quote</span>
                <blockquote className="font-headline-md text-headline-md text-primary italic mb-unit-md leading-tight font-medium">
                  "Intelligence is the new raw material of industry. How we refine it defines our legacy."
                </blockquote>
                <p className="font-label-md text-label-md text-on-surface-variant">— Dr. Aris Thorne, MODUZ Provost</p>
              </div>
            </div>
          </div>
        )}

        {/* Section 2: Public AI Education */}
        {(activeCategory === 'all' || activeCategory === 'b2g') && (
          <div className="mb-unit-xl">
            <div className="flex items-center gap-unit-md mb-unit-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary font-medium">Public &amp; School Education</h2>
              <div className="h-[1px] flex-grow bg-outline-variant"></div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">B2G INITIATIVES</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              {/* Large Card */}
              <div
                onClick={handleCourseClick}
                className="relative overflow-hidden group border border-outline-variant min-h-[400px] flex items-end cursor-pointer"
              >
                <div className="absolute inset-0 z-0">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="AI Literacy for All"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC37lAELmBzN4Mgz8aTR8Wx5H2lxiGcfzTASjPJClZ-ga2-dyFm9Thv-Bzrkp79neXsvBGxcw10XRgtsO2yd2ZkR8zcSmFnn8OSckbHecbi7h7nEE5M9X3ueXVW8mEfwPYXfofsExp4_qX6DdTJh8JKnOVZw-UIttK-b0c4oU6dCZVhu_auUNqGCc0lclzgRWHpeRgMUUjvuLcBEJmBCgJMwF1w_90o7Mxji_19o72XrD3dntEaw-EmsqQKLGQCosWLS5SASFTo1fE"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="relative z-10 p-unit-xl text-on-primary w-full text-white">
                  <span className="font-label-sm text-label-sm text-secondary-fixed mb-unit-sm block uppercase tracking-widest font-semibold text-yellow-600">
                    Government Partnership
                  </span>
                  <h3 className="font-headline-lg text-headline-lg mb-unit-md font-semibold text-white">
                    AI Literacy for All
                  </h3>
                  <p className="font-body-md text-body-md mb-unit-lg max-w-lg opacity-90 text-white/90">
                    Developing foundational curricula for secondary schools and community centers to bridge the digital divide.
                  </p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNavigate('contact');
                    }}
                    className="px-unit-lg py-unit-md bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary-fixed transition-colors text-white cursor-pointer border-none"
                  >
                    Request Program Brief
                  </button>
                </div>
              </div>

              <div className="grid grid-rows-2 gap-gutter">
                {/* Smaller List Card 1 */}
                <div
                  onClick={handleCourseClick}
                  className="bg-surface-container-lowest border border-outline-variant p-unit-lg flex gap-unit-lg items-center group cursor-pointer hover:bg-surface-container-low transition-colors"
                >
                  <div className="w-24 h-24 bg-surface-container-high shrink-0 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Educator Training Labs"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN5a9XBJAaCFADMcUJ9t0WMVA8jMhM3g0qwtjYcXnhbgJFwZgzX9_afZ1N4oQkbk4--K04LPTiHQ4xuuxH2epk_A9WdGVbUXttpvwjU-iqFN0ISF4hwl9Q-IybpCe0POTcZk9TxjqzB2v-po_tyxkuB9ZLdFE8WeXUXh94kzgOjHNA3rBq3ZImnuC0SwOV0cpkH1bZlBlLlf7I6vSt6jRcEMzhDRqlepOXcbbBCsTYGbJI88GbR2iGiIhX6xkssUFD_TSeWzsRDLY"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-unit-xs font-semibold group-hover:text-secondary transition-colors">
                      Educator Training Labs
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Certifying 10,000 public school teachers in responsible AI pedagogy.
                    </p>
                  </div>
                </div>

                {/* Smaller List Card 2 */}
                <div
                  onClick={handleCourseClick}
                  className="bg-surface-container-lowest border border-outline-variant p-unit-lg flex gap-unit-lg items-center group cursor-pointer hover:bg-surface-container-low transition-colors"
                >
                  <div className="w-24 h-24 bg-surface-container-high shrink-0 overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt="Public Policy Workshops"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqjLUnDNpDFPkTLGTM_dHeCCsfygx_s49L0UnVFrTTAsXxuBt0zf_dbIgjmvX2Fzxfk4pezydxpre_rHxiwPlx1ogJwJ88U0pKjU98KOwyaR0bHFwYx9JUAW-z8JqpG8L6hABYFVDKbdIG9Y_4GmH2KmJ8W-I3w3XAlMj6TjgqxWVjmFD-kifmc4ITbfKPnjQjcPDRx5xgwGJdVp1rjbCuYEOWg8P9i43DtKv0lkIws5a9T6-1XRsr_IGS8PuLZINT7Lr__niWjJ0"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline-md text-headline-md text-primary mb-unit-xs font-semibold group-hover:text-secondary transition-colors">
                      Public Policy Workshops
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Equipping legislators with technical knowledge for better regulation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section 3: Professional Masterclass */}
        {(activeCategory === 'all' || activeCategory === 'b2c') && (
          <div className="mb-unit-xl">
            <div className="flex items-center gap-unit-md mb-unit-lg">
              <h2 className="font-headline-lg text-headline-lg text-primary font-medium font-semibold">Professional Masterclasses</h2>
              <div className="h-[1px] flex-grow bg-outline-variant"></div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">B2C EXCELLENCE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Masterclass Card 1 */}
              <div
                onClick={handleCourseClick}
                className="border border-outline-variant bg-surface overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Generative Design Mastery"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDArTskYSqCZY3W39CEgskJd8u9CUdtF54qQVyxFskULYiWtGhy3_cIAxVDp2hD6sO1WLa7pvVocqrPW_AFQLXTISOCIr-A2f5WSo2PM6uQTLvMgoqRU3BizPocm9H5kkhXiWB0USsMkrTWsu57aH5Chn5x0AZjfdU5jO6KxJscbgU6q5z8snyvbu5_nAcCrh9wx6bn3AfaAYkpmghTBs4252yoBy982q707xQdrLhEB3VczQYeGAcqqwkpGqqug7OHHUsiu2Nf-Uc"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-unit-md left-unit-md bg-primary text-on-primary px-unit-sm py-1 text-label-sm font-label-sm text-white font-semibold">
                      LEVEL: ADVANCED
                    </div>
                  </div>
                  <div className="p-unit-lg">
                    <h4 className="font-headline-md text-headline-md text-primary mb-unit-sm font-semibold group-hover:text-secondary transition-colors">
                      Generative Design Mastery
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Mastering diffusion models and control nets for ultra-high-end creative production.
                    </p>
                  </div>
                </div>
                <div className="p-unit-lg pt-0">
                  <div className="flex justify-between items-center pt-unit-md border-t border-outline-variant">
                    <span className="font-label-md text-label-md text-primary font-bold">$1,200</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick();
                      }}
                      className="text-secondary font-label-md text-label-md flex items-center gap-unit-xs hover:gap-unit-sm transition-all bg-transparent border-none cursor-pointer"
                    >
                      View Masterclass <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Masterclass Card 2 */}
              <div
                onClick={handleCourseClick}
                className="border border-outline-variant bg-surface overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="AI-Augmented Copywriting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEmwrKHtxmud0VGdmd6GDEcTNN-G9nx4UyjL5LYTjX_rxkYqh3PZtsIDwNYolWLVBpasA5_eOhuE3kQxDcoTu46yiKO5pGEyBYZ95h_sGliVghSywgGoKnmPoNF0iU857a7JXWOzu3Zm7dIbe3M9yADEUbuciUziTtSBvyLGcH-ixQ9eQhVhGjqKT3-cX2iovrvLmpyqzWCgAYbrfTZHMrxf_jbKRmfPJIiHOF73XyritUTADcArohLCthr1GPFP6YILXB7RZmnN0"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-unit-md left-unit-md bg-primary text-on-primary px-unit-sm py-1 text-label-sm font-label-sm text-white font-semibold">
                      LEVEL: INTERMEDIATE
                    </div>
                  </div>
                  <div className="p-unit-lg">
                    <h4 className="font-headline-md text-headline-md text-primary mb-unit-sm font-semibold group-hover:text-secondary transition-colors">
                      AI-Augmented Copywriting
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Using LLMs to enhance editorial depth without losing the human artisan's touch.
                    </p>
                  </div>
                </div>
                <div className="p-unit-lg pt-0">
                  <div className="flex justify-between items-center pt-unit-md border-t border-outline-variant">
                    <span className="font-label-md text-label-md text-primary font-bold">$850</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick();
                      }}
                      className="text-secondary font-label-md text-label-md flex items-center gap-unit-xs hover:gap-unit-sm transition-all bg-transparent border-none cursor-pointer"
                    >
                      View Masterclass <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Masterclass Card 3 */}
              <div
                onClick={handleCourseClick}
                className="border border-outline-variant bg-surface overflow-hidden hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="h-48 overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      alt="Personal AI OS Setup"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuASnKE2ztVuvCtkIBFwf8C4nUrhvH9BD82jlY3Br8YO7fZKFZC6Pzi93ejF6An68j_tmCeb_rbJAvHdvxronXNo51hQlyjNZPfljRPBjcXkJBDBUXTmkXw0SaZlp46__ZDDGjmlWVEuMyx5O3IoVOhuhvq4oedci99psfELqayUMYcqt6SWhldytx1gv05EvoFv0SqpJHepTpxgriUejL2sYp7q09rEdsezRGkdYOXVKfFyQEY7IsqN4vHoBu_fnjWpJb7WdOQLhcg"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-unit-md left-unit-md bg-primary text-on-primary px-unit-sm py-1 text-label-sm font-label-sm text-white font-semibold">
                      LEVEL: EXECUTIVE
                    </div>
                  </div>
                  <div className="p-unit-lg">
                    <h4 className="font-headline-md text-headline-md text-primary mb-unit-sm font-semibold group-hover:text-secondary transition-colors">
                      Personal AI OS Setup
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      Building a private, local AI second brain for high-performance knowledge workers.
                    </p>
                  </div>
                </div>
                <div className="p-unit-lg pt-0">
                  <div className="flex justify-between items-center pt-unit-md border-t border-outline-variant">
                    <span className="font-label-md text-label-md text-primary font-bold">$1,500</span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCourseClick();
                      }}
                      className="text-secondary font-label-md text-label-md flex items-center gap-unit-xs hover:gap-unit-sm transition-all bg-transparent border-none cursor-pointer"
                    >
                      View Masterclass <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
