import React, { useState } from 'react';

interface ReviewsProps {
  onNavigate: (page: string) => void;
}

interface Review {
  id: string;
  course: string;
  rating: number;
  text: string;
  author: string;
  role: string;
}

export default function Reviews({ onNavigate }: ReviewsProps) {
  const [reviewsList, setReviewsList] = useState<Review[]>([
    {
      id: 'r1',
      course: 'Corporate AI Strategy',
      rating: 5,
      text: '사내 AI 도입을 두고 수개월 동안 내부적으로 의견이 엇갈렸는데, 모두즈의 Executive 과정을 듣고 명확한 거버넌스와 추진 로드맵을 구축할 수 있었습니다. 최고의 선택이었습니다.',
      author: '김지훈 과장',
      role: 'S전자 전사전략기획실'
    },
    {
      id: 'r2',
      course: 'ChatGPT & Gemini Mastery',
      rating: 5,
      text: '단순한 사용 팁을 배우는 줄 알았는데 지식 축적의 사고방식을 완전히 뒤집어 놓았습니다. 노션과 결합해 만든 저만의 프라이빗 세컨드 브레인은 제 최고의 자산이 되었습니다.',
      author: '이민아 님',
      role: '프리랜서 인포그래픽 디자이너'
    },
    {
      id: 'r3',
      course: 'Public/School AI Education',
      rating: 5,
      text: '학교 컴퓨터 교과 수업 및 자유학기제 동아리 활동 설계에 큰 영감을 얻었습니다. 학생들이 직접 윤리 필터를 만들고 안전 가이드를 학습하는 수업을 개설할 예정입니다.',
      author: '박서연 교사',
      role: '서울대도초등학교'
    },
    {
      id: 'r4',
      course: 'Generative Design Mastery',
      rating: 4,
      text: '컨트롤넷과 깊이 맵 가이드를 연동해 고화질 렌더링을 추출하는 과정이 인상 깊었습니다. 미드저니 공식 프롬프트 외에 모두즈만의 실무 가이드를 제공받아 유익했습니다.',
      author: '최영준 디렉터',
      role: 'Studio Arcane 아트실'
    }
  ]);

  const [filterCourse, setFilterCourse] = useState<string>('all');
  const [newReview, setNewReview] = useState({
    author: '',
    role: '',
    course: 'Corporate AI Strategy',
    rating: 5,
    text: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingSelect = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.text) {
      alert('성함과 리뷰 내용을 모두 채워 주셔야 합니다.');
      return;
    }
    const createdReview: Review = {
      id: `r-${Date.now()}`,
      course: newReview.course,
      rating: newReview.rating,
      text: newReview.text,
      author: newReview.author,
      role: newReview.role || '학습 회원'
    };

    setReviewsList([createdReview, ...reviewsList]);
    setNewReview({
      author: '',
      role: '',
      course: 'Corporate AI Strategy',
      rating: 5,
      text: ''
    });
    alert('소중한 수강 후기가 성공적으로 등록되었습니다!');
  };

  const filteredReviews = reviewsList.filter(rev => {
    if (filterCourse === 'all') return true;
    return rev.course === filterCourse;
  });

  return (
    <div id="reviews-view" className="bg-surface text-on-surface">
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-unit-xl">
        
        {/* Header Title Section */}
        <section className="mb-unit-xl">
          <div className="max-w-2xl">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-unit-sm block font-semibold">
              LEARNER TESTIMONIALS
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg font-bold text-primary mb-unit-md leading-tight">
              Voices of Growth.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              모두즈 교육실을 거쳐간 각계 오피니언 리더, 전문 기획자, 교육 전공자들의 자발적인 학습 후기입니다. 배움의 깊이가 결과의 차이를 만들어 냅니다.
            </p>
          </div>
        </section>

        {/* Course Filter and layout */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          
          {/* Review Grid List */}
          <div className="lg:col-span-8 space-y-unit-lg">
            
            {/* Filter buttons */}
            <div className="flex flex-wrap gap-unit-sm border-b border-outline-variant/30 pb-unit-md">
              <button
                onClick={() => setFilterCourse('all')}
                className={`px-unit-md py-2 text-label-md font-label-md cursor-pointer rounded transition-all ${
                  filterCourse === 'all' ? 'bg-primary text-on-primary text-white font-semibold' : 'bg-surface-container-low text-on-surface-variant hover:border-secondary'
                }`}
              >
                모든 수강 후기 ({reviewsList.length})
              </button>
              <button
                onClick={() => setFilterCourse('Corporate AI Strategy')}
                className={`px-unit-md py-2 text-label-md font-label-md cursor-pointer rounded transition-all ${
                  filterCourse === 'Corporate AI Strategy' ? 'bg-primary text-on-primary text-white font-semibold' : 'bg-surface-container-low text-on-surface-variant hover:border-secondary'
                }`}
              >
                Corporate AI
              </button>
              <button
                onClick={() => setFilterCourse('ChatGPT & Gemini Mastery')}
                className={`px-unit-md py-2 text-label-md font-label-md cursor-pointer rounded transition-all ${
                  filterCourse === 'ChatGPT & Gemini Mastery' ? 'bg-primary text-on-primary text-white font-semibold' : 'bg-surface-container-low text-on-surface-variant hover:border-secondary'
                }`}
              >
                ChatGPT &amp; Gemini
              </button>
              <button
                onClick={() => setFilterCourse('Public/School AI Education')}
                className={`px-unit-md py-2 text-label-md font-label-md cursor-pointer rounded transition-all ${
                  filterCourse === 'Public/School AI Education' ? 'bg-primary text-on-primary text-white font-semibold' : 'bg-surface-container-low text-on-surface-variant hover:border-secondary'
                }`}
              >
                Public/School AI
              </button>
            </div>

            {/* Testimonials */}
            {filteredReviews.length === 0 && (
              <div className="text-center py-16 bg-white border border-outline-variant/30 rounded-xl">
                <p className="font-body-md text-on-surface-variant">선택하신 교육과정의 등록된 후기가 아직 없습니다.</p>
              </div>
            )}

            <div className="grid grid-cols-1 gap-unit-md">
              {filteredReviews.map((rev) => (
                <div key={rev.id} className="glass-card p-unit-lg rounded-xl flex flex-col justify-between border border-outline-variant/30 relative">
                  <div>
                    <div className="flex justify-between items-start mb-unit-sm">
                      <div className="flex text-secondary">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className="material-symbols-outlined select-none"
                            style={{ fontVariationSettings: `"${i < rev.rating ? 'FILL' : 'FILL'}" ${i < rev.rating ? 1 : 0}` }}
                          >
                            star
                          </span>
                        ))}
                      </div>
                      <span className="text-xs bg-secondary-container/15 text-secondary px-2 py-1 font-semibold rounded uppercase">
                        {rev.course}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-primary mb-unit-lg leading-relaxed italic">
                      "{rev.text}"
                    </p>
                  </div>
                  <div className="flex items-center gap-unit-sm pt-unit-md border-t border-outline-variant/30">
                    <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center font-bold text-secondary text-sm">
                      {rev.author[0]}
                    </div>
                    <div>
                      <p className="font-label-md text-label-md text-primary font-bold">{rev.author}</p>
                      <p className="font-label-sm text-label-sm text-on-surface-variant/70 font-semibold">{rev.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Review Creator Form */}
          <div className="lg:col-span-4 bg-white border border-outline-variant p-unit-lg rounded-xl sticky top-24 shadow-sm text-on-surface space-y-4">
            <h3 className="font-headline-md text-headline-md text-primary font-bold pb-unit-sm border-b border-outline-variant/30">
              Share Your Story
            </h3>
            <p className="font-body-sm text-on-surface-variant leading-relaxed">
              모두즈 아틀리에에서의 학습 경험은 어떠셨나요? 다른 학습자들의 선택에 값진 기준이 됩니다.
            </p>

            <form onSubmit={handleReviewSubmit} className="space-y-unit-sm pt-2">
              <div className="space-y-1">
                <label className="text-xs font-bold text-primary block uppercase">이름</label>
                <input
                  type="text"
                  name="author"
                  required
                  value={newReview.author}
                  onChange={handleInputChange}
                  className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                  placeholder="예: 강동욱"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary block uppercase">직업 / 소속기관</label>
                <input
                  type="text"
                  name="role"
                  value={newReview.role}
                  onChange={handleInputChange}
                  className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                  placeholder="예: IT 솔루션 디자이너"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary block uppercase">수강하신 과정</label>
                <select
                  name="course"
                  value={newReview.course}
                  onChange={handleInputChange}
                  className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                >
                  <option value="Corporate AI Strategy">Corporate AI Strategy</option>
                  <option value="ChatGPT & Gemini Mastery">ChatGPT &amp; Gemini Mastery</option>
                  <option value="Public/School AI Education">Public/School AI Education</option>
                  <option value="Generative Design Mastery">Generative Design Mastery</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary block uppercase">평점 선택</label>
                <div className="flex gap-1 text-secondary">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      key={stars}
                      type="button"
                      onClick={() => handleRatingSelect(stars)}
                      className="p-1 cursor-pointer bg-transparent border-none text-secondary hover:scale-110 transition-transform"
                    >
                      <span
                        className="material-symbols-outlined select-none"
                        style={{ fontVariationSettings: `"${stars <= newReview.rating ? 'FILL' : 'FILL'}" ${stars <= newReview.rating ? 1 : 0}` }}
                      >
                        star
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-primary block uppercase">상세 후기 내용</label>
                <textarea
                  name="text"
                  required
                  rows={4}
                  value={newReview.text}
                  onChange={handleInputChange}
                  className="w-full bg-[#F8F8F6] border border-outline-variant rounded p-2 text-sm text-on-surface"
                  placeholder="수업의 좋았던 점이나 실무 적용 경험을 상세하게 들려주세요."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-primary text-on-primary font-bold rounded-lg hover:bg-secondary transition-all cursor-pointer text-white border-none mt-2"
              >
                후기 등록하기
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
