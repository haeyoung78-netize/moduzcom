import React, { useState } from 'react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'general',
    message: '',
    privacy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      alert('개인정보 수집 및 이용에 동의하셔야 신청이 접수됩니다.');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      alert('접수가 완료되었습니다. 담당자가 업무일 기준 24시간 이내에 기재해 주신 연락처로 연락드리겠습니다.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'general',
        message: '',
        privacy: false
      });
      setSubmitted(false);
    }, 800);
  };

  return (
    <div id="contact-view" className="bg-surface text-on-surface">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl">
        <section className="mb-unit-xl">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-unit-sm block font-semibold">
              GET IN TOUCH
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-primary mb-unit-md leading-tight">
              Start Your Journey.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              우리의 지식 공동체에 동참하거나, 맞춤형 인하우스 교육 솔루션을 구성해 보세요. MODUZ의 어드바이저가 귀하 또는 기업의 학습 로드맵 구축을 함께 의논하겠습니다.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-unit-lg">
            <div className="bg-surface-container-low border border-outline-variant p-unit-lg rounded-xl space-y-unit-md">
              <h3 className="font-headline-md text-headline-md text-primary font-bold pb-unit-sm border-b border-outline-variant/30">
                Contact Channels
              </h3>
              <ul className="space-y-unit-md">
                <li className="flex items-start gap-unit-md">
                  <span className="material-symbols-outlined text-secondary pt-1">mail</span>
                  <div>
                    <p className="font-label-sm text-on-surface-variant font-bold uppercase">Corporate Inquiry Email</p>
                    <p className="font-label-md text-primary font-semibold">haeyoung78@gmail.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-unit-md">
                  <span className="material-symbols-outlined text-secondary pt-1">call</span>
                  <div>
                    <p className="font-label-sm text-on-surface-variant font-bold uppercase">Educational Advisor Phone</p>
                    <p className="font-label-md text-primary font-semibold">02-1544-3000</p>
                  </div>
                </li>
                <li className="flex items-start gap-unit-md">
                  <span className="material-symbols-outlined text-secondary pt-1">location_on</span>
                  <div>
                    <p className="font-label-sm text-on-surface-variant font-bold uppercase">Atelier Location</p>
                    <p className="font-label-md text-primary font-semibold leading-relaxed">
                      서울특별시 강남구 테헤란로 152,<br />
                      MODUZ 교육 설계 아틀리에 (7층)
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Operating Hours */}
            <div className="bg-surface-container-low border border-outline-variant p-unit-lg rounded-xl space-y-3">
              <h4 className="font-headline-md text-body-lg text-primary font-bold">Office Hours</h4>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                월요일 - 금요일: 09:00 - 18:00 (KST)<br />
                주말 및 공휴일: 휴무 (이메일 및 웹 문의 연중무휴 상시 접수)
              </p>
            </div>
          </div>

          {/* Inquiry Form Column */}
          <div className="lg:col-span-8 bg-white border border-outline-variant p-unit-lg md:p-unit-xl rounded-xl shadow-sm">
            <h3 className="font-headline-lg text-headline-lg text-primary font-bold mb-2">상담 및 도입 문의 신청</h3>
            <p className="font-body-md text-on-surface-variant mb-unit-xl leading-relaxed">
              도입 목적과 전공 분야를 남겨주시면 담당 파트너가 상세한 제안서 및 리소스를 지참하여 안내해 드립니다.
            </p>

            <form onSubmit={handleSubmit} className="space-y-unit-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary block">이름</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-3 text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
                    placeholder="성함을 기재하세요"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary block">연락처</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-3 text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-unit-md">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary block">회사/기관명 (선택)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-3 text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
                    placeholder="올인원 주식회사"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase text-primary block">문의 구분</label>
                  <select
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleInputChange}
                    className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-3 text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
                  >
                    <option value="general">일반 과정 수강 문의</option>
                    <option value="corporate">B2B 기업 전용 워크숍 도입</option>
                    <option value="gvt">B2G 공공기관/학교 위탁 온보딩</option>
                    <option value="store">디지털 스토어 대량 라이선스</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase text-primary block">상세 문의 내용</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-3 text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
                  placeholder="원하시는 수강 규모, 예정 일시, 집중하고 싶은 학습 토픽(RAG, AI 비즈니스 모델 등)을 적어주시면 보다 정확한 제안이 가능합니다."
                ></textarea>
              </div>

              <div className="flex items-center gap-unit-sm py-unit-sm">
                <input
                  type="checkbox"
                  id="privacy-chk"
                  name="privacy"
                  checked={formData.privacy}
                  onChange={handleInputChange}
                  className="rounded text-secondary focus:ring-secondary cursor-pointer"
                  required
                />
                <label className="font-label-sm text-label-sm text-on-surface-variant cursor-pointer select-none" htmlFor="privacy-chk">
                  개인정보 수집 및 상담 전화를 위한 이용에 동의합니다.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-primary text-on-primary font-bold text-body-lg rounded-lg hover:bg-secondary transition-all cursor-pointer text-white border-none"
              >
                상담 및 도입 제안서 신청하기
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
