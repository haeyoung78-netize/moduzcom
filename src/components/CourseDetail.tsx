import React, { useState } from 'react';

interface CourseDetailProps {
  onNavigate: (page: string) => void;
}

interface SyllabusModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

export default function CourseDetail({ onNavigate }: CourseDetailProps) {
  const [activeModule, setActiveModule] = useState<string | null>('m1');
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const syllabus: SyllabusModule[] = [
    {
      id: 'm1',
      title: 'Module 1: Foundational LLM APIs & Integration Setup',
      duration: 'Week 1-2',
      description: 'Mastering the fundamentals of API connections, rate limiting, token optimization, and temperature configurations in enterprise applications.',
      topics: [
        'API Architecture & Client Initializations',
        'Payload Structures and Streaming Integrations',
        'Managing Rate Limits & Token Window Policies',
        'Prompt Injection Guardrails and Basic Moderation'
      ]
    },
    {
      id: 'm2',
      title: 'Module 2: Vector Databases & Retrieval-Augmented Generation (RAG)',
      duration: 'Week 3-4',
      description: 'Understanding how to ground large language models using private company documents, vector databases, and semantic search algorithms.',
      topics: [
        'Text Chunking & Embedding Model pipelines',
        'Choosing Vector Databases: PGVector & Pinecone',
        'Designing Semantic Hybrid Search Queries',
        'Metadata Filtering and RAG Evaluation Frameworks'
      ]
    },
    {
      id: 'm3',
      title: 'Module 3: Multi-Agent Workflow Automation',
      duration: 'Week 5-6',
      description: 'Building autonomous and human-in-the-loop multi-agent systems to orchestrate complex corporate workflows and automate administrative tasks.',
      topics: [
        'Designing Multi-Agent State Diagrams',
        'Executing Database Queries & API Actions via Agents',
        'Implementing Human-in-the-Loop Approval Interventions',
        'Error Handling and Agent Loop Prevention Strategies'
      ]
    },
    {
      id: 'm4',
      title: 'Module 4: Enterprise Safety, Privacy & Cloud Deployments',
      duration: 'Week 7-8',
      description: 'Finalizing security protocols, managing custom VPC environments, encrypting secrets, and setting up persistent monitoring dashboards.',
      topics: [
        'VPC Tunneling and Private API Endpoints',
        'PII Redaction Filters and Compliance (GDPR/HIPAA)',
        'CI/CD Deployment Pipelines for Enterprise Apps',
        'Monitoring Latency, Cost, and Accuracy Dashboards'
      ]
    }
  ];

  const handleToggleModule = (id: string) => {
    setActiveModule(activeModule === id ? null : id);
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setShowInquiryModal(false);
      alert('귀사 맞춤형 온보딩 및 도입 상담 신청이 성공적으로 전달되었습니다.');
    }, 1000);
  };

  return (
    <div id="course-detail-view" className="bg-surface text-on-surface">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl">
        {/* Breadcrumbs */}
        <nav className="mb-unit-md">
          <button
            onClick={() => onNavigate('courses')}
            className="flex items-center gap-1 text-on-surface-variant hover:text-secondary text-label-md font-semibold cursor-pointer bg-transparent border-none"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span> Back to Academy
          </button>
        </nav>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-unit-xl">
          <div className="lg:col-span-8 space-y-unit-lg">
            <div className="flex flex-wrap items-center gap-unit-md">
              <span className="px-3 py-1 bg-secondary-container/20 text-secondary font-label-sm text-label-sm rounded uppercase tracking-wider font-bold">
                B2B INITIATIVE
              </span>
              <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm rounded uppercase tracking-wider font-semibold">
                OPERATIONS
              </span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-primary leading-tight">
              Operational AI Integration
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              A rigorous 8-week engineering course designed for enterprise developers, solution architects, and technology leaders. Learn to seamlessly weave generative AI into your corporate pipelines while maintaining absolute safety, compliance, and cost-efficiency.
            </p>

            {/* Course image */}
            <div className="aspect-[21/9] rounded-xl overflow-hidden border border-outline-variant/30 bg-surface-container-high shadow-inner">
              <img
                className="w-full h-full object-cover"
                alt="Operational AI Integration Detail"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvXXHp8DWXPf6507ipioGHyI471VFO8Lmgm_HLMXVHsvfBAcl-2mEM9dgDa9xwUD8SAPJIXsa_h5l4KFmU7vifBSNqjfI9wLzCRRayocYbpd87Rlq--NpUKH9UnKO9815o5Fj2Rq3XAGxw3uM5SO8yB-m-zhkVPpmnYVvh1iHqALT2LvFA8hnxJUB9gAo7_NpBYvPWoFQOpGD3z0TUwSvIxK_F0h8kx2Pp-67i0QSOiwyQ-p_u-Xja8P-KXdA1GhPNt6riu7jmNU4"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Core Info Sidebar Card */}
          <div className="lg:col-span-4 bg-white border border-outline-variant p-unit-lg rounded-xl space-y-unit-lg sticky top-24 shadow-sm">
            <h3 className="font-headline-md text-headline-md text-primary font-bold pb-unit-sm border-b border-outline-variant/30">
              Course Information
            </h3>
            <ul className="space-y-unit-md">
              <li className="flex justify-between items-center text-label-md font-label-md">
                <span className="text-on-surface-variant">Duration</span>
                <span className="text-primary font-bold">8 Weeks</span>
              </li>
              <li className="flex justify-between items-center text-label-md font-label-md">
                <span className="text-on-surface-variant">Class Format</span>
                <span className="text-primary font-bold">Cohort-based / Online</span>
              </li>
              <li className="flex justify-between items-center text-label-md font-label-md">
                <span className="text-on-surface-variant">Target Audience</span>
                <span className="text-primary font-bold">CTOs, Devs, Architects</span>
              </li>
              <li className="flex justify-between items-center text-label-md font-label-md">
                <span className="text-on-surface-variant">Completion Rate</span>
                <span className="text-primary font-bold text-secondary">95% Certified</span>
              </li>
            </ul>

            <div className="pt-unit-sm">
              <button
                onClick={() => setShowInquiryModal(true)}
                className="w-full py-4 bg-primary text-on-primary font-bold text-body-lg rounded-lg hover:bg-secondary transition-all cursor-pointer text-white border-none"
              >
                Inquire For Cohort
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full mt-2 py-3 border border-outline-variant text-primary font-bold text-label-md rounded-lg hover:bg-surface-container-low transition-all cursor-pointer bg-transparent"
              >
                Request Custom Pitch
              </button>
            </div>
          </div>
        </section>

        {/* Detailed Description & Interactive Syllabus (Accordions) */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start mb-unit-xl">
          <div className="lg:col-span-8 space-y-unit-lg">
            <h2 className="font-headline-lg text-headline-lg font-bold text-primary">Syllabus Overview</h2>
            <p className="font-body-md text-on-surface-variant leading-relaxed">
              Our curriculum is updated monthly to align with the latest models and security practices. Each module contains actionable workshops, code repositories, and private sandbox access.
            </p>

            {/* Accordion Component */}
            <div className="space-y-unit-sm">
              {syllabus.map((module) => {
                const isOpen = activeModule === module.id;
                return (
                  <div key={module.id} className="border border-outline-variant rounded-xl overflow-hidden bg-white">
                    <button
                      onClick={() => handleToggleModule(module.id)}
                      className="w-full px-unit-lg py-5 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors cursor-pointer bg-transparent border-none text-on-surface"
                    >
                      <div className="space-y-1">
                        <span className="text-xs text-secondary font-bold uppercase tracking-widest">{module.duration}</span>
                        <h4 className="font-headline-md text-headline-md font-bold text-primary">{module.title}</h4>
                      </div>
                      <span className={`material-symbols-outlined transition-transform duration-300 text-primary ${isOpen ? 'rotate-180' : ''}`}>
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-unit-lg pb-unit-lg pt-unit-sm border-t border-outline-variant/30 space-y-4 text-on-surface-variant animate-fade-in">
                        <p className="font-body-md leading-relaxed">{module.description}</p>
                        <div className="space-y-2">
                          <p className="text-xs font-bold text-primary uppercase tracking-wider">주요 학습 주제:</p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {module.topics.map((topic, index) => (
                              <li key={index} className="flex items-center gap-2 font-label-md text-label-md text-on-surface">
                                <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                                {topic}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Prerequisites */}
            <div className="bg-surface-container-low p-unit-lg border border-outline-variant rounded-xl space-y-unit-sm">
              <h4 className="font-headline-md text-headline-md font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">info</span> Prerequisites &amp; Setup
              </h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                Attendees should possess intermediate experience with JavaScript/Python and a conceptual understanding of web services. All sandbox credentials, private API access codes, and template repositories are provided at the start of the cohort.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Cohort Inquiry Modal */}
      {showInquiryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white border border-outline-variant rounded-xl p-unit-lg md:p-unit-xl max-w-lg w-full shadow-2xl relative text-on-surface space-y-6">
            <button
              onClick={() => setShowInquiryModal(false)}
              className="absolute top-4 right-4 text-primary hover:text-secondary material-symbols-outlined cursor-pointer bg-transparent border-none"
            >
              close
            </button>
            <div className="space-y-2">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                ENTERPRISE INQUIRY
              </span>
              <h3 className="font-headline-lg text-headline-lg font-bold text-primary">도입 및 단체 수강 문의</h3>
              <p className="font-body-md text-on-surface-variant">
                Operational AI Integration 과정을 귀사 전용 온보딩 워크숍이나 정규 직무 위탁 교육으로 연계해 드립니다.
              </p>
            </div>
            <form onSubmit={handleInquirySubmit} className="space-y-unit-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary block">회사명</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                    placeholder="올인원 주식회사"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary block">담당자 이름</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                    placeholder="홍길동"
                  />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-primary block">연락용 이메일 주소</label>
                <input
                  type="email"
                  required
                  className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                  placeholder="contact@company.com"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-primary block">요청사항 및 예상 참석 인원</label>
                <textarea
                  className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                  placeholder="예: 사내 엔지니어 15명 대상, RAG 중심 8주 직무 교육 수강권 구매 및 워크숍 패키지"
                  rows={3}
                ></textarea>
              </div>
              <div className="flex gap-4 pt-2">
                <button
                  onClick={() => setShowInquiryModal(false)}
                  type="button"
                  className="w-1/2 py-3 border border-outline-variant rounded-lg hover:bg-surface-container-low font-bold cursor-pointer bg-transparent"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 bg-primary text-on-primary font-bold rounded-lg hover:bg-secondary cursor-pointer text-white border-none"
                >
                  상담 신청하기
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
