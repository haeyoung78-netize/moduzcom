import React, { useState } from 'react';

interface AboutProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const [isInterviewOpen, setIsInterviewOpen] = useState(false);

  return (
    <div id="about-view" className="w-full bg-surface text-on-surface">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl space-y-[120px]">
        
        {/* The Modern Atelier Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-stretch mt-10">
          <div className="lg:col-span-7 bg-surface-container-lowest border border-outline-variant p-unit-xl rounded-xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-semibold">
                OUR PHILOSOPHY
              </span>
              <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg text-primary font-bold">
                The Modern Atelier
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Inspired by the great craft workshops of history, we've designed a digital space that prioritizes the artist, the scholar, and the seeker. Every pixel is placed to reduce noise and amplify the signal of knowledge. We aren't just an EdTech company; we are curators of the human potential.
              </p>
            </div>
            <div className="quote-accent pl-unit-md mt-8">
              <p className="font-body-lg text-body-lg italic text-primary font-medium">
                "The most powerful machine in the world is still the human mind inspired by a great idea."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative overflow-hidden rounded-xl border border-outline-variant min-h-[350px] bg-[#1a1c1b] flex items-end">
            <div className="absolute inset-0 z-0 opacity-40">
              <img
                className="w-full h-full object-cover"
                alt="Our Vision"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCB2X0Z6CXh8-YJsfl4z9K0nJ_yfdMZKHrU8WeKkRA9yRyw_Ejx3Gx3fv5PBkRa25q7JAO-hmhf6StbHsBOAVzeETtBhHfRw7MJG6wbC9VEzto854G03MPTYbIxhiSaZvBxhnuTgq4psqCgtrNHL_cutcypOGBVLGxSQgKsan8slhd5bazzDdvxs6MiVg1PV9hno5wyeOOeCWfQoBnVx32bnSmt3Hw6Rm1vRiL6oqB5oNWfXI6Npmf0YSHWZDmbjuZJuzkEUnlIhTY"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="relative z-10 p-unit-xl text-white">
              <span className="font-label-sm text-label-sm text-secondary-fixed block uppercase tracking-widest text-yellow-600 font-semibold mb-2">
                Our Vision
              </span>
              <h3 className="font-headline-lg text-headline-lg text-white font-semibold">
                Architecting the future of learning.
              </h3>
            </div>
          </div>
        </section>

        {/* Master Instructor Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 space-y-unit-lg order-2 lg:order-1">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block font-semibold">
              EXPERTISE
            </span>
            <h2 className="font-headline-lg text-display-lg-mobile md:text-headline-lg text-primary font-bold">
              Meet Our Master Instructor
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Leading our pedagogical mission is Sarah Han, a visionary in contemporary educational design. With over two decades of experience at the intersection of psychology and digital interface, Sarah ensures every course at MODUZ is a masterpiece of engagement and retention.
            </p>
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => onNavigate('courses')}
                className="px-6 py-3 bg-primary text-on-primary font-label-md text-label-md hover:bg-secondary hover:text-white transition-all cursor-pointer"
              >
                View Her Courses
              </button>
              <button
                onClick={() => setIsInterviewOpen(true)}
                className="px-6 py-3 border border-primary text-primary font-label-md text-label-md hover:bg-primary/5 transition-all cursor-pointer"
              >
                Read Interview
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 relative order-1 lg:order-2">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-outline-variant shadow-lg relative bg-surface-container-high">
              <img
                className="w-full h-full object-cover object-top"
                alt="Sarah Han Portrait"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEV9fuo6lFYebyQoUtIsVq4d2PYcsYVF9bxA8iSWtDkkYBBKhKHugbykwme-B43FWfmDzjRk8TK2hBVfSpxvnkF180GnjwfaLPWY8C69HL_m6E8nGhTxqnE68K7NAKxIobT6Simgp7UTAtm6SkOfbbldhxN80Sy5yfvA4RD6mPZLYFqxg59AgoqzIXM7ZqUEQJS1PEC7HvaVZiw8e4zENRBwk0M6UXoXlhqdcgUm9RgZFbLFIob_ziKcAHKGKaw5djNf5-U6gtYrhb6A"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm px-6 py-3 border border-outline-variant rounded shadow-sm text-right">
                <p className="font-label-sm text-primary font-bold tracking-widest">SARAH HAN</p>
                <p className="font-label-sm text-secondary text-[11px] uppercase tracking-wide">Chief Pedagogy Officer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="space-y-unit-xl">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">Our Core Values</h2>
            <p className="font-body-md text-on-surface-variant mt-2">우리가 세우는 배움의 가치는 곧 배움의 격을 만듭니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <div className="p-unit-lg bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">auto_awesome</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-semibold">Clarity</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We strip away the noise to let the essence of knowledge shine through with absolute precision.
              </p>
            </div>

            <div className="p-unit-lg bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">favorite</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-semibold">Empathy</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Every feature is built with the learner's journey and emotional state in mind.
              </p>
            </div>

            <div className="p-unit-lg bg-surface-container-lowest border border-outline-variant rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-full bg-secondary-container/10 flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">workspace_premium</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-primary font-semibold">Excellence</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We uphold the highest standards of academic rigor combined with premium modern design.
              </p>
            </div>
          </div>
        </section>

        {/* Trusted By Global Institutions */}
        <section className="py-12 border-t border-b border-outline-variant/30 text-center space-y-unit-lg">
          <p className="font-label-sm text-label-sm tracking-widest text-on-surface-variant/70 uppercase">
            TRUSTED BY GLOBAL INSTITUTIONS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-unit-xl text-primary font-semibold font-sans tracking-wider">
            <span className="flex items-center gap-2 text-on-surface/50 hover:text-primary transition-colors cursor-default">
              <span className="material-symbols-outlined">hexagon</span> ETHOS
            </span>
            <span className="flex items-center gap-2 text-on-surface/50 hover:text-primary transition-colors cursor-default">
              <span className="material-symbols-outlined">architecture</span> ARCANE
            </span>
            <span className="flex items-center gap-2 text-on-surface/50 hover:text-primary transition-colors cursor-default">
              <span className="material-symbols-outlined">palette</span> CANVAS
            </span>
            <span className="flex items-center gap-2 text-on-surface/50 hover:text-primary transition-colors cursor-default">
              <span className="material-symbols-outlined">school</span> GENIUS
            </span>
            <span className="flex items-center gap-2 text-on-surface/50 hover:text-primary transition-colors cursor-default">
              <span className="material-symbols-outlined">public</span> SPHERE
            </span>
          </div>
        </section>

        {/* Begin your mastery today Banner */}
        <section className="bg-primary text-on-primary rounded-xl p-unit-xl flex flex-col md:flex-row items-center justify-between text-center md:text-left shadow-lg text-white">
          <div className="space-y-2 mb-unit-lg md:mb-0">
            <h3 className="font-headline-lg text-headline-lg text-white font-bold">
              Begin your mastery today.
            </h3>
            <p className="font-body-md text-white/80">
              Join over 50,000 students in the pursuit of excellence.
            </p>
          </div>
          <button
            onClick={() => onNavigate('courses')}
            className="px-8 py-4 bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold hover:bg-secondary hover:text-white transition-all cursor-pointer border-none"
          >
            Explore Courses
          </button>
        </section>
      </main>

      {/* Interactive Interview Modal */}
      {isInterviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
          <div className="bg-white border border-outline-variant rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-unit-lg md:p-unit-xl relative">
            <button
              onClick={() => setIsInterviewOpen(false)}
              className="absolute top-4 right-4 text-primary hover:text-secondary material-symbols-outlined bg-transparent border-none cursor-pointer"
            >
              close
            </button>
            <div className="space-y-6">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                CPO INTERVIEW
              </span>
              <h3 className="font-headline-lg text-headline-lg text-primary font-bold">
                "기술과 인간을 잇는 배움의 가치"
              </h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-outline-variant bg-surface-container-high mb-4">
                <img
                  className="w-full h-full object-cover"
                  alt="Sarah Han interview preview"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEV9fuo6lFYebyQoUtIsVq4d2PYcsYVF9bxA8iSWtDkkYBBKhKHugbykwme-B43FWfmDzjRk8TK2hBVfSpxvnkF180GnjwfaLPWY8C69HL_m6E8nGhTxqnE68K7NAKxIobT6Simgp7UTAtm6SkOfbbldhxN80Sy5yfvA4RD6mPZLYFqxg59AgoqzIXM7ZqUEQJS1PEC7HvaVZiw8e4zENRBwk0M6UXoXlhqdcgUm9RgZFbLFIob_ziKcAHKGKaw5djNf5-U6gtYrhb6A"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="font-body-md text-on-surface-variant space-y-4 leading-relaxed">
                <p className="font-bold text-primary">Q. 모두즈 아틀리에 교육 철학의 핵심은 무엇인가요?</p>
                <p>
                  "우리는 단순한 AI 활용 팁을 제공하는 교육기관이 아닙니다. AI라는 강력한 도구가 주어졌을 때 인간이 어떻게 고차원적으로 사고하고 창의적인 문제 해결 능력을 유지할 것인가가 핵심입니다. 그것이 바로 'Technology as a tool, People at the center' 입니다."
                </p>
                <p className="font-bold text-primary">Q. 학습자의 몰입을 높이기 위해 디자인적으로 어떤 고민을 하셨나요?</p>
                <p>
                  "디지털 피로감을 덜어내는 것이 우선이었습니다. 시각적 소음을 줄이고 오직 텍스트의 맑은 가독성과 정돈된 여백만으로 몰입할 수 있도록 한 고풍적인 아틀리에의 오프라인 미학을 온라인 UI에 녹여냈습니다."
                </p>
                <p className="font-bold text-primary">Q. 예비 학생들에게 한 마디 부탁드립니다.</p>
                <p>
                  "학습의 완성이 아닌 학습의 '과정'에서 희열을 얻어가는 지식 공동체 모두즈에 오신 것을 환영합니다. 함께 성장의 길을 걸어가 봅시다."
                </p>
              </div>
              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setIsInterviewOpen(false)}
                  className="px-6 py-2 bg-primary text-on-primary font-label-md rounded hover:bg-secondary cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
