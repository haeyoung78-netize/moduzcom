import React, { useState } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
    privacy: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert('개인정보 수집 및 이용에 동의하셔야 문의를 보내실 수 있습니다.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      alert('문의가 성공적으로 전달되었습니다. 곧 연락드리겠습니다.');
      setFormData({ name: '', contact: '', email: '', message: '', privacy: false });
      setSubmitted(false);
    }, 800);
  };

  return (
    <div id="home-view" className="w-full text-on-background bg-surface">
      {/* Immersive Full-Width Hero Section */}
      <section className="relative min-h-[900px] md:min-h-[1100px] flex items-center overflow-hidden">
        {/* Full Width Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Professional Portrait"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEV9fuo6lFYebyQoUtIsVq4d2PYcsYVF9bxA8iSWtDkkYBBKhKHugbykwme-B43FWfmDzjRk8TK2hBVfSpxvnkF180GnjwfaLPWY8C69HL_m6E8nGhTxqnE68K7NAKxIobT6Simgp7UTAtm6SkOfbbldhxN80Sy5yfvA4RD6mPZLYFqxg59AgoqzIXM7ZqUEQJS1PEC7HvaVZiw8e4zENRBwk0M6UXoXlhqdcgUm9RgZFbLFIob_ziKcAHKGKaw5djNf5-U6gtYrhb6A"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent md:block hidden"></div>
          <div className="absolute inset-0 bg-white/75 md:hidden block"></div>
        </div>

        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop w-full">
          <div className="max-w-2xl space-y-unit-lg">
            <span className="inline-block px-unit-sm py-unit-xs bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded uppercase tracking-widest">
              Education with Empathy
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary leading-tight">
              사람과 AI를 잇는,<br />
              <span className="text-secondary">성장의 기술</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              단순한 도구로서의 AI를 넘어, 인간의 잠재력을 극대화하는 교육을 제안합니다. MODUZ는 기술의 깊이와 인간의 따뜻함을 동시에 추구합니다.
            </p>
            <div className="flex flex-wrap gap-unit-md pt-unit-md">
              <button
                id="btn-start-hero"
                onClick={() => onNavigate('courses')}
                className="px-8 py-4 bg-primary text-on-primary font-label-md text-label-md rounded-lg hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/20 cursor-pointer"
              >
                지금 시작하기
              </button>
              <button
                id="btn-contact-hero"
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 border border-primary text-primary font-label-md text-label-md rounded-lg hover:bg-primary/5 transition-all cursor-pointer"
              >
                교육 문의
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-scroll flex flex-col items-center gap-2 opacity-50 pointer-events-none">
          <span className="text-[10px] font-label-sm tracking-widest uppercase text-primary">Scroll</span>
          <span className="material-symbols-outlined text-primary">expand_more</span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-[160px] bg-surface">
        <div className="max-w-4xl mx-auto px-margin-mobile text-center space-y-unit-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary">Philosophy</h2>
          <div className="thread-knowledge pl-unit-lg text-left inline-block">
            <p className="font-display-lg-mobile text-display-lg-mobile md:text-headline-lg leading-relaxed text-primary italic">
              "Technology as a tool, People at the center."
            </p>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-loose max-w-2xl mx-auto">
            우리는 기술이 인간을 대체하는 미래가 아닌, 기술을 통해 인간이 더 고귀한 가치를 창출하는 미래를 믿습니다. MODUZ의 모든 커리큘럼은 이러한 인간 중심의 철학에서 시작됩니다.
          </p>
        </div>
      </section>

      {/* Why MODUZ (Bento Grid) */}
      <section className="py-[160px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="p-unit-lg bg-surface border border-outline-variant/30 rounded-xl hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-secondary text-4xl mb-unit-md">psychology</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-unit-sm">Learning Philosophy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                단순 스킬 전수가 아닌, 문제 해결을 위한 사고의 틀을 제공합니다.
              </p>
            </div>
            <div className="p-unit-lg bg-surface border border-outline-variant/30 rounded-xl hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-secondary text-4xl mb-unit-md">verified_user</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-unit-sm">Expert Support</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                각 분야 최고 수준의 퍼실리테이터가 여러분의 성장을 직접 돕습니다.
              </p>
            </div>
            <div className="p-unit-lg bg-surface border border-outline-variant/30 rounded-xl hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-secondary text-4xl mb-unit-md">groups</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-unit-sm">Community Growth</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                함께 배우고 나누며 지속 가능한 성장의 생태계를 구축합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academy Courses */}
      <section className="py-[160px] px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <div className="flex justify-between items-end mb-unit-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary">Academy Courses</h2>
            <button
              onClick={() => onNavigate('courses')}
              className="text-secondary font-label-md text-label-md flex items-center gap-unit-xs hover:underline cursor-pointer bg-transparent border-none"
            >
              모든 강의 보기 <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {/* Course Card 1 - AI Strategy -> Link to CourseDetail */}
            <div
              onClick={() => onNavigate('course-detail')}
              className="group bg-surface border border-outline-variant/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Corporate AI Strategy"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB2X0Z6CXh8-YJsfl4z9K0nJ_yfdMZKHrU8WeKkRA9yRyw_Ejx3Gx3fv5PBkRa25q7JAO-hmhf6StbHsBOAVzeETtBhHfRw7MJG6wbC9VEzto854G03MPTYbIxhiSaZvBxhnuTgq4psqCgtrNHL_cutcypOGBVLGxSQgKsan8slhd5bazzDdvxs6MiVg1PV9hno5wyeOOeCWfQoBnVx32bnSmt3Hw6Rm1vRiL6oqB5oNWfXI6Npmf0YSHWZDmbjuZJuzkEUnlIhTY"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] px-2 py-1 rounded font-bold">
                    EXECUTIVE
                  </span>
                </div>
              </div>
              <div className="p-unit-md">
                <h4 className="font-headline-md text-body-lg text-primary mb-unit-sm">
                  Corporate AI Strategy
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-unit-md">
                  기업의 미래를 결정짓는 AI 도입 전략과 실행 로드맵
                </p>
                <div className="w-full bg-surface-container h-1 mb-unit-md">
                  <div className="bg-secondary h-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>

            {/* Course Card 2 - ChatGPT Mastery -> link to general details */}
            <div
              onClick={() => onNavigate('course-detail')}
              className="group bg-surface border border-outline-variant/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="ChatGPT & Gemini Mastery"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrWy4_thNWp9xOqrRQ0oajU6FAkYwqGHqje0fnnrlBv-pjAqXPxtahWjD_z7O1xxCRZfBtpwjhggMkIH_exKucoZtLyDucPSrpbX-v1wvFwYG5JM49JLrsyfCQMK7xBPmd82jRyfz57AsOzV8uZQIOkVS3fE2TRXTSIWBarndb8fWvd4_JFRzP6CxDFaKSs7dKmjv43K2FV9XqmYya52az2o6auikO3bKuSIM26h6c4Iiz-5S2nq2IOZWPLUvwGZfIB_0MLnKlBxA"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] px-2 py-1 rounded font-bold">
                    ESSENTIAL
                  </span>
                </div>
              </div>
              <div className="p-unit-md">
                <h4 className="font-headline-md text-body-lg text-primary mb-unit-sm">
                  ChatGPT &amp; Gemini Mastery
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-unit-md">
                  생성형 AI를 활용한 일상의 혁신과 생산성 극대화
                </p>
                <div className="w-full bg-surface-container h-1 mb-unit-md">
                  <div className="bg-secondary h-full" style={{ width: '40%' }}></div>
                </div>
              </div>
            </div>

            {/* Course Card 3 - Canva Youtube Creator */}
            <div
              onClick={() => onNavigate('course-detail')}
              className="group bg-surface border border-outline-variant/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Canva & Youtube Creator"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtmwoyy70y3Xki8vakBXuWVZ8WN8z1gmZ_6ayyPu5Nw0gTNI5PNqVArovmM-vtD0xSJhYGcqlvT7bA7GfosBRumxy4vmRxUIE32tvqX6Klzyf0i_pdVxMofrI08hYWHYk9w_WdTLq6rFVMZlrhssxo7ial6ZiB9_rsQ1D_EiYqjCeZHeruyOZirSGjGM75guSq8FLmY2ee6eMTnsqgygQFia2Lxkn1dw5NLtJdVEQnR_zaDA3NDaga2mqi35WrdSp9aX0z6S2Esjw"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] px-2 py-1 rounded font-bold">
                    CREATIVE
                  </span>
                </div>
              </div>
              <div className="p-unit-md">
                <h4 className="font-headline-md text-body-lg text-primary mb-unit-sm">
                  Canva &amp; Youtube Creator
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-unit-md">
                  나만의 콘텐츠로 세상과 소통하는 크리에이티브 가이드
                </p>
                <div className="w-full bg-surface-container h-1 mb-unit-md">
                  <div className="bg-secondary h-full" style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>

            {/* Course Card 4 - School Education */}
            <div
              onClick={() => onNavigate('course-detail')}
              className="group bg-surface border border-outline-variant/30 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt="Public/School AI Education"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDmst0pQ2ZRKOCO4LaxQIPmhgrLdTvV-0gGyyWnK-w1spg2LCp2vi0E9bRmzTTKfrdcSN4TD7OEc7dvtBpo8omcXPHfwO4KffexoszqP_O0Bj7t_vs9w1iZS9yFsZz83hMsPmCZVB3Y_2IGzmtcYclmpfCYr0ZvJddj8HZrNdDDmCnwnRNNxgZDUdbHcN4Bf_OeiWbjv35ZLwOHa-wzauZ18Qj0pH0nAsT5MTiSrLMrlvJ6FOS3ha9NQzMGppbqW63SeX7JYrBQ_H0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-[10px] px-2 py-1 rounded font-bold">
                    EDUCATION
                  </span>
                </div>
              </div>
              <div className="p-unit-md">
                <h4 className="font-headline-md text-body-lg text-primary mb-unit-sm">
                  Public/School AI Education
                </h4>
                <p className="font-label-sm text-label-sm text-on-surface-variant mb-unit-md">
                  공교육 현장에 바로 적용 가능한 AI 리터러시 강화 과정
                </p>
                <div className="w-full bg-surface-container h-1 mb-unit-md">
                  <div className="bg-secondary h-full" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="py-[160px] bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="mb-unit-xl text-center cursor-pointer" onClick={() => onNavigate('blog')}>
            <h2 className="font-headline-lg text-headline-lg text-primary">Latest Insights</h2>
            <p className="text-on-surface-variant font-body-md mt-1">세상을 바라보는 MODUZ의 깊이 있는 시선</p>
          </div>
          <div className="flex flex-col gap-unit-md">
            <div
              onClick={() => onNavigate('blog')}
              className="flex flex-col md:flex-row bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 group hover:border-secondary transition-colors cursor-pointer"
            >
              <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="Latest Insights"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCw_3is1m_9Vidq1tsUUc_B1OYiLPNYrJp9ldTikNEQCV0ESG-FNFa1ZeAN8YtkbEOYsfEv0gqZ0DNIXe0OX_oQe8D-y1KA6d0tjeArrtKVWrt9Dihak4ySvX8NkGrUSC0g-gCdyKMSRf3QBUEQ8iblIYFl51VmW16BAF59t11qkirQTIJr2upF4cbeaKqueU_wz6OeiZMvDxEZmgAbrbDwp0YPJjngWNV2gvUTbgkNYduJzt0QWFo9kHjhcdNhHNABisAef419usg"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-unit-lg md:w-2/3 flex flex-col justify-center">
                <span className="text-secondary font-label-sm text-label-sm mb-unit-sm uppercase tracking-widest">
                  AI &amp; Ethics
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-unit-md">
                  인간미 있는 기술: AI 시대에 우리가 잃지 말아야 할 것들
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-unit-lg line-clamp-2">
                  자동화의 물결 속에서 인간의 고유성은 어디에서 빛나는가? MODUZ가 제안하는 기술과의 공존 방식에 대한 심층 리포트입니다.
                </p>
                <div className="flex items-center gap-unit-md">
                  <span className="font-label-sm text-label-sm text-outline text-on-surface-variant/60">2024.05.12</span>
                  <span className="w-1 h-1 bg-outline rounded-full"></span>
                  <span className="font-label-sm text-label-sm text-outline text-on-surface-variant/60">5 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-[160px] px-margin-mobile md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto">
          <h2
            className="font-headline-lg text-headline-lg text-primary mb-unit-xl text-center cursor-pointer"
            onClick={() => onNavigate('store')}
          >
            Digital Store
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Product 1 */}
            <div className="bg-surface-container-lowest p-unit-lg rounded-xl border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <div
                className="w-full aspect-square bg-surface rounded-lg mb-unit-md flex items-center justify-center border border-dashed border-outline-variant cursor-pointer"
                onClick={() => onNavigate('store')}
              >
                <span className="material-symbols-outlined text-secondary text-6xl">book</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-unit-xs">
                AI Prompt Guide
              </h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-unit-lg">
                초보자도 전문가처럼 소통하는 100가지 프롬프트
              </p>
              <div className="mt-auto w-full flex items-center justify-between border-t border-outline-variant/30 pt-unit-md">
                <span className="font-headline-md text-primary">₩29,000</span>
                <button
                  onClick={() => onNavigate('store')}
                  className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-white">shopping_cart</span>
                </button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-surface-container-lowest p-unit-lg rounded-xl border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <div
                className="w-full aspect-square bg-surface rounded-lg mb-unit-md flex items-center justify-center border border-dashed border-outline-variant cursor-pointer"
                onClick={() => onNavigate('store')}
              >
                <span className="material-symbols-outlined text-secondary text-6xl">task_alt</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-unit-xs">
                Notion Template
              </h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-unit-lg">
                성장을 기록하고 관리하는 올인원 학습 템플릿
              </p>
              <div className="mt-auto w-full flex items-center justify-between border-t border-outline-variant/30 pt-unit-md">
                <span className="font-headline-md text-primary">₩15,000</span>
                <button
                  onClick={() => onNavigate('store')}
                  className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-white">shopping_cart</span>
                </button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-surface-container-lowest p-unit-lg rounded-xl border border-outline-variant/30 flex flex-col items-center text-center hover:shadow-xl transition-all">
              <div
                className="w-full aspect-square bg-surface rounded-lg mb-unit-md flex items-center justify-center border border-dashed border-outline-variant cursor-pointer"
                onClick={() => onNavigate('store')}
              >
                <span className="material-symbols-outlined text-secondary text-6xl">videocam</span>
              </div>
              <h4 className="font-headline-md text-headline-md text-primary mb-unit-xs">
                Online Course
              </h4>
              <p className="font-label-sm text-label-sm text-on-surface-variant mb-unit-lg">
                언제 어디서나 무제한으로 수강 가능한 VOD 패키지
              </p>
              <div className="mt-auto w-full flex items-center justify-between border-t border-outline-variant/30 pt-unit-md">
                <span className="font-headline-md text-primary">₩99,000</span>
                <button
                  onClick={() => onNavigate('store')}
                  className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm text-white">shopping_cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-[160px] bg-surface">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <h2
            className="font-headline-lg text-headline-lg text-primary mb-unit-xl text-center cursor-pointer"
            onClick={() => onNavigate('reviews')}
          >
            Reviews
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            <div className="glass-card p-unit-lg rounded-xl">
              <div className="flex text-secondary mb-unit-sm">
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="font-body-md text-body-md text-primary mb-unit-md leading-relaxed italic">
                "기술적인 내용도 중요했지만, 무엇보다 '어떻게 성장해야 하는가'에 대한 깊은 영감을 받았습니다."
              </p>
              <div className="flex items-center gap-unit-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container"></div>
                <div>
                  <p className="font-label-md text-label-md text-primary">김지훈 님</p>
                  <p className="font-label-sm text-label-sm text-outline text-on-surface-variant/70">대기업 기획팀 과장</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-unit-lg rounded-xl">
              <div className="flex text-secondary mb-unit-sm">
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="font-body-md text-body-md text-primary mb-unit-md leading-relaxed italic">
                "막연하게 느껴졌던 AI가 일상의 강력한 도구가 되었습니다. MODUZ의 강의는 정말 실용적이에요."
              </p>
              <div className="flex items-center gap-unit-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container"></div>
                <div>
                  <p className="font-label-md text-label-md text-primary">이민아 님</p>
                  <p className="font-label-sm text-label-sm text-outline text-on-surface-variant/70">프리랜서 디자이너</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-unit-lg rounded-xl">
              <div className="flex text-secondary mb-unit-sm">
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
                <span className="material-symbols-outlined fill-current" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
              </div>
              <p className="font-body-md text-body-md text-primary mb-unit-md leading-relaxed italic">
                "교육 현장에서 고민하던 많은 지점들이 명쾌하게 해결되었습니다. 학생들과 함께 나눌 내용이 많아졌습니다."
              </p>
              <div className="flex items-center gap-unit-sm">
                <div className="w-10 h-10 rounded-full bg-secondary-container"></div>
                <div>
                  <p className="font-label-md text-label-md text-primary">박서연 님</p>
                  <p className="font-label-sm text-label-sm text-outline text-on-surface-variant/70">초등학교 교사</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-[160px] px-margin-mobile md:px-margin-desktop bg-surface-container-highest">
        <div className="max-w-3xl mx-auto bg-surface p-unit-lg md:p-unit-xl rounded-2xl shadow-sm">
          <div className="text-center mb-unit-xl">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-unit-sm">Get in Touch</h2>
            <p className="text-on-surface-variant font-body-md">당신의 새로운 시작, MODUZ가 함께 고민하겠습니다.</p>
          </div>
          <form className="space-y-unit-md" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
              <div className="space-y-unit-xs">
                <label className="font-label-sm text-label-sm text-primary uppercase block">이름</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-surface-container-low border-outline-variant rounded-lg p-unit-sm focus:ring-secondary focus:border-secondary transition-all text-on-surface"
                  placeholder="성함을 입력하세요"
                  type="text"
                />
              </div>
              <div className="space-y-unit-xs">
                <label className="font-label-sm text-label-sm text-primary uppercase block">연락처</label>
                <input
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-surface-container-low border-outline-variant rounded-lg p-unit-sm focus:ring-secondary focus:border-secondary transition-all text-on-surface"
                  placeholder="010-0000-0000"
                  type="tel"
                />
              </div>
            </div>
            <div className="space-y-unit-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase block">이메일</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-surface-container-low border-outline-variant rounded-lg p-unit-sm focus:ring-secondary focus:border-secondary transition-all text-on-surface"
                placeholder="example@moduz.com"
                type="email"
              />
            </div>
            <div className="space-y-unit-xs">
              <label className="font-label-sm text-label-sm text-primary uppercase block">문의내용</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                className="w-full bg-surface-container-low border-outline-variant rounded-lg p-unit-sm focus:ring-secondary focus:border-secondary transition-all text-on-surface"
                placeholder="문의하실 내용을 자유롭게 적어주세요."
                rows={4}
              ></textarea>
            </div>
            <div className="flex items-center gap-unit-sm py-unit-sm">
              <input
                id="privacy"
                name="privacy"
                checked={formData.privacy}
                onChange={handleInputChange}
                className="rounded text-secondary focus:ring-secondary cursor-pointer"
                type="checkbox"
              />
              <label className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer select-none" htmlFor="privacy">
                개인정보 수집 및 이용에 동의합니다.
              </label>
            </div>
            <button
              className="w-full py-4 bg-primary text-on-primary font-headline-md text-body-lg rounded-lg hover:bg-secondary hover:text-white transition-all cursor-pointer"
              type="submit"
            >
              문의 보내기
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
